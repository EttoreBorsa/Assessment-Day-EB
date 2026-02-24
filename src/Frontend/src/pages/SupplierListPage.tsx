import { useEffect, useState } from "react";

// Material
import { Box, Typography } from "@mui/material";

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
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, mb: 3 }}>

        {/* Title page */}
        <Typography variant="h4" sx={{ fontSize: "26px", fontWeight: "600" }} >
          Suppliers
        </Typography>
      </Box>

      {/* Table */}
      <SupplierTable data={list} />
    </>
  );
}
