"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/banner-home-01.png"
        width={350}
        height={150}
        className="h-auto w-full"
        sizes="100vw"
        alt="Até 55% de desconto só esse mês"
      />
    </div>
  );
}
