// app/page.tsx
import { BuilderComponent } from '@builder.io/react';
import { builder } from '@/lib/builder';

export default async function Home() {
  const content = await builder
    .get('page', { userAttributes: { urlPath: '/' } })
    .toPromise();

  return <BuilderComponent model="page" content={content} />;
}
