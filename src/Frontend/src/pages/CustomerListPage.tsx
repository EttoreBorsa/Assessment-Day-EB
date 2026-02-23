import { useEffect, useState } from "react";

// Material
import { Typography } from "@mui/material";

// Components
import CustomerTable from "../components/tables/CustomerTable";

// Types
import type { CustomerListQuery } from "../types/customer";

export default function CustomerListPage() {
  const [list, setList] = useState<CustomerListQuery[]>([]);

  useEffect(() => {
    fetch("/api/customers/list")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(data as CustomerListQuery[]);
      });
  }, []);

  return (
    <>
      {/* Title page */}
      <Typography variant="h4" sx={{ textAlign: "center", mt: 4, mb: 4 }}>
        Customers
      </Typography>

      {/* Table */}
      <CustomerTable data={list} />
    </>
  );
}