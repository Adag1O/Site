import Image from "next/image"
import { BuyLink,BuyCharge } from "../Special/Links"

export interface CourseBreef{
    Name: string,
    Category: string,
    Link: string,
    Images: string[]
    Description: string
    Price: number
    Discount: number
    DiscountReason: string
}

export default function CourseItem(Course: CourseBreef) {
  return (
   <div>
     <h1>{Course.Name}</h1>
     <p>{Course.Description}</p>
     <BuyLink Name="AVR" Price={232344} />
   </div>
  );
}
