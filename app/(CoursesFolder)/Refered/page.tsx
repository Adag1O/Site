import Image from "next/image";
import Link from "next/link";

export default function Refered (){
  return (
    <div className="flex items-center justify-center flex-col mt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-[070vw] ">
        {Array.from({ length: 12 }, (_, index) => (
          <Link href="" key={index}>
            <Image
              className="h-[400px]  max-w-full rounded-lg"
              src="/Anounces.webp"
              alt={`Gallery Image ${index + 1}`}
              width={500}
              height={500}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
