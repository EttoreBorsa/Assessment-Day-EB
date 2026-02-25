import { useEffect, useState } from "react";

// Material
import { Box, Paper, Typography, CircularProgress } from "@mui/material";

// Components
import SupplierFilter from "../components/filters/SupplierFilter";
import SupplierTable from "../components/tables/SupplierTable";
import SupplierButtonExport from "../components/buttons/SupplierButtonExport";

// Types
import type { SupplierListQuery } from "../types/supplier";

export default function SupplierListPage() {
  const [list, setList] = useState<SupplierListQuery[]>([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const query = new URLSearchParams(); // Crea un oggetto js per gestire i parametri nell'URL

    if (name) query.append("Name", name); // Se non è vuoto lo aggiunge alla query

    fetch(`/api/suppliers/list?${query.toString()}`) // toString() converte l’oggetto in una stringa formattata per l’URL
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(data as SupplierListQuery[]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name]);

  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontSize: "26px", fontWeight: "600" }} >
          Suppliers
        </Typography>
      </Box>
      <Box sx={{ flex: "1", minHeight: 0, display: "flex", flexDirection: "column" }}>
        <Paper sx={{ flex: "1", minHeight: 0, display: "flex", flexDirection: "column", padding: "24px", overflowY: "auto" }}>

          {/* Filter / Button */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, marginBottom: "24px" }}>

            {/* Filter */}
            <SupplierFilter
              name={name}
              onNameChange={setName}
            />

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
