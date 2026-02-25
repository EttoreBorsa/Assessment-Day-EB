// Material
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from "@mui/material";

// Types
import type { SupplierListQuery } from "../../types/supplier";

interface SupplierTableProps {
  data: SupplierListQuery[];
}

export default function SupplierTable({ data }: SupplierTableProps) {
  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: "none", border: "1px solid #ebf1f6", overflowY: "auto" }}
    >
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="Supplier Table">
        <TableHead>
          <TableRow>
            <StyledTableHeadCell>Name</StyledTableHeadCell>
            <StyledTableHeadCell>Address</StyledTableHeadCell>
            <StyledTableHeadCell>Email</StyledTableHeadCell>
            <StyledTableHeadCell>Phone</StyledTableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
}));