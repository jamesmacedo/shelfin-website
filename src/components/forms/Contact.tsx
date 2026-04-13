'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const deisallowedDomains = ["gmail.com", "outlook.com", "hotmail.com", "yahoo.com", "icloud.com"];

const formSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
  email: z.string().email("Insira um endereço de e-mail válido.").refine((email) => {
    const domain = email.split("@")[1];
    return !deisallowedDomains.includes(domain);
  }, "Por favor, use um e-mail corporativo."),
  empresa: z.string().min(3, "A empresa deve ter pelo menos 3 caracteres."),
  telefone: z.string().regex(
    /^\(?\d{2}\)?\s?(9?\d{4})-?(\d{4})$/,
    "Telefone inválido. Ex: (11) 99999-9999"
  ),
  servico: z.string({
    // error: (issue) => issue.input === undefined || issue.input === "" ? "Por favor, selecione um serviço de interesse." : ""
  }).min(3, "Selecione um serviço"),
});

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      empresa: "",
      telefone: "",
      servico: "",
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
        form.reset();
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
      className="bg-card rounded-xl p-6 shadow-xl border border-border"
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
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: João da Silva" className="py-5" {...field} />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="empresa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Empresa</FormLabel>
                <FormControl>
                  <Input placeholder="" className="py-5" {...field} />
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
                <FormLabel>E-mail corporativo</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Ex: joao.silva@empresa.com.br" className="py-5" {...field} />
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
                <FormLabel>Telefone (WhatsApp)</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Ex: (11) 98765-4321"
                    className="py-5"
                    {...field}
                    onChange={(e) => {
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
            name="servico"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Solução de interesse</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="py-5">
                      <SelectValue placeholder="Selecione uma opção..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="NR-1">NR-1</SelectItem>
                    <SelectItem value="Treinamentos">Treinamentos</SelectItem>
                    <SelectItem value="Consultoria de RH">Consultoria de RH</SelectItem>
                    <SelectItem value="Recrutamento & Seleção">Recrutamento & Seleção</SelectItem>
                    <SelectItem value="Executive Search">Executive Search</SelectItem>
                  </SelectContent>
                </Select>
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
