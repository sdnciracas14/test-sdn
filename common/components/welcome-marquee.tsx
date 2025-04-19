"use client";
import { useEffect, useRef, useState } from "react";

interface MarqueeProps {
  text: string;
  speed?: number;
}

export default function Marquee({ text, speed = 100 }: MarqueeProps) {
  // Tentukan tipe ref sebagai HTMLDivElement | nu
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(10); // nilai default durasi animasi

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const textWidth = textRef.current.offsetWidth;
      // Total jarak yang ditempuh adalah lebar kontainer + lebar teks
      const totalDistance = containerWidth + textWidth;
      // Hitung durasi animasi berdasarkan kecepatan (px per detik)
      setDuration(totalDistance / speed);
    }
  }, [speed, text]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden whitespace-nowrap bg-gray-100 p-4"
      style={{ border: "1px solid #ddd" }}
    >
      <div
        ref={textRef}
        className="inline-block"
        style={{
          animation: `marquee ${duration}s linear forwards`,
        }}
      >
        {text}
      </div>
    </div>
  );
}
