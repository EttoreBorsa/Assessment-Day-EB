// Material
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

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
      startIcon={<DownloadIcon />}
      onClick={() => exportCustomersXML(data)}
      sx={{ height: "40px", fontSize: "13px" }}
    >
      Export XML
    </Button>
  );
}