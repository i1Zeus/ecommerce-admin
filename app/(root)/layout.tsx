import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function SetupPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) return redirect("/sign-in");

  const store = await prismadb.store.findFirst({
    where: { userId },
  });

  if (store) redirect(`/${store.id}`);

  return <>{children}</>;
}