import { useEffect, useState } from "react";

// Material
import { Box, Typography, CircularProgress } from "@mui/material";

// Components
import SupplierTable from "../components/tables/SupplierTable";
import SupplierButtonExport from "../components/buttons/SupplierButtonExport";

// Types
import type { SupplierListQuery } from "../types/supplier";

export default function SupplierListPage() {
  const [list, setList] = useState<SupplierListQuery[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("/api/suppliers/list")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(data as SupplierListQuery[]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, mb: 3 }}>

        {/* Title page */}
        <Typography variant="h4" sx={{ fontSize: "26px", fontWeight: "600" }} >
          Suppliers
        </Typography>

        {/* Button export */}
        <SupplierButtonExport data={list} disabled={loading || list.length === 0} />
      </Box>
      <Box sx={{ flex: "1", minHeight: 0, display: "flex", flexDirection: "column" }}>

        {/* Loading / Empty / Table */}
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress sx={{ m: "5%" }} />
          </Box>
        ) : list.length === 0 ? (
          <Box sx={{ my: "16px" }}>
            <Typography variant="body1" color="text.secondary">
              No results found.
            </Typography>
          </Box>
        ) : (
          <SupplierTable data={list} />
        )}
      </Box>
    </>
  );
}
