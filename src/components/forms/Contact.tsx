'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
  email: z.string().email("Insira um endereço de e-mail válido."),
  telefone: z.string().regex(
    /^\(?\d{2}\)?\s?(9?\d{4})-?(\d{4})$/,
    "Telefone inválido. Ex: (11) 99999-9999"
  ),
  mensagem: z.string().optional(),
});

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Inicialização do formulário gerenciado pelo react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); // Limpa os campos automaticamente
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card rounded-xl p-6 shadow-xl border border-border w-full lg:w-[500px]"
    >
      <p className="text-center text-sm font-medium text-foreground mb-4">
        Solicite um orçamento em{" "}
        <span className="text-cta font-bold">até 10 segundos! ⏱</span>
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
               <FormItem>
                <FormControl>
                  <Input placeholder="Seu nome completo" className="py-5" {...field} />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Seu e-mail corporativo" className="py-5" {...field} />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telefone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="(XX) 9XXXX-XXXX"
                    className="py-5"
                    {...field}
                    onChange={(e) => {
                      // Aplicando uma máscara simples direto no evento de input
                      let value = e.target.value.replace(/\D/g, "");
                      if (value.length > 11) value = value.slice(0, 11);
                      if (value.length > 2) value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                      if (value.length > 9) value = `${value.slice(0, 10)}-${value.slice(10)}`;
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mensagem"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Sua mensagem"
                    className="resize-none min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full bg-cta text-cta-foreground font-bold py-6 rounded-lg hover:opacity-90 transition-opacity text-sm tracking-wide disabled:opacity-50"
          >
            {status === "loading" ? "ENVIANDO..." : 
             status === "success" ? "CONTATO ENVIADO! ✓" : 
             status === "error" ? "ERRO AO ENVIAR. TENTE NOVAMENTE" : 
             "SOLICITAR CONTATO!"}
          </Button>
          
          <p className="text-xs text-muted-foreground text-center mt-2">
            *Ao enviar, você concorda com nossa política de privacidade.
          </p>
        </form>
      </Form>
    </motion.div>
  );
};

export default ContactForm;
