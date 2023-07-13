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
      <h1>Dashboard</h1>
      <p>Store ID: {store?.name}</p>
    </div>
  );
};

export default DashboardPage;
