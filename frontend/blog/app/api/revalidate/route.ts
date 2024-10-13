// app/api/revalidate/route.ts

import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(req: Request) {
  const signature = req.headers.get('revalidate-token');
  if (signature !== process.env.STRAPI_API_REVALIDATE_TOKEN) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Invalida la cache con il tag 'articles'
    revalidateTag('articles');
    revalidateTag('article');
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
