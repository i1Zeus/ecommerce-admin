import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();

  if (!userId) return redirect("/sign-in");

  const storeId = await prismadb.store.findFirst({
    where: { id: params.storeId, userId },
  });
  if (!storeId) return redirect("/");

  return (
    <>
      <div>this will be a nav bar</div>
      <div>{children}</div>
    </>
  );
}
