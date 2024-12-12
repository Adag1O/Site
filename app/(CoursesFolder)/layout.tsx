import type { Metadata } from "next";
import "../globals.css";

import Link from "next/link";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Exclusive/Footer";

export const metadata: Metadata = {
  title: "Courses",
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
        <Navbar calendar={true} Logout={true}>
          <Link href="/">Courses</Link>
          <Link href="/">Materials</Link>
          <Link href="/">Certificates</Link>
        </Navbar>
      {children}     
      <Footer>
        <li>  <Link href="/">Courses</Link></li>
        <li>  <Link href="/">Materials</Link></li>
        <li>  <Link href="/">WhiteBoard</Link></li>
        <li>  <Link href="/">Test</Link></li>
        <li>  <Link href="/">Certificates</Link></li>
        </Footer>
     </body>
    </html>
  );
}
