import Image from "next/image";

interface KeunggulanProps {
  src: string;
  judul: string;
  isi: string;
}

export default function CardKeunggulan({ src, judul, isi }: KeunggulanProps) {
  return (
    <div className="grid text-center justify-items-center">
      <Image
        src={src}
        alt={judul}
        width={1000}
        height={1000}
        className="w-24 h-24 object-cover rounded-full"
      />
      <h3 className="font-bold text-lg my-3">{judul}</h3>
      <p className="text-sm font-semibold text-gray-600">{isi}</p>
    </div>
  );
}
