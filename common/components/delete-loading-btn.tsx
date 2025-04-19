"use client";

import { useFormStatus } from "react-dom";

export default function DeleteLoadingBtn() {
  const { pending } = useFormStatus();
  return (
    <button className="cursor-pointer" type="submit">
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}
