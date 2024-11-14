import Home2 from "./home/page";
import Head from "next/head";
export const metadata = {
  title: "Home"
}
export default function Home() {
  return (
    <main className=" mx-auto">
      <Head>
        <link rel="icon" href="/new.svg" />
      </Head>
      <Home2 />
    </main>
  );
}
