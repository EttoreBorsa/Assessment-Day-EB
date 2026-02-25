// Material
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

interface SupplierFilterProps {
  name: string;
  onNameChange: (value: string) => void;
};

export default function SupplierFilter({ name, onNameChange }: SupplierFilterProps) {
  return (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
      <TextField
        label="Search by Name"
        variant="outlined"
        size="small"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
}