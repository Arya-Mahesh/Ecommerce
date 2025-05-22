
"use client";

import React, { useState

 } from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
} from '@mui/material';
import FavouriteIcon from '../favouriteIcon/favouriteIcon';
import ProductMedia from '../prodcutMedia/productMedia';
import ProductAd from '../productAd/productAd';
import ProductTitle from '../productTitle/productTiltle';
import ProductRatingInfo from '../productRatingInfo/productRatingInfo'
import ProductDelivery from '../productDelivery/productDelivery';
import ProductPricing from '../productPricing/productPricing';
import ProductOffer from '../productAd/productOffer';
import ProductChooseButton from '../productChooseButton/productChooseButton';


type ProductAttributeValue = {
  identifier: string;
  value: string;
  uniqueID: string;
};

type ProductAttribute = {
  identifier: string;
  usage: string;
  displayable: boolean;
  name: string;
  uniqueID: string;
  values: ProductAttributeValue[];
};

type DisplayPrice = {
  ribbon: string;
  offer_price_min: string;
  pricetype: string;
  is_Mapp: boolean;
  pricetype_selected: string;
};

type ProductCardProps = {
  data: {
    hasSingleSKU: boolean;
    manufacturer: string;
    resourceId: string;
    uniqueID: string;
    partNumber: string;
    shortDescription: string;
    catalogEntryTypeCode: string;
    productColorOptions: Record<string, unknown>;
    thumbnail: string;
    buyable: string;
    storeID: string;
    name: string;
    priceType: string;
    price: number;
    offerPriceMax: number;
    attributes: ProductAttribute[];
    offerPriceMin: number;
    displayPrice: DisplayPrice;
    newMultiVariant: string;
    stdDeliveryAvailable: boolean;
    pickupAvailable: boolean;
    defaultChildSKU: string;
    defaultChildCatentryId: string;
    seo_token_ntk: string;
    xf_thumbnail: string;
    mfPartNumber_ntk: string;
    xf_sku: string[];
    shippingpromodesc: string;
  };
};

// Extract rating value from attributes


export default function ProductCard({ data  }: ProductCardProps) {
  const { name, price, thumbnail, partNumber } = data;

  const ratingAttribute = data.attributes.find(attr => attr.identifier === "_BazaarVoiceReviewRating");
  const ratingValue = ratingAttribute?.values?.[0]?.value ? parseFloat(ratingAttribute.values[0].value) : 0;
  
  const reviewCountAttr = data.attributes.find(attr => attr.identifier === "_BazaarVoiceReviewCount");
  const reviewCount = reviewCountAttr?.values?.[0]?.value || "0";

  const isStandardDelivery = data.attributes.find(attr => attr.identifier === "_IsOnlineOrStandard")?.values?.[0]?.value === "Y";
  const isSameDayDelivery = data.attributes.find(attr => attr.identifier === "_IsSameDayEligible")?.values?.[0]?.value === "Y";
  const isPickupAvailable = data.pickupAvailable;

  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    console.log("Button clicked!");
  };

    // useEffect controls background color based on selected
  

  return (
    <Card sx={{ width: 350, borderRadius: 2, boxShadow: 3, p: 2, position: 'relative' ,backgroundColor: selected ? 'red' : 'white'}}>
     
      <FavouriteIcon />

      <ProductMedia src={thumbnail} alt={name} />

      <CardContent sx={{ p: 0 , flexGrow: 1, display: "flex", flexDirection: "column"}}>

        <ProductAd />
        <Box sx={{
          height: 48, // ~2 lines height
          overflow: "hidden",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
           }}><ProductTitle name={name}/></Box>
        

        <ProductRatingInfo ratingValue={ratingValue} reviewCount={parseInt(reviewCount, 10)} partNumber={partNumber} />

        <ProductDelivery
          isPickupAvailable={isPickupAvailable}
          isSameDayDelivery={isSameDayDelivery} 
          isStandardDelivery={isStandardDelivery}
          />
      
        <ProductPricing price={price} />

        <ProductOffer shippingpromodesc={data.shippingpromodesc} />
      </CardContent>

      <CardActions sx={{ mt: 2, px: 0 }}>
        <ProductChooseButton handleClick={handleClick}/>
      </CardActions>
    </Card>
  );
}
