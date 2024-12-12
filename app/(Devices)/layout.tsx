import type { Metadata } from "next";
import "../globals.css";

import Link from "next/link";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Exclusive/Footer";

export const metadata: Metadata = {
  title: "Shop",
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
          <Link href="/">Boards</Link>
          <Link href="/">Mechanism</Link>
          <Link href="/">Enviroments</Link>
          <Link href="/">3D Services</Link>
        </Navbar>
      {children}     
      <Footer>
        <li>  <Link href="/">Boards</Link></li>
        <li>  <Link href="/">Mechanism</Link></li>
        <li>  <Link href="/">Enviroments</Link></li>
        <li>  <Link href="/">3D Services</Link></li>
        </Footer>
     </body>
    </html>
  );
}
