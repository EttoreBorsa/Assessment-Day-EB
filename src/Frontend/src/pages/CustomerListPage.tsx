import { useEffect, useState } from "react";

// Material
import { Typography } from "@mui/material";

// Components
import CustomerFilter from "../components/filters/CustomerFilter";
import CustomerTable from "../components/tables/CustomerTable";

// Types
import type { CustomerListQuery } from "../types/customer";

export default function CustomerListPage() {
  const [list, setList] = useState<CustomerListQuery[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(); // Crea un oggetto js per gestire i parametri nell'URL

    if (name) query.append("Name", name); // Se non è vuoto lo aggiunge alla query
    if (email) query.append("Email", email); // Se non è vuoto lo aggiunge alla query

    fetch(`/api/customers/list?${query.toString()}`) // toString() converte l’oggetto in una stringa formattata per l’URL
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(data as CustomerListQuery[]);
      });
  }, [name, email]);

  return (
    <>
      {/* Title page */}
      <Typography variant="h4" sx={{ textAlign: "center", mt: 4, mb: 4 }}>
        Customers
      </Typography>

      {/* Filter */}
      <CustomerFilter
        name={name}
        email={email}
        onNameChange={setName}
        onEmailChange={setEmail}
      />

      {/* Table */}
      <CustomerTable data={list} />
    </>
  );
}