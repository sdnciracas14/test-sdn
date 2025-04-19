"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    push(`/article?query=${encodeURIComponent(term)}`);
  };

  return (
    <form action="" className="bg-primary fixed top-10 p-4 left-0 right-0">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        className=" border-2 border-white rounded w-full text-white p-2 text-xs"
        aria-label="Search articles"
        defaultValue={searchParams.get("query")?.toString()}
      />
    </form>
  );
}
