// Material
import { Box, TextField } from "@mui/material";

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
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            transition: "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
          },
          "& .MuiOutlinedInput-root": {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
          },
        }}
      />
    </Box>
  );
}