import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris Vanderveen</title>
        <meta name="description" content="Welcome to my quiet place" />
        <link rel="icon" href="/initial.png" />
      </Head>
      <main
        className="flex min-h-screen flex-col bg-cover bg-center"
        style={{ backgroundImage: "url('/paper_gradient_bg.png')" }}
      >
        <div className="container top-0 mx-auto my-8 rounded-lg border-2 border-solid border-red-500 bg-emerald-500 shadow-lg backdrop-opacity-20"></div>
      </main>
    </>
  );
}
