// Material
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

// Utils
import { exportCustomersXML } from "../../utils/exportCustomersXML";

// Types
import type { CustomerListQuery } from "../../types/customer";

interface CustomerButtonExportProps {
  data: CustomerListQuery[];
  disabled?: boolean;
}

export default function CustomerButtonExport({ data, disabled }: CustomerButtonExportProps) {
  return (
    <Button
      variant="contained"
      startIcon={<DownloadIcon />}
      onClick={() => exportCustomersXML(data)}
      disabled={disabled}
      sx={{
        height: "40px",
        fontSize: "13px",
        "&.Mui-disabled": {
          boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
          backgroundColor: "primary.main",
          color: "#ffffff",
        },
      }}
    >
      Export XML
    </Button>
  );
}