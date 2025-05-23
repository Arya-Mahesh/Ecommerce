import { Box, Button, Checkbox, ListItemText, Menu, MenuItem } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/navigation";
import { useState } from "react";

type BrandFilterProps = {
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
};

const brands = ["Pedigree", "Diamond", "Royal Canin", "4health Grain free"];

export default function BrandFilter({ selectedBrands, setSelectedBrands } : BrandFilterProps) {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [brandMenu, setBrandMenu] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(brandMenu);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {event.preventDefault();  setBrandMenu(event.currentTarget);}
  const handleClose = () => setBrandMenu(null);

  const handleBrandToggle = (brand :string) =>{
    let newSelected;
    if(selectedBrands.includes(brand)){
        newSelected = selectedBrands.filter((b) => b !== brand);
    }
    else{
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
    router.replace(`${pathname}?${params.toString()}`);
    }

   return(
    <Box>
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
      <Menu anchorEl={brandMenu} open={open} onClose={handleClose} slotProps={{
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