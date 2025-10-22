import { builder } from '@/lib/builder';
import { BuilderComponent } from '@builder.io/react';

export default async function Home() {
  const content = await builder
    .get('page', { userAttributes: { urlPath: '/' } })
    .toPromise();

  return <BuilderComponent model="page" content={content} />;
}
