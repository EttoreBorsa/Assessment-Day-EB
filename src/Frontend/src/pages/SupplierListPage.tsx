import { useEffect, useState } from "react";

// Material
import { Typography } from "@mui/material";

// Components
import SupplierTable from "../components/tables/SupplierTable";

// Types
import type { SupplierListQuery } from "../types/supplier";

export default function SupplierListPage() {
  const [list, setList] = useState<SupplierListQuery[]>([]);

  useEffect(() => {
    fetch("/api/suppliers/list")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(data as SupplierListQuery[]);
      });
  }, []);

  return (
    <>
      {/* Title page */}
      <Typography variant="h4" sx={{ textAlign: "center", mt: 4, mb: 4 }}>
        Suppliers
      </Typography>

      {/* Table */}
      <SupplierTable data={list} />
    </>
  );
}
