"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/productCard/productCard";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import ActionBar from "@/components/actionBar/actionBar";
import BreadCrumb from "@/components/breadCrumb/breadCrumb";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


export default function ProductPage( ) {
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedPrice, setSelectedPrice] = useState<string[]>([]); 


    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const params = new URLSearchParams(searchParams?.toString() || "");
        if (selectedBrands.length > 0) {
         params.set("brand", selectedBrands.join(","));
        } else {
         params.delete("brand");
        }
        if (selectedPrice.length > 0) {
         params.set("price", selectedPrice.join(","));
        } else {
        params.delete("price");
        }
         router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, [selectedBrands, selectedPrice, pathname, router, searchParams]);

    
  const props  =  [ {
            "hasSingleSKU": true,
            "manufacturer": "Diamond",
            "resourceId": "https://loh-prodslr-eus.shop.tractorsupply.com/search/ext/resources/store/2314/productview/byId/25760",
            "uniqueID": "25760",
            "partNumber": "502561599",
            "shortDescription": "Diamond High Energy Adult Chicken Formula Dry Dog Food, 50 lb. Bag",
            "catalogEntryTypeCode": "ProductBean",
            "productColorOptions": [],
            "thumbnail": "https://media.tractorsupply.com/is/image/TractorSupplyCompany/5025615?$456$",
            "buyable": "true",
            "storeID": "2314",
            "name": "Diamond High Energy Adult Chicken Formula Dry Dog Food, 50 lb. Bag",
            "priceType": "1",
            "price": 42.99,
            "offerPriceMax": 42.99,
            "attributes": [
                {
                    "identifier": "_BazaarVoiceReviewCount",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewCount",
                    "uniqueID": "7000000000000000753",
                    "values": [
                        {
                            "identifier": "7741124012743000290",
                            "value": "1211",
                            "uniqueID": "7741124012743000290"
                        }
                    ]
                },
                {
                    "identifier": "_TruckDelivery",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_TruckDelivery",
                    "uniqueID": "7000000000000001060",
                    "values": [
                        {
                            "identifier": "N",
                            "value": "N",
                            "uniqueID": "7000000000033060641"
                        }
                    ]
                },
                {
                    "identifier": "_IsOnlineOrStandard",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsOnlineOrStandard",
                    "uniqueID": "7000000000000028504",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060347"
                        }
                    ]
                },
                {
                    "identifier": "_IsSameDayEligible",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsSameDayEligible",
                    "uniqueID": "7000000000000028502",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060351"
                        }
                    ]
                },
                {
                    "identifier": "_BazaarVoiceReviewRating",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewRating",
                    "uniqueID": "7000000000000000065",
                    "values": [
                        {
                            "identifier": "7741124012743001207",
                            "value": "4.7275",
                            "uniqueID": "7741124012743001207"
                        }
                    ]
                }
            ],
            "offerPriceMin": 42.99,
            "displayPrice": {
                "ribbon": "NONE",
                "offer_price_min": "42.99",
                "pricetype": "1",
                "is_Mapp": false,
                "pricetype_selected": "1"
            },
            "newMultiVariant": "false",
            "stdDeliveryAvailable": true,
            "pickupAvailable": true,
            "defaultChildSKU": "5025615",
            "defaultChildCatentryId": "90181",
            "seo_token_ntk": "diamond-hi-energy-dog-dog-food-50-lb",
            "xf_thumbnail": "5025615",
            "mfPartNumber_ntk": "442",
            "xf_prdRating": 4.7275,
            "xf_sku": [
                "5025615"
            ],
            "shippingpromodesc": "Free Shipping on orders over $49!"
        },
        {
            "hasSingleSKU": false,
            "manufacturer": "Diamond",
            "resourceId": "https://loh-prodslr-eus.shop.tractorsupply.com/search/ext/resources/store/2314/productview/byId/19491",
            "uniqueID": "19491",
            "partNumber": "240820499",
            "shortDescription": "Diamond Adult Maintenance Formula Chicken Recipe Dry Dog Food",
            "catalogEntryTypeCode": "ProductBean",
            "productColorOptions": [],
            "thumbnail": "https://media.tractorsupply.com/is/image/TractorSupplyCompany/2408204?$456$",
            "buyable": "true",
            "storeID": "2314",
            "name": "Diamond Adult Maintenance Formula Chicken Recipe Dry Dog Food",
            "priceType": "1",
            "price": 37.99,
            "offerPriceMax": 37.99,
            "attributes": [
                {
                    "identifier": "_BazaarVoiceReviewCount",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewCount",
                    "uniqueID": "7000000000000000753",
                    "values": [
                        {
                            "identifier": "7741124012742223733",
                            "value": "639",
                            "uniqueID": "7741124012742223733"
                        }
                    ]
                },
                {
                    "identifier": "_TruckDelivery",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_TruckDelivery",
                    "uniqueID": "7000000000000001060",
                    "values": [
                        {
                            "identifier": "N",
                            "value": "N",
                            "uniqueID": "7000000000033060641"
                        }
                    ]
                },
                {
                    "identifier": "_IsOnlineOrStandard",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsOnlineOrStandard",
                    "uniqueID": "7000000000000028504",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060347"
                        }
                    ]
                },
                {
                    "identifier": "_IsSameDayEligible",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsSameDayEligible",
                    "uniqueID": "7000000000000028502",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060351"
                        }
                    ]
                },
                {
                    "identifier": "_BazaarVoiceReviewRating",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewRating",
                    "uniqueID": "7000000000000000065",
                    "values": [
                        {
                            "identifier": "7741124012742225527",
                            "value": "4.7152",
                            "uniqueID": "7741124012742225527"
                        }
                    ]
                }
            ],
            "offerPriceMin": 37.99,
            "displayPrice": {
                "ribbon": "NONE",
                "offer_price_min": "37.99",
                "pricetype": "1",
                "is_Mapp": false,
                "pricetype_selected": "1"
            },
            "newMultiVariant": "true",
            "stdDeliveryAvailable": true,
            "pickupAvailable": true,
            "defaultChildSKU": "2408204",
            "defaultChildCatentryId": "83893",
            "seo_token_ntk": "diamond-maintenance-dog-food-40-lb-bag-2408204",
            "xf_thumbnail": "2408204",
            "mfPartNumber_ntk": "101",
            "xf_prdRating": 4.7152,
            "xf_sku": [
                "2408204",
                "5003883"
            ],
            "shippingpromodesc": "Free Shipping on orders over $49!"
        },
        {
            "hasSingleSKU": true,
            "manufacturer": "Diamond",
            "resourceId": "https://loh-prodslr-eus.shop.tractorsupply.com/search/ext/resources/store/2314/productview/byId/701004",
            "uniqueID": "701004",
            "partNumber": "145947899",
            "shortDescription": "Diamond Pro89 Adult Beef, Pork and Ancient Grains Formula Dry Dog Food, 40 lb. Bag",
            "catalogEntryTypeCode": "ProductBean",
            "productColorOptions": [],
            "thumbnail": "https://media.tractorsupply.com/is/image/TractorSupplyCompany/1459478?$456$",
            "buyable": "true",
            "storeID": "2314",
            "name": "Diamond Pro89 Adult Beef, Pork and Ancient Grains Formula Dry Dog Food, 40 lb. Bag",
            "priceType": "1",
            "price": 59.99,
            "offerPriceMax": 59.99,
            "attributes": [
                {
                    "identifier": "_BazaarVoiceReviewCount",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewCount",
                    "uniqueID": "7000000000000000753",
                    "values": [
                        {
                            "identifier": "7741124012738264355",
                            "value": "302",
                            "uniqueID": "7741124012738264355"
                        }
                    ]
                },
                {
                    "identifier": "_TruckDelivery",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_TruckDelivery",
                    "uniqueID": "7000000000000001060",
                    "values": [
                        {
                            "identifier": "N",
                            "value": "N",
                            "uniqueID": "7000000000033060641"
                        }
                    ]
                },
                {
                    "identifier": "_IsOnlineOrStandard",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsOnlineOrStandard",
                    "uniqueID": "7000000000000028504",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060347"
                        }
                    ]
                },
                {
                    "identifier": "_IsSameDayEligible",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsSameDayEligible",
                    "uniqueID": "7000000000000028502",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060351"
                        }
                    ]
                },
                {
                    "identifier": "_BazaarVoiceReviewRating",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewRating",
                    "uniqueID": "7000000000000000065",
                    "values": [
                        {
                            "identifier": "7741124012738266413",
                            "value": "4.7351",
                            "uniqueID": "7741124012738266413"
                        }
                    ]
                }
            ],
            "offerPriceMin": 59.99,
            "displayPrice": {
                "ribbon": "NONE",
                "offer_price_min": "59.99",
                "pricetype": "1",
                "is_Mapp": false,
                "pricetype_selected": "1"
            },
            "newMultiVariant": "false",
            "stdDeliveryAvailable": true,
            "pickupAvailable": true,
            "defaultChildSKU": "1459478",
            "defaultChildCatentryId": "701099",
            "seo_token_ntk": "diamond-diamond-pro89-beef-pork-ancient-grains-formula-for-adult-dogs-40-lb-bag",
            "xf_thumbnail": "1459478",
            "mfPartNumber_ntk": "9624",
            "xf_prdRating": 4.7351,
            "xf_sku": [
                "1459478"
            ],
            "shippingpromodesc": "Free Shipping on orders over $49!"
        },
        {
            "hasSingleSKU": false,
            "manufacturer": "Diamond",
            "resourceId": "https://loh-prodslr-eus.shop.tractorsupply.com/search/ext/resources/store/2314/productview/byId/19493",
            "uniqueID": "19493",
            "partNumber": "240822099",
            "shortDescription": "Diamond Puppy Dry Dog Food",
            "catalogEntryTypeCode": "ProductBean",
            "productColorOptions": [],
            "thumbnail": "https://media.tractorsupply.com/is/image/TractorSupplyCompany/2343351?$456$",
            "buyable": "true",
            "storeID": "2314",
            "name": "Diamond Puppy Dry Dog Food",
            "priceType": "1",
            "price": 13.99,
            "offerPriceMax": 13.99,
            "attributes": [
                {
                    "identifier": "_BazaarVoiceReviewCount",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewCount",
                    "uniqueID": "7000000000000000753",
                    "values": [
                        {
                            "identifier": "7741124012742223734",
                            "value": "145",
                            "uniqueID": "7741124012742223734"
                        }
                    ]
                },
                {
                    "identifier": "_TruckDelivery",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_TruckDelivery",
                    "uniqueID": "7000000000000001060",
                    "values": [
                        {
                            "identifier": "N",
                            "value": "N",
                            "uniqueID": "7000000000033060641"
                        }
                    ]
                },
                {
                    "identifier": "_IsOnlineOrStandard",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsOnlineOrStandard",
                    "uniqueID": "7000000000000028504",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060347"
                        }
                    ]
                },
                {
                    "identifier": "_IsSameDayEligible",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsSameDayEligible",
                    "uniqueID": "7000000000000028502",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060351"
                        }
                    ]
                },
                {
                    "identifier": "_BazaarVoiceReviewRating",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewRating",
                    "uniqueID": "7000000000000000065",
                    "values": [
                        {
                            "identifier": "7741124012742225528",
                            "value": "4.8069",
                            "uniqueID": "7741124012742225528"
                        }
                    ]
                }
            ],
            "offerPriceMin": 13.99,
            "displayPrice": {
                "ribbon": "NONE",
                "offer_price_min": "13.99",
                "pricetype": "1",
                "is_Mapp": false,
                "mapp_type": "STRICT",
                "pricetype_selected": "1"
            },
            "newMultiVariant": "true",
            "stdDeliveryAvailable": true,
            "pickupAvailable": true,
            "defaultChildSKU": "2343351",
            "defaultChildCatentryId": "1979146",
            "seo_token_ntk": "diamond-puppy-6-lb-2343351",
            "xf_thumbnail": "2343351",
            "mfPartNumber_ntk": "119",
            "xf_prdRating": 4.8069,
            "xf_sku": [
                "2343351",
                "2408220",
                "2408212"
            ],
            "shippingpromodesc": "Free Shipping on orders over $49!"
        },
        {
            "hasSingleSKU": true,
            "manufacturer": "Diamond",
            "resourceId": "https://loh-prodslr-eus.shop.tractorsupply.com/search/ext/resources/store/2314/productview/byId/25626",
            "uniqueID": "25626",
            "partNumber": "501304099",
            "shortDescription": "Diamond Performance All Life Stages Chicken Formula Dry Dog Food, 40 lb. Bag",
            "catalogEntryTypeCode": "ProductBean",
            "productColorOptions": [],
            "thumbnail": "https://media.tractorsupply.com/is/image/TractorSupplyCompany/5013040?$456$",
            "buyable": "true",
            "storeID": "2314",
            "name": "Diamond Performance All Life Stages Chicken Formula Dry Dog Food, 40 lb. Bag",
            "priceType": "1",
            "price": 46.99,
            "offerPriceMax": 46.99,
            "attributes": [
                {
                    "identifier": "_BazaarVoiceReviewCount",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewCount",
                    "uniqueID": "7000000000000000753",
                    "values": [
                        {
                            "identifier": "7741124012739219921",
                            "value": "248",
                            "uniqueID": "7741124012739219921"
                        }
                    ]
                },
                {
                    "identifier": "_TruckDelivery",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_TruckDelivery",
                    "uniqueID": "7000000000000001060",
                    "values": [
                        {
                            "identifier": "N",
                            "value": "N",
                            "uniqueID": "7000000000033060641"
                        }
                    ]
                },
                {
                    "identifier": "_IsOnlineOrStandard",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsOnlineOrStandard",
                    "uniqueID": "7000000000000028504",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060347"
                        }
                    ]
                },
                {
                    "identifier": "_IsSameDayEligible",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsSameDayEligible",
                    "uniqueID": "7000000000000028502",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060351"
                        }
                    ]
                },
                {
                    "identifier": "_BazaarVoiceReviewRating",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewRating",
                    "uniqueID": "7000000000000000065",
                    "values": [
                        {
                            "identifier": "7741124012739220953",
                            "value": "4.6815",
                            "uniqueID": "7741124012739220953"
                        }
                    ]
                }
            ],
            "offerPriceMin": 46.99,
            "displayPrice": {
                "ribbon": "NONE",
                "offer_price_min": "46.99",
                "pricetype": "1",
                "is_Mapp": false,
                "pricetype_selected": "1"
            },
            "newMultiVariant": "false",
            "stdDeliveryAvailable": true,
            "pickupAvailable": true,
            "defaultChildSKU": "5013040",
            "defaultChildCatentryId": "90047",
            "seo_token_ntk": "diamond-performance-dog-dog-food-40-lb-bag",
            "xf_thumbnail": "5013040",
            "mfPartNumber_ntk": "114",
            "xf_prdRating": 4.6815,
            "xf_sku": [
                "5013040"
            ],
            "shippingpromodesc": "Free Shipping on orders over $49!"
        },
        {
            "hasSingleSKU": false,
            "manufacturer": "Diamond",
            "resourceId": "https://loh-prodslr-eus.shop.tractorsupply.com/search/ext/resources/store/2314/productview/byId/19494",
            "uniqueID": "19494",
            "partNumber": "240823899",
            "shortDescription": "Diamond Premium Chicken Formula Dry Dog Food",
            "catalogEntryTypeCode": "ProductBean",
            "productColorOptions": [],
            "thumbnail": "https://media.tractorsupply.com/is/image/TractorSupplyCompany/2408238?$456$",
            "buyable": "true",
            "storeID": "2314",
            "name": "Diamond Premium Chicken Formula Dry Dog Food",
            "priceType": "1",
            "price": 46.99,
            "offerPriceMax": 46.99,
            "attributes": [
                {
                    "identifier": "_BazaarVoiceReviewCount",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewCount",
                    "uniqueID": "7000000000000000753",
                    "values": [
                        {
                            "identifier": "7741124012727700305",
                            "value": "358",
                            "uniqueID": "7741124012727700305"
                        }
                    ]
                },
                {
                    "identifier": "_TruckDelivery",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_TruckDelivery",
                    "uniqueID": "7000000000000001060",
                    "values": [
                        {
                            "identifier": "N",
                            "value": "N",
                            "uniqueID": "7000000000033060641"
                        }
                    ]
                },
                {
                    "identifier": "_IsOnlineOrStandard",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsOnlineOrStandard",
                    "uniqueID": "7000000000000028504",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060347"
                        }
                    ]
                },
                {
                    "identifier": "_IsSameDayEligible",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsSameDayEligible",
                    "uniqueID": "7000000000000028502",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060351"
                        }
                    ]
                },
                {
                    "identifier": "_BazaarVoiceReviewRating",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewRating",
                    "uniqueID": "7000000000000000065",
                    "values": [
                        {
                            "identifier": "7741124012727701497",
                            "value": "4.7793",
                            "uniqueID": "7741124012727701497"
                        }
                    ]
                }
            ],
            "offerPriceMin": 46.99,
            "displayPrice": {
                "ribbon": "NONE",
                "offer_price_min": "46.99",
                "pricetype": "1",
                "is_Mapp": false,
                "pricetype_selected": "1"
            },
            "newMultiVariant": "true",
            "stdDeliveryAvailable": true,
            "pickupAvailable": true,
            "defaultChildSKU": "2408238",
            "defaultChildCatentryId": "83896",
            "seo_token_ntk": "diamond-premium-adult-dog-food-40-lb-bag-2408238",
            "xf_thumbnail": "2408238",
            "mfPartNumber_ntk": "110",
            "xf_prdRating": 4.7793,
            "xf_sku": [
                "2408238",
                "5003964"
            ],
            "shippingpromodesc": "Free Shipping on orders over $49!"
        },
        {
            "hasSingleSKU": false,
            "manufacturer": "Pedigree",
            "resourceId": "https://loh-prodslr-eus.shop.tractorsupply.com/search/ext/resources/store/2314/productview/byId/1276514",
            "uniqueID": "1276514",
            "partNumber": "187285299",
            "shortDescription": "Pedigree Complete Nutrition Adult Grilled Steak and Vegetable Recipe Dry Dog Food",
            "catalogEntryTypeCode": "ProductBean",
            "productColorOptions": [],
            "thumbnail": "https://media.tractorsupply.com/is/image/TractorSupplyCompany/1872852?$456$",
            "buyable": "true",
            "storeID": "2314",
            "name": "Pedigree Complete Nutrition Adult Grilled Steak and Vegetable Recipe Dry Dog Food",
            "priceType": "1",
            "price": 29.99,
            "offerPriceMax": 29.99,
            "attributes": [
                {
                    "identifier": "_BazaarVoiceReviewCount",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewCount",
                    "uniqueID": "7000000000000000753",
                    "values": [
                        {
                            "identifier": "7741124012743283672",
                            "value": "2458",
                            "uniqueID": "7741124012743283672"
                        }
                    ]
                },
                {
                    "identifier": "_TruckDelivery",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_TruckDelivery",
                    "uniqueID": "7000000000000001060",
                    "values": [
                        {
                            "identifier": "N",
                            "value": "N",
                            "uniqueID": "7000000000033060641"
                        }
                    ]
                },
                {
                    "identifier": "_IsOnlineOrStandard",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsOnlineOrStandard",
                    "uniqueID": "7000000000000028504",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060347"
                        }
                    ]
                },
                {
                    "identifier": "_IsSameDayEligible",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsSameDayEligible",
                    "uniqueID": "7000000000000028502",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060351"
                        }
                    ]
                },
                {
                    "identifier": "_BazaarVoiceReviewRating",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewRating",
                    "uniqueID": "7000000000000000065",
                    "values": [
                        {
                            "identifier": "7741124012743137553",
                            "value": "4.6517",
                            "uniqueID": "7741124012743137553"
                        }
                    ]
                }
            ],
            "offerPriceMin": 29.99,
            "displayPrice": {
                "ribbon": "NONE",
                "offer_price_min": "29.99",
                "pricetype": "1",
                "is_Mapp": false,
                "mapp_type": "STRICT",
                "pricetype_selected": "1"
            },
            "newMultiVariant": "true",
            "stdDeliveryAvailable": true,
            "pickupAvailable": true,
            "defaultChildSKU": "1872852",
            "defaultChildCatentryId": "1276583",
            "seo_token_ntk": "pedigree-complete-nutrition-adult-dry-dog-food-grilled-steak-vegetable-flavor-dog-kibble-44-lb-10249509-1872852",
            "xf_thumbnail": "1872852",
            "mfPartNumber_ntk": "10249509",
            "xf_prdRating": 4.6517,
            "xf_sku": [
                "1872852",
                "1872857"
            ],
            "shippingpromodesc": "Free Shipping on orders over $49!"
        },
        {
            "hasSingleSKU": false,
            "manufacturer": "Pedigree",
            "resourceId": "https://loh-prodslr-eus.shop.tractorsupply.com/search/ext/resources/store/2314/productview/byId/1276515",
            "uniqueID": "1276515",
            "partNumber": "187285399",
            "shortDescription": "Pedigree Complete Nutrition Adult Roasted Chicken, Rice and Vegetable Recipe Dry Dog Food",
            "catalogEntryTypeCode": "ProductBean",
            "productColorOptions": [],
            "thumbnail": "https://media.tractorsupply.com/is/image/TractorSupplyCompany/1872853?$456$",
            "buyable": "true",
            "storeID": "2314",
            "name": "Pedigree Complete Nutrition Adult Roasted Chicken, Rice and Vegetable Recipe Dry Dog Food",
            "priceType": "1",
            "price": 29.99,
            "offerPriceMax": 29.99,
            "attributes": [
                {
                    "identifier": "_BazaarVoiceReviewCount",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewCount",
                    "uniqueID": "7000000000000000753",
                    "values": [
                        {
                            "identifier": "7741124012743136415",
                            "value": "2876",
                            "uniqueID": "7741124012743136415"
                        }
                    ]
                },
                {
                    "identifier": "_TruckDelivery",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_TruckDelivery",
                    "uniqueID": "7000000000000001060",
                    "values": [
                        {
                            "identifier": "N",
                            "value": "N",
                            "uniqueID": "7000000000033060641"
                        }
                    ]
                },
                {
                    "identifier": "_IsOnlineOrStandard",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsOnlineOrStandard",
                    "uniqueID": "7000000000000028504",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060347"
                        }
                    ]
                },
                {
                    "identifier": "_IsSameDayEligible",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsSameDayEligible",
                    "uniqueID": "7000000000000028502",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060351"
                        }
                    ]
                },
                {
                    "identifier": "_BazaarVoiceReviewRating",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewRating",
                    "uniqueID": "7000000000000000065",
                    "values": [
                        {
                            "identifier": "7741124012743137554",
                            "value": "4.6735",
                            "uniqueID": "7741124012743137554"
                        }
                    ]
                }
            ],
            "offerPriceMin": 29.99,
            "displayPrice": {
                "ribbon": "NONE",
                "offer_price_min": "29.99",
                "pricetype": "1",
                "is_Mapp": false,
                "mapp_type": "STRICT",
                "pricetype_selected": "1"
            },
            "newMultiVariant": "true",
            "stdDeliveryAvailable": true,
            "pickupAvailable": true,
            "defaultChildSKU": "1872853",
            "defaultChildCatentryId": "1276584",
            "seo_token_ntk": "pedigree-complete-nutrition-adult-dry-dog-food-roasted-chicken-rice-vegetable-flavor-dog-kibble-44-lb-10249512-1872853",
            "xf_thumbnail": "1872853",
            "mfPartNumber_ntk": "10249512",
            "xf_prdRating": 4.6735,
            "xf_sku": [
                "1872853",
                "1872856"
            ],
            "shippingpromodesc": "Free Shipping on orders over $49!"
        },
        {
            "hasSingleSKU": true,
            "manufacturer": "Pedigree",
            "resourceId": "https://loh-prodslr-eus.shop.tractorsupply.com/search/ext/resources/store/2314/productview/byId/1275044",
            "uniqueID": "1275044",
            "partNumber": "187285099",
            "shortDescription": "Pedigree Big Dog Adult Roasted Chicken, Rice and Vegetable Recipe Dry Dog Food, 40 lb. Bag",
            "catalogEntryTypeCode": "ProductBean",
            "productColorOptions": [],
            "thumbnail": "https://media.tractorsupply.com/is/image/TractorSupplyCompany/1872850?$456$",
            "buyable": "true",
            "storeID": "2314",
            "name": "Pedigree Big Dog Adult Roasted Chicken, Rice and Vegetable Recipe Dry Dog Food, 40 lb. Bag",
            "priceType": "1",
            "price": 29.99,
            "offerPriceMax": 29.99,
            "attributes": [
                {
                    "identifier": "_BazaarVoiceReviewCount",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewCount",
                    "uniqueID": "7000000000000000753",
                    "values": [
                        {
                            "identifier": "7741124012738264679",
                            "value": "543",
                            "uniqueID": "7741124012738264679"
                        }
                    ]
                },
                {
                    "identifier": "_TruckDelivery",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_TruckDelivery",
                    "uniqueID": "7000000000000001060",
                    "values": [
                        {
                            "identifier": "N",
                            "value": "N",
                            "uniqueID": "7000000000033060641"
                        }
                    ]
                },
                {
                    "identifier": "_IsOnlineOrStandard",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsOnlineOrStandard",
                    "uniqueID": "7000000000000028504",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060347"
                        }
                    ]
                },
                {
                    "identifier": "_IsSameDayEligible",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsSameDayEligible",
                    "uniqueID": "7000000000000028502",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060351"
                        }
                    ]
                },
                {
                    "identifier": "_BazaarVoiceReviewRating",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewRating",
                    "uniqueID": "7000000000000000065",
                    "values": [
                        {
                            "identifier": "7741124012738266726",
                            "value": "4.523",
                            "uniqueID": "7741124012738266726"
                        }
                    ]
                }
            ],
            "offerPriceMin": 29.99,
            "displayPrice": {
                "ribbon": "NONE",
                "offer_price_min": "29.99",
                "pricetype": "1",
                "is_Mapp": false,
                "mapp_type": "STRICT",
                "pricetype_selected": "1"
            },
            "newMultiVariant": "false",
            "stdDeliveryAvailable": true,
            "pickupAvailable": true,
            "defaultChildSKU": "1872850",
            "defaultChildCatentryId": "1275128",
            "seo_token_ntk": "pedigree-complete-nutrition-large-breed-dry-dog-food-roasted-chicken-rice-vegetable-flavor-dog-kibble-40-lb-bag-10249534",
            "xf_thumbnail": "1872850",
            "mfPartNumber_ntk": "10249534",
            "xf_prdRating": 4.523,
            "xf_sku": [
                "1872850"
            ],
            "shippingpromodesc": "Free Shipping on orders over $49!"
        },
        {
            "hasSingleSKU": false,
            "manufacturer": "Pedigree",
            "resourceId": "https://loh-prodslr-eus.shop.tractorsupply.com/search/ext/resources/store/2314/productview/byId/1275045",
            "uniqueID": "1275045",
            "partNumber": "187285199",
            "shortDescription": "Pedigree Adult High-Protein Beef and Lamb Recipe Dry Dog Food",
            "catalogEntryTypeCode": "ProductBean",
            "productColorOptions": [],
            "thumbnail": "https://media.tractorsupply.com/is/image/TractorSupplyCompany/1872851?$456$",
            "buyable": "true",
            "storeID": "2314",
            "name": "Pedigree Adult High-Protein Beef and Lamb Recipe Dry Dog Food",
            "priceType": "1",
            "price": 40.99,
            "offerPriceMax": 40.99,
            "attributes": [
                {
                    "identifier": "_BazaarVoiceReviewCount",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewCount",
                    "uniqueID": "7000000000000000753",
                    "values": [
                        {
                            "identifier": "7741124012743136413",
                            "value": "844",
                            "uniqueID": "7741124012743136413"
                        }
                    ]
                },
                {
                    "identifier": "_TruckDelivery",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_TruckDelivery",
                    "uniqueID": "7000000000000001060",
                    "values": [
                        {
                            "identifier": "N",
                            "value": "N",
                            "uniqueID": "7000000000033060641"
                        }
                    ]
                },
                {
                    "identifier": "_IsOnlineOrStandard",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsOnlineOrStandard",
                    "uniqueID": "7000000000000028504",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060347"
                        }
                    ]
                },
                {
                    "identifier": "_IsSameDayEligible",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsSameDayEligible",
                    "uniqueID": "7000000000000028502",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060351"
                        }
                    ]
                },
                {
                    "identifier": "_BazaarVoiceReviewRating",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewRating",
                    "uniqueID": "7000000000000000065",
                    "values": [
                        {
                            "identifier": "7741124012743137552",
                            "value": "4.5284",
                            "uniqueID": "7741124012743137552"
                        }
                    ]
                }
            ],
            "offerPriceMin": 40.99,
            "displayPrice": {
                "ribbon": "NONE",
                "offer_price_min": "40.99",
                "pricetype": "1",
                "is_Mapp": false,
                "mapp_type": "STRICT",
                "pricetype_selected": "1"
            },
            "newMultiVariant": "true",
            "stdDeliveryAvailable": true,
            "pickupAvailable": true,
            "defaultChildSKU": "1872851",
            "defaultChildCatentryId": "1275129",
            "seo_token_ntk": "pedigree-high-protein-adult-dry-dog-food-beef-and-lamb-flavor-dog-kibble-44-lb-10249488-1872851",
            "xf_thumbnail": "1872851",
            "mfPartNumber_ntk": "10249488",
            "xf_prdRating": 4.5284,
            "xf_sku": [
                "1872851",
                "1872855"
            ],
            "shippingpromodesc": "Free Shipping on orders over $49!"
        },
        {
            "hasSingleSKU": true,
            "manufacturer": "Pedigree",
            "resourceId": "https://loh-prodslr-eus.shop.tractorsupply.com/search/ext/resources/store/2314/productview/byId/7809",
            "uniqueID": "7809",
            "partNumber": "106864699",
            "shortDescription": "Pedigree Puppy Growth and Protection Chicken and Vegetable Recipe Dry Dog Food, 30 lb. Bag",
            "catalogEntryTypeCode": "ProductBean",
            "productColorOptions": [],
            "thumbnail": "https://media.tractorsupply.com/is/image/TractorSupplyCompany/1872854?$456$",
            "buyable": "true",
            "storeID": "2314",
            "name": "Pedigree Puppy Growth and Protection Chicken and Vegetable Recipe Dry Dog Food, 30 lb. Bag",
            "priceType": "1",
            "price": 30.99,
            "offerPriceMax": 30.99,
            "attributes": [
                {
                    "identifier": "_BazaarVoiceReviewCount",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewCount",
                    "uniqueID": "7000000000000000753",
                    "values": [
                        {
                            "identifier": "7741124012739822874",
                            "value": "1628",
                            "uniqueID": "7741124012739822874"
                        }
                    ]
                },
                {
                    "identifier": "_TruckDelivery",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_TruckDelivery",
                    "uniqueID": "7000000000000001060",
                    "values": [
                        {
                            "identifier": "N",
                            "value": "N",
                            "uniqueID": "7000000000033060641"
                        }
                    ]
                },
                {
                    "identifier": "_IsOnlineOrStandard",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsOnlineOrStandard",
                    "uniqueID": "7000000000000028504",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060347"
                        }
                    ]
                },
                {
                    "identifier": "_IsSameDayEligible",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsSameDayEligible",
                    "uniqueID": "7000000000000028502",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060351"
                        }
                    ]
                },
                {
                    "identifier": "_BazaarVoiceReviewRating",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewRating",
                    "uniqueID": "7000000000000000065",
                    "values": [
                        {
                            "identifier": "7741124012739823761",
                            "value": "4.6333",
                            "uniqueID": "7741124012739823761"
                        }
                    ]
                }
            ],
            "offerPriceMin": 30.99,
            "displayPrice": {
                "ribbon": "NONE",
                "offer_price_min": "30.99",
                "pricetype": "1",
                "is_Mapp": false,
                "mapp_type": "STRICT",
                "pricetype_selected": "1"
            },
            "newMultiVariant": "false",
            "stdDeliveryAvailable": true,
            "pickupAvailable": true,
            "defaultChildSKU": "1872854",
            "defaultChildCatentryId": "1276585",
            "seo_token_ntk": "pedigree-puppy-growth-protection-chicken-vegetable-flavor-dry-dog-food-28-lb-bag",
            "xf_thumbnail": "1872854",
            "mfPartNumber_ntk": "10170523",
            "xf_prdRating": 4.6333,
            "xf_sku": [
                "1872854"
            ],
            "shippingpromodesc": "Free Shipping on orders over $49!"
        },
        {
            "hasSingleSKU": true,
            "manufacturer": "Pedigree",
            "resourceId": "https://loh-prodslr-eus.shop.tractorsupply.com/search/ext/resources/store/2314/productview/byId/1276519",
            "uniqueID": "1276519",
            "partNumber": "187285899",
            "shortDescription": "Pedigree Small Breed Adult Complete Nutrition Grilled Steak and Vegetable Recipe Dry Dog Food, 14 lb. Bag",
            "catalogEntryTypeCode": "ProductBean",
            "productColorOptions": [],
            "thumbnail": "https://media.tractorsupply.com/is/image/TractorSupplyCompany/1872858?$456$",
            "buyable": "true",
            "storeID": "2314",
            "name": "Pedigree Small Breed Adult Complete Nutrition Grilled Steak and Vegetable Recipe Dry Dog Food, 14 lb. Bag",
            "priceType": "1",
            "price": 23.99,
            "offerPriceMax": 23.99,
            "attributes": [
                {
                    "identifier": "_BazaarVoiceReviewCount",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewCount",
                    "uniqueID": "7000000000000000753",
                    "values": [
                        {
                            "identifier": "7741124012738264682",
                            "value": "979",
                            "uniqueID": "7741124012738264682"
                        }
                    ]
                },
                {
                    "identifier": "_TruckDelivery",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_TruckDelivery",
                    "uniqueID": "7000000000000001060",
                    "values": [
                        {
                            "identifier": "N",
                            "value": "N",
                            "uniqueID": "7000000000033060641"
                        }
                    ]
                },
                {
                    "identifier": "_IsOnlineOrStandard",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsOnlineOrStandard",
                    "uniqueID": "7000000000000028504",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060347"
                        }
                    ]
                },
                {
                    "identifier": "_IsSameDayEligible",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsSameDayEligible",
                    "uniqueID": "7000000000000028502",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060351"
                        }
                    ]
                },
                {
                    "identifier": "_BazaarVoiceReviewRating",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_BazaarVoiceReviewRating",
                    "uniqueID": "7000000000000000065",
                    "values": [
                        {
                            "identifier": "7741124012738266729",
                            "value": "4.6415",
                            "uniqueID": "7741124012738266729"
                        }
                    ]
                }
            ],
            "offerPriceMin": 23.99,
            "displayPrice": {
                "ribbon": "NONE",
                "offer_price_min": "23.99",
                "pricetype": "1",
                "is_Mapp": false,
                "mapp_type": "STRICT",
                "pricetype_selected": "1"
            },
            "newMultiVariant": "false",
            "stdDeliveryAvailable": true,
            "pickupAvailable": true,
            "defaultChildSKU": "1872858",
            "defaultChildCatentryId": "1276588",
            "seo_token_ntk": "pedigree-small-dog-complete-nutrition-small-breed-adult-dry-dog-food-grilled-steak-and-vegetable-14-lb-10249543",
            "xf_thumbnail": "1872858",
            "mfPartNumber_ntk": "10249543",
            "xf_prdRating": 4.6415,
            "xf_sku": [
                "1872858"
            ],
            "shippingpromodesc": "Free Shipping on orders over $49!"
        },]
 useEffect(() => {
  const brands = searchParams?.get("brand");
  const prices = searchParams?.get("price");
  setSelectedBrands(brands ? brands.split(",") : []);
  setSelectedPrice(prices ? prices.split(",") : []);
  // eslint-disable-next-line
}, []);
   
useEffect(() => {
  console.log("Selected Filters:", selectedBrands, selectedPrice);                                
}, [selectedBrands, selectedPrice]);

  // Add state for selectedBrands
  const filteredProducts = props.filter((product) => {
  const brandMatch =
    selectedBrands.length === 0 || selectedBrands.includes(product.manufacturer);
  const priceMatch =
    selectedPrice.length === 0 ||
    selectedPrice.some((priceRange) => {
      const [min, max] = priceRange
        .replace("$", "")
        .split(" - ")
        .map((v) => parseFloat(v.replace("$", "")));
      return product.price >= min && product.price <= max;
    });
  return brandMatch && priceMatch;
});

  return (
       <Container>
      <BreadCrumb />
      <ActionBar selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands} selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice}/>
      <Grid container spacing={2}>
         {filteredProducts.map((product) => (
          <Grid item key={product.uniqueID} xs={12} sm={6} md={4} lg={3}>
            <ProductCard data={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}