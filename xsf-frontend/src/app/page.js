"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-56 flex justify-center items-center">
        <Link href={"/product-list"}>Go to product list</Link>
      </div>
    </>
  );
}
