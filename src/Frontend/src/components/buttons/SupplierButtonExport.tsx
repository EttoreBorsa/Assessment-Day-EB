// Material
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

// Utils
import { exportSuppliersXML } from "../../utils/exportSuppliersXML";

// Types
import type { SupplierListQuery } from "../../types/supplier";

interface SupplierButtonExportProps {
  data: SupplierListQuery[];
  disabled?: boolean;
}

export default function SupplierButtonExport({ data, disabled }: SupplierButtonExportProps) {
  return (
    <Button
      variant="contained"
      startIcon={<DownloadIcon />}
      onClick={() => exportSuppliersXML(data)}
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