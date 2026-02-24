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
    <Box>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
      />
    </Box>
  );
}