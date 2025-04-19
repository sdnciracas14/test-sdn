import { auth } from "@/common/service/auth";
import NavbarDashboard from "@/modules/navbar/nav-dashboard";
import { notFound } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  console.log(session);
  return (
    <section>
      <NavbarDashboard />
      <div className="grid md:grid-cols-2">
        <div />
        {children}
      </div>
    </section>
  );
}
