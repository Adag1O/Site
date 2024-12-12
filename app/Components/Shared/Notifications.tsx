import Link from "next/link";

export default function Notification({Notification, Url}:{ Notification: string, Url: string }) {
  return (
   <div className="h-[5vh] flex items-center justify-center gap-[20px] w-full bg-sky-500">
     <p className="text-slate-200 text-base">{Notification}</p> <Link className="text-slate-200 font-semibold text-lg uppercase" href={Url}>Get</Link>
   </div>
  );
}



