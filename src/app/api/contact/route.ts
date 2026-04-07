import { NextResponse } from 'next/server';
import { BrevoClient } from '@getbrevo/brevo';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, nome, telefone, mensagem } = body;


    if (!email) {
      return NextResponse.json({ error: 'Email é obrigatório' }, { status: 400 });
    }

    const client = new BrevoClient({
      apiKey: process.env.BREVO_API_KEY as string,
    });
      
    console.log(telefone.replace(/\D/g, ""));

    const contact = await client.contacts.createContact({
      listIds: [33],
      email: email,
      emailBlacklisted: true,
      smsBlacklisted: true,
      attributes : {
        NOME: nome,
        SMS: "+55"+telefone.replace(/\D/g, ""),
      }
    });

    const noteData = {
      contactIds: [contact.id as number],
      text: mensagem as string 
    };

    await client.notes.createANote(noteData);

    return NextResponse.json({ success: true }, { status: 201 });

  } catch (error: any) {
    console.error('Erro na API do Brevo:', error);
    
    const errorMessage = error.response?.body?.message || 'Erro interno ao adicionar contato';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
