import BrandFilter from "./brandFilter"; // adjust the path if needed
import { Box } from "@mui/material";
import PriceFilter from "./priceFilter";

type ActionBarProps = {
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
  selectedPrice: string[];
  setSelectedPrice: (price: string[]) => void;
};


export default function ActionBar({ selectedBrands, setSelectedBrands ,selectedPrice,setSelectedPrice}: ActionBarProps) {
  return (
    <Box sx={{ backgroundColor: "#f9f6f2", p: 2, display: "flex", alignItems: "center", borderRadius: 2, gap: 2, mb: 2, mr: 8.5 }}>
      <BrandFilter
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
      />
      <PriceFilter
      selectedPrice={selectedPrice}
      setSelectedPrice={setSelectedPrice}
      />
    </Box>
  );
}