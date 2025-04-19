"use client";

import { login } from "@/common/lib/action";
import Image from "next/image";
import { useEffect } from "react";
import { useActionState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [state, action, isPending] = useActionState(login, null);

  useEffect(() => {
    if (state && !state.error && !state.message) {
      router.push("/dashboard");
    }
  }, [state, router]);

  return (
    <section className="relative flex items-center justify-center h-screen">
      <Image
        src="https://res.cloudinary.com/dkfnmnao2/image/upload/v1744618800/178a789b-646a-40ce-ae69-b1971721f123.png"
        width={2000}
        height={8000}
        alt="logo"
        className="fixed w-full h-screen object-cover object-center -z-10"
      />
      <form
        action={action}
        className="md:w-navcontainerlg p-8 grid gap-6 shadow-lg shadow-primary rounded text-primary bg-white/80 text-shadow-2xs text-shadow-primary"
      >
        <h1 className="text-2xl font-bold">Login</h1>

        <div className="grid gap-2">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="border-2 border-primary p-2 rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {state?.error?.email && (
            <div
              className="text-red-500 text-sm"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.error.email}
            </div>
          )}
        </div>
        <div className="grid gap-2">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="border-2 border-primary p-2 rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {state?.error?.password && (
            <div
              className="text-red-500 text-sm"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.error.password}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="bg-primary text-white py-2 px-4 font-semibold rounded hover:bg-blue-900 transition cursor-pointer"
        >
          {isPending ? "Loading..." : "Login"}
        </button>
        {state?.message && <div className="text-red-500">{state.message}</div>}
      </form>
    </section>
  );
}
