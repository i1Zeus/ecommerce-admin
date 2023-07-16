import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findUnique({
    where: { id: params.storeId },
  });

  return (
    <div>
      <Heading title={String(store?.name)} description={String(store?.id)} />
      <Separator />
    </div>
  );
};

export default DashboardPage;
