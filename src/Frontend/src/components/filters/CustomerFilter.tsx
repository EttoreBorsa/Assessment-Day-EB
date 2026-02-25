// Material
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

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
      <TextField
        label="Search by Email"
        variant="outlined"
        size="small"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
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