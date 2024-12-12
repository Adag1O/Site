"use client";

import Image from "next/image"
import Link from "next/link"

function Anouncements() {
  return (
    <div className="h-[77vh]  border w-full relative">
      <Image className="absolute top-0 left-0 z-1 " fill={true} src="/Anounces.webp" alt="" />
      <nav className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-3">
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li>
            <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-slate-100 bg-transparent border border-e-0 border-slate-100 rounded-s-lg hover:text-gray-700">
              <span className="sr-only">Previous</span>
              <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
            </a>
          </li>
          <li>
            <Link href="/" className="flex items-center justify-center px-3 h-8 leading-tight text-slate-100 bg-transparent border">
              1
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center justify-center px-3 h-8 leading-tight text-slate-100 bg-transparent border">
              2
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center justify-center px-3 h-8 leading-tight text-slate-100 bg-transparent border">
              3
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center justify-center px-3 h-8 leading-tight text-slate-100 bg-transparent border">
              4
            </Link>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-slate-100 bg-transparent border border-slate-100 rounded-e-lg ">
              <span className="sr-only">Next</span>
              <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}


function Categories() {
  return (
    <div className="h-[24vh] w-full flex flex-row justify-between">
      <Link href="" className="cursor-pointer h-full w-[18%] flex flex-col justify-end py-5 px-4 relative">
        <Image className="absolute top-0 left-0 z-0 " fill={true} src="/Anounces.webp" alt="" />
        <h1 className="relative text-3xl z-1 text-slate-100">Courses</h1>
        <h2 className="relative text-base z-1 text-slate-100"> 8 Courses</h2>
      </Link>
      <Link href="" className="cursor-pointer h-full w-[18%] flex flex-col justify-end py-5 px-4 relative">
        <Image className="absolute top-0 left-0 z-0 " fill={true} src="/Anounces.webp" alt="" />

        <h1 className="relative text-3xl z-1 text-slate-100"> Services</h1>
        <h2 className="relative text-base z-1 text-slate-100"> 4 Types of Services</h2>
      </Link>
      <Link href="" className="cursor-pointer h-full w-[18%] flex flex-col justify-end py-5 px-4 relative">
        <Image className="absolute top-0 left-0 z-0 " fill={true} src="/Anounces.webp" alt="" />

        <h1 className="relative text-3xl z-1 text-slate-100">  Tools </h1>
        <h2 className="relative text-base z-1 text-slate-100"> 25 Web & Desktop Tools</h2>
      </Link>
      <Link href="" className="cursor-pointer h-full w-[18%] flex flex-col justify-end py-5 px-4 relative">
        <Image className="absolute top-0 left-0 z-0 " fill={true} src="/Anounces.webp" alt="" />

        <h1 className="relative text-3xl z-1  text-slate-100"> Blog</h1>
        <h2 className="relative text-base z-1 text-slate-100"> 12 Posts</h2>
      </Link>

      <Link href="" className="cursor-pointer h-full w-[18%] flex flex-col justify-end py-5 px-4 relative">
        <Image className="absolute top-0 left-0 z-0 " fill={true} src="/Anounces.webp" alt="" />

        <h1 className="relative text-3xl z-1 text-slate-100">  Prints</h1>
        <h2 className="relative text-base z-1 text-slate-100"> 23 Accesories to Print</h2>
      </Link>
    </div>
  );
}

function Products() {
  return (
    <section className="h-[39vh] w-full flex flex-row">
      <div className="relative h-[100%] w-[30%]">
        <Image className="absolute top-0 left-0" fill={true} src="/Anounces.webp" alt="" />
      </div>
      <div className="flex flex-col items-center justify-around w-[70%] h-full border">
        <div className="flex items-center justify-evenly w-[100%]">
          <div className="relative h-[14rem] w-[14rem] border">
            <h1></h1>
          </div>

          <div className="relative h-[14rem] w-[14rem] border">
            <h1></h1>
          </div>

          <div className="relative h-[14rem] w-[14rem] border">
            <h1></h1>
          </div>
        </div>
        <Link href=" " className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3.5 me-2 mb-2 focus:outline-none ">Ver Todos</Link>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <>
      <Anouncements />
      <Categories />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
    </>
  );
}
