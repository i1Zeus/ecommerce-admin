"use client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between ">
        <Heading
          title={`Orders (${data.length})`}
          description="Manage you'r store orders."
        />
        <Button onClick={() => router.push(`/${params.storeId}/orders/new`)}>
          <Plus className="sm:mr-2 h-4 w-4" />
          <span className="hidden sm:block">Add New</span>
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} filterKey="label" />
      <Heading title="API" description="API calls for orders." />
      <Separator />
      <ApiList entityName="orders" entityIdName="orderId" />
    </>
  );
};
