// Material
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

// Utils
import { exportSuppliersXML } from "../../utils/exportSuppliersXML";

// Types
import type { SupplierListQuery } from "../../types/supplier";

interface SupplierButtonExportProps {
  data: SupplierListQuery[];
}

export default function SupplierButtonExport({ data }: SupplierButtonExportProps) {
  return (
    <Button
      variant="contained"
      startIcon={<DownloadIcon />}
      onClick={() => exportSuppliersXML(data)}
      sx={{ height: "40px", fontSize: "13px" }}
    >
      Export XML
    </Button>
  );
}