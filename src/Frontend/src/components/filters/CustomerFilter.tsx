// Material
import { Box, TextField } from "@mui/material";

interface CustomerFilterProps {
  name: string;
  email: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
};

export default function CustomerFilter({ name, email, onNameChange, onEmailChange }: CustomerFilterProps) {
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
      <TextField
        label="Search by Email"
        variant="outlined"
        size="small"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
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