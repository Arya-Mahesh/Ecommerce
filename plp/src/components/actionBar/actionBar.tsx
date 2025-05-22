"use client";
import React from "react";
import { Box, Button, Menu, MenuItem, Checkbox, ListItemText } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { usePathname, useSearchParams, useRouter} from "next/navigation";

interface ActionBarProps {
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
}

const brands = ["Pedigree", "Diamond", "Royal Canin", "4health Grain free"];

export default function ActionBar({ selectedBrands, setSelectedBrands } : ActionBarProps) {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  

 const handleBrandToggle = (brand: string) => {
    let newSelected;
    if (selectedBrands.includes(brand)) {
      newSelected = selectedBrands.filter((b) => b !== brand);
    } else {
      newSelected = [...selectedBrands, brand];
    }
    setSelectedBrands(newSelected);

   const filterValue = newSelected.length > 0 ? `brand|${newSelected.join("|")}` : undefined;
    const params = new URLSearchParams(searchParams.toString());
    if (filterValue) {
      params.set("filter", filterValue);
    } else {
      params.delete("filter");
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Box sx={{ backgroundColor: "#f9f6f2", p: 2, display: "flex", alignItems: "center", borderRadius: 2, gap: 2, mb: 2, mr: 8.5}}>
      <Button
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        sx={{
          borderRadius: "999px",
          backgroundColor: "white",
          textTransform: "none",
          fontWeight: "bold",
          color: "black",
          '&:hover': { backgroundColor: "#f0f0f0" }
        }}
      >
        Brand
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} slotProps={{
        paper: { sx: { maxHeight: 120, width: '20ch', scrollbarColor: '#e0e0e0 #fff' } }
      }}>
        {brands.map((brand) => (
          <MenuItem
            key={brand}
            onClick={() => handleBrandToggle(brand)}
            sx={{ minHeight: 32, py: 0.5, px: 1.5 }}
          >
            <Checkbox checked={selectedBrands.includes(brand)} size="small" sx={{ p: 0.5, transform: 'scale(0.7)' }} />
            <ListItemText primary={brand} />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}