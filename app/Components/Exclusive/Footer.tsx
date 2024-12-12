import Link from "next/link"; // Ensure correct import for `Link`
import { Home } from "../Special/Links";

export default function Footer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <footer className="h-[350px] p-8 w-full flex flex-col md:flex-row justify-evenly items-center p-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <section className="h-[90%] ">
        <h1 className="font-bold text-lg">Contacto</h1>
        <div className="flex items-start justify-center gap-3 py-9 flex-col">
          <div className="flex gap-3">
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
              />
            </svg>
              <p>Av. del Pinar 3044. CP 045080 <br />
                 Pinar de la Calma <br />
                 Zapopan, Jalisco
              </p>
          </div>
          <div className="flex gap-3">
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
</svg>
          <p>+52 2227142973</p>
          </div>
          <div className="flex gap-3">

          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
</svg>
            <Link href="mailto:adagioresearch@gmail.com"> adagioresearch@gmail.com</Link>
          </div>
        </div>
      </section>
      <section className="h-[90%] ">
        <h1 className="font-bold text-lg">Categorías</h1>
        <ul className="space-y-1 flex flex-col gap-1 py-6"> 
          {children}
        </ul>
      </section>
      <section className="h-[90%]">
        <h1 className="font-bold text-lg">Políticas de Empresa</h1>
        <ul className="space-y-1 flex flex-col gap-2 py-6">
          <li>
            <Link href="/">Políticas de Privacidad</Link>
          </li>
          <li>
            <Link href="/">Políticas de Venta</Link>
          </li>
          <li>
            <Link href="/">Políticas de Servicio</Link>
          </li>
          <li>
            <Link href="/">Políticas de Devolución</Link>
          </li>
        </ul>
      </section>
    </footer>
  );
}
