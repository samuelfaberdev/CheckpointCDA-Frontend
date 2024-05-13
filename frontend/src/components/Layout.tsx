import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";

export default function Layout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <main className="p-2 flex flex-col gap-2 items-center justify-center">
        {children}
      </main>
    </>
  );
}
