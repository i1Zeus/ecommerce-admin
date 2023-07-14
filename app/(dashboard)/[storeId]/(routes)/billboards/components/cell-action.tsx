"use client";

import { BillboardColumn } from "./columns";

interface BillboardClientProps {
  data: BillboardColumn;
}

export const CellAction: React.FC<BillboardClientProps> = ({ data }) => {
  return (
    <div>
      <div>Action</div>
    </div>
  );
};
