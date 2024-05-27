import Head from "next/head";
import Navbar from "~/components/navbar";
import Terminal from "~/components/terminal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris Vanderveen</title>
        <meta name="description" content="Software Engineer Extraordinaire" />
        <link rel="icon" href="/initial.png" />
      </Head>
      {/* Navbar */}
      <main className="max-w-screen flex min-h-screen w-screen flex-col items-stretch bg-neutral-800 bg-cover bg-center">
        <Navbar />
        {/* Container for terminal window and other windows */}
        <div className="flex-row justify-center gap-1">
          <div className="w-1/4" />
          {/* Terminal window */}
          <Terminal />
          <div className="w-1/4" />
        </div>
      </main>
    </>
  );
}
