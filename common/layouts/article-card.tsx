// app/articles/ArticleList.tsx

import { Articles } from "@/lib/generated/prisma";
import Image from "next/image";

export default function ArticleList({ data }: { data: Articles }) {
  return (
    <div
      key={data.id}
      className="rounded shadow-lg shadow-primary overflow-hidden"
    >
      <div className="relative w-full h-52">
        <Image
          src={data.image}
          alt={data.judul}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-2">
        <h1 className="truncate font-bold text-lg">{data.judul}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: data.content }}
          className="line-clamp-2 text-sm my-2"
        />
      </div>
      <div className="grid grid-cols-2 text-center font-bold text-xs"></div>
    </div>
  );
}
