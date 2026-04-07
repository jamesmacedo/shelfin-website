import { NextResponse } from 'next/server';
import { BrevoClient } from '@getbrevo/brevo';

export async function createContact(request: Request) {
  try {
    const body = await request.json();
    const { email, nome, listId } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email é obrigatório' }, { status: 400 });
    }

    const client = new BrevoClient({
      apiKey: process.env.BREVO_API_KEY as string,
    });

    await client.contacts.createContact({
      listIds: [1, 5],
      email: email,
      attributes : {
      }
    });

    return NextResponse.json({ success: true }, { status: 201 });

  } catch (error: any) {
    console.error('Erro na API do Brevo:', error);
    
    const errorMessage = error.response?.body?.message || 'Erro interno ao adicionar contato';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
