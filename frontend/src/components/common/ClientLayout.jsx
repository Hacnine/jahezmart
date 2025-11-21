"use client";

import { usePathname } from "next/navigation";
import Header from "./header/Header";
import Footer from "./ui/Footer";
import SimpleBottomNavigation from "./header/FixedBottomNavigation";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Header />}
      {children}
      {!isAdmin && <SimpleBottomNavigation />}
      {!isAdmin && <Footer />}
    </>
  );
}