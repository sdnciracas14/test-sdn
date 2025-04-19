"use client";
export default function FormInput({ state, name, title }: any) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="font-bold">
        {title}
      </label>
      <input
        type={name}
        name={name}
        id={name}
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
  );
}
