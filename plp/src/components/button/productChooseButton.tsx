"use client";


import { Button } from "@mui/material";

interface ProductChooseButtonProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ProductChooseButton({ handleClick }: ProductChooseButtonProps) {
  

  return (
    <Button
      variant="contained"
      color="error"
      fullWidth
      onClick={handleClick}
      sx={{
        borderRadius: "9999px",
        textTransform: "none",
        fontWeight: "bold",
        py: 1.2,
        
      }}
    >
      Choose option
    </Button>
  );
}
