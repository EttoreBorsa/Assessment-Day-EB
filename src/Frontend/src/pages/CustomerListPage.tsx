import { useEffect, useState } from "react";

// Material
import { Box, Typography, CircularProgress } from "@mui/material";

// Components
import CustomerFilter from "../components/filters/CustomerFilter";
import CustomerTable from "../components/tables/CustomerTable";
import CustomerButtonExport from "../components/buttons/CustomerButtonExport";

// Types
import type { CustomerListQuery } from "../types/customer";

export default function CustomerListPage() {
  const [list, setList] = useState<CustomerListQuery[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const query = new URLSearchParams(); // Crea un oggetto js per gestire i parametri nell'URL

    if (name) query.append("Name", name); // Se non è vuoto lo aggiunge alla query
    if (email) query.append("Email", email); // Se non è vuoto lo aggiunge alla query

    fetch(`/api/customers/list?${query.toString()}`) // toString() converte l’oggetto in una stringa formattata per l’URL
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(data as CustomerListQuery[]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name, email]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, mb: 3 }}>

        {/* Title page */}
        <Typography variant="h4" sx={{ fontSize: "26px", fontWeight: "600" }} >
          Customers
        </Typography>

        {/* Filter / Button */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 }}>

          {/* Filter */}
          <CustomerFilter
            name={name}
            email={email}
            onNameChange={setName}
            onEmailChange={setEmail}
          />

          {/* Button export */}
          <CustomerButtonExport data={list} />
        </Box>
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
          <CustomerTable data={list} />
        )}
      </Box>
    </>
  );
}