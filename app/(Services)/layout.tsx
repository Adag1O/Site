import type { Metadata } from "next";
import "../globals.css";

import Link from "next/link";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Exclusive/Footer";

export const metadata: Metadata = {
  title: "Services",
  description: "",
};

export default function CoursesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={` antialiased`}
      >
        <Navbar calendar={false} Logout={false}>
          <Link href="/">Suscriptions</Link>
          <Link href="/">OneTime</Link>
          <Link href="/">Support</Link>
          <Link href="/">Contact</Link>
        </Navbar>
      {children}     
      <Footer>
        <li>  <Link href="/">Suscriptions</Link></li>
        <li>  <Link href="/">OneTime</Link></li>
        <li>  <Link href="/">Support</Link></li>
        <li>  <Link href="">Contact</Link></li>
        </Footer>
     </body>
    </html>
  );
}
