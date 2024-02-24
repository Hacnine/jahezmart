import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/ui/Footer";
import FilterContextProvider from "@/context_reducer/filterContext";
import CartContextProvider, {
  CartContext,
} from "@/context_reducer/cartContext";
import SimpleBottomNavigation from "@/components/common/header/FixedBottomNavigation";

const openSnas = Poppins({ subsets: ["latin"], weight: "400" });
// Open_Sans({ subsets: ['cyrillic'],weight:'400' });

export const metadata: Metadata = {
  title: "Jahezmart",
  icons:{
    icon:['/images/logo.svg']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSnas.className}>
        <FilterContextProvider>
          <CartContextProvider>
            <Header />
            {children}
            <SimpleBottomNavigation />
            <Footer />
          </CartContextProvider>
        </FilterContextProvider>
      </body>
    </html>
  );
}
