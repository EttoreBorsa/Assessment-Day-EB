// Material
import { Button } from "@mui/material";

// Utils
import { exportCustomersXML } from "../../utils/exportCustomersXML";

// Types
import type { CustomerListQuery } from "../../types/customer";

interface CustomerButtonExportProps {
  data: CustomerListQuery[];
}

export default function CustomerButtonExport({ data }: CustomerButtonExportProps) {
  return (
    <Button
      variant="contained"
      onClick={() => exportCustomersXML(data)}
    >
      Export XML
    </Button>
  );
}