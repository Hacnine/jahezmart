import Home2 from "./home/page";

export const metadata = {
  title: "Home",
  icons: {
    icon: "/new.svg"
  }
}

export default function Home() {
  return (
    <main className="mx-auto">
      <Home2 />
    </main>
  );
}
