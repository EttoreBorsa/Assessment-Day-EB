// Material
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from "@mui/material";

// Types
import type { CustomerListQuery } from "../../types/customer";

interface CustomerTableProps {
  data: CustomerListQuery[];
}

export default function CustomerTable({ data }: CustomerTableProps) {
  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: "none", border: "1px solid #ebf1f6", overflowY: "auto" }}
    >
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="Customer Table">
        <TableHead>
          <TableRow>
            <StyledTableHeadCell>Name</StyledTableHeadCell>
            <StyledTableHeadCell>Address</StyledTableHeadCell>
            <StyledTableHeadCell>Email</StyledTableHeadCell>
            <StyledTableHeadCell>Phone</StyledTableHeadCell>
            <StyledTableHeadCell>Iban</StyledTableHeadCell>
            <StyledTableHeadCell>Category</StyledTableHeadCell>
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
              <TableCell>{row.iban}</TableCell>
              {/* <TableCell>{row.customerCategory?.description ?? "/"}</TableCell> */}
              <TableCell>
                {row.customerCategory ? (
                  <>
                    {row.customerCategory.code}
                    <br />
                    {row.customerCategory.description}
                  </>
                ) : (
                  "/"
                )}
              </TableCell>
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