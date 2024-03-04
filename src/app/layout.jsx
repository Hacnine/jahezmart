import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/common/header/Header";
import Footer from "../components/common/ui/Footer";
import FilterContextProvider from "../context_reducer/filterContext";
import CartContextProvider, {
} from "../context_reducer/cartContext";
import SimpleBottomNavigation from "../components/common/header/FixedBottomNavigation";
import { Metadata } from "next";
const openSnas = Poppins({ subsets: ["latin"], weight: "600" });
// Open_Sans({ subsets: ['cyrillic'],weight:'400' });

  export const metadata = {
    title:{
      absolute:"",
      default:"Jahezmart",
      template:"%s | Jahezmart"
    },
    description:"Made By Hasanain"
  }

export default function RootLayout({
  children,
}) {

  return (
    <html lang="en">
      <body className={`${openSnas.className} font-sans max-w-[1350px] mx-auto`}  >
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
