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
      <Heading title="Dashboard" description="Overview of you'r store." />
      <Separator />
      <div className="grid grid-4 grid-cols-3 ">

      </div>
    </div>
  );
};

export default DashboardPage;
