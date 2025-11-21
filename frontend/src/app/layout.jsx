import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/common/ClientLayout";
import Providers from "../store/Providers";
import { Metadata } from "next";
const openSnas = Poppins({ subsets: ["latin"], weight: "600" });
// Open_Sans({ subsets: ['cyrillic'],weight:'400' });

  export const metadata = {
    title:{
      absolute:"",
      default:"Jahezmart",
      template:"%s | Jahezmart"
    },
    description:"Made By Hasanain",
    icons: {
      icon: "/new.svg"
    }
  }

export default function RootLayout({
  children,
}) {

  return (
    <html lang="en">
      <body className={`${openSnas.className} font-sans max-w-[1350px] mx-auto`}  >
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
