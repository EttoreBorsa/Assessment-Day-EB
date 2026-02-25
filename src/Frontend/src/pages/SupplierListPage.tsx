import { useEffect, useState } from "react";

// Material
import { Box, Paper, Typography, CircularProgress } from "@mui/material";

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
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontSize: "26px", fontWeight: "600" }} >
          Suppliers
        </Typography>
      </Box>
      <Box sx={{ flex: "1", minHeight: 0, display: "flex", flexDirection: "column" }}>
        <Paper sx={{ flex: "1", minHeight: 0, display: "flex", flexDirection: "column", padding: "24px", overflowY: "auto" }}>

          {/* Button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", marginBottom: "24px" }}>

            {/* Button export */}
            <SupplierButtonExport data={list} disabled={loading || list.length === 0} />
          </Box>

          {/* Loading / Empty / Table */}
          {loading ? (
            <Box sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <CircularProgress sx={{ m: "5%" }} />
            </Box>
          ) : list.length === 0 ? (
            <Typography variant="body1" color="text.secondary">
              No results found.
            </Typography>
          ) : (
            <SupplierTable data={list} />
          )}
        </Paper>
      </Box>
    </>
  );
}
