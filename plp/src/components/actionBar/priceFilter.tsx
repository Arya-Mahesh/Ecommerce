import { Box, Button, Checkbox, ListItemText, Menu, MenuItem } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/navigation";
import { useState } from "react";


const price = ["$0 - $20", "$20 - $40","$40 - $50"];

type PriceFilterProps = {
  selectedPrice: string[];  
    setSelectedPrice: (price: string[]) => void;
};

export default function PriceFilter({ selectedPrice, setSelectedPrice } : PriceFilterProps) {
    
    const [priceMenu,setPriceMenu] = useState<HTMLButtonElement | null>(null);
    const open = Boolean(priceMenu);
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {event.preventDefault();  setPriceMenu(event.currentTarget);}
    const handleClose = () => setPriceMenu(null);

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handlePriceToggle = (price: string) => {
        let newSelected;
        if (selectedPrice.includes(price)) {
            newSelected = selectedPrice.filter((p) => p !== price);
        } else {
            newSelected = [...selectedPrice, price];
        }
        setSelectedPrice(newSelected);

       // Unique ID for price filter
  const priceId = "6z";
  // Format selected prices as {min TO max]
  const priceFilter = newSelected
    .map((range) => {
      const [min, max] = range.replace(/\$/g, "").split(" - ");
      return `{${min} TO ${max}]`;
    })
    .join("^");

       const params = new URLSearchParams(searchParams.toString());
  if (priceFilter) {
    params.set("filter", `${priceId}|(${priceFilter})`);
  } else {
    params.delete("filter");
  }
  router.replace(`${pathname}?${params.toString()}`);
};
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
        Price
      </Button>
      <Menu anchorEl={priceMenu} open={open} onClose={handleClose} slotProps={{
             paper: { sx: { maxHeight: 120, width: '20ch', scrollbarColor: '#e0e0e0 #fff' } }
           }}>
             {price.map((price) => (
               <MenuItem
                 key={price}
                 onClick={() => handlePriceToggle(price)}
                 sx={{ minHeight: 32, py: 0.5, px: 1.5 }}
               >
                 <Checkbox checked={selectedPrice.includes(price)} size="small" sx={{ p: 0.5, transform: 'scale(0.7)' }} />
                 <ListItemText primary={price} />
               </MenuItem>
             ))}
           </Menu>
        </Box>
    )
}