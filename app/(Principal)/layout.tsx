import type { Metadata } from "next";
import "../globals.css"
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Exclusive/Footer";
import Link from "next/link";
import Notification from "../Components/Shared/Notifications";

export const metadata: Metadata = {
  title: "AdagIO Labs",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <link rel="icon" href="/Favicon.ico" sizes="any" />
      <body
        className={` antialiased`}
      >
             <script
          type="module"
          defer
          src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/spiral.js"
        ></script>
        <div className="flex flex-col top-0 sticky z-10">
        <Navbar Logout={true}>
          <Link href="/">Services</Link>
          <Link href="/">Courses</Link>
          <Link href="/">Shop</Link>
          <Link href="mailto:adagioresearch@gmail.com">Contact</Link>
          <Link href="https://github.com/Adag1O">Github</Link>
        </Navbar>
        <Notification Notification="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" Url="/" />
        </div>
        <main className="w-full flex justify-center items-center">
          {
            <div className="w-[80%] flex items-center py-10 justify-center flex-col gap-10">{children}</div>
          }
        </main>
        <Footer>
          <li> <Link href="">Services</Link></li>
          <li> <Link href="">Courses</Link></li>
          <li> <Link href="">Shop</Link></li>
          <li> <Link href="">Contact</Link></li>
          <li> <Link href="">Github</Link></li>
        </Footer>
      </body>
    </html>
  );
}
