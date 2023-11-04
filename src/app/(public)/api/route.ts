import { NextResponse } from 'next/server'
import { ContactProps } from '@/types'
import { contactSchema } from '@/zod'

const WEBHOOK_URL = process.env.NEXT_PUBLIC_ZUSTAND_WEBHOOK_URL ?? ''

export async function POST(request: Request) {
  try {
    const body: ContactProps = await request.json()

    const { name, email, message } = contactSchema.parse(body)

    const messageData = {
      content: '@everyone',
      embeds: [
        {
          description: 'You have a new message!',
          color: 16318541,
          fields: [
            {
              name: 'Nome',
              value: name,
              inline: true,
            },
            {
              name: 'E-mail:',
              value: email,
              inline: true,
            },
            {
              name: 'Mensagem',
              value: message,
            },
          ],
          author: {
            name: 'Visitor',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg6e2GibzGWjfr21rRt-LFaZq8ayZgcYpxmw&usqp=CAU',
            icon_url:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg6e2GibzGWjfr21rRt-LFaZq8ayZgcYpxmw&usqp=CAU',
          },
          footer: {
            text: 'Sent by portfolio',
            icon_url:
              'https://raw.githubusercontent.com/renovatt/portfolio/main/public/icon-512x512.png',
          },
          thumbnail: {
            url: 'https://raw.githubusercontent.com/renovatt/portfolio/main/public/icon-512x512.png',
          },
        },
      ],
      attachments: [],
    }

    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
    })

    return NextResponse.json({
      message: 'Your message was sent!',
    })
  } catch (error) {
    return NextResponse.error()
  }
}
