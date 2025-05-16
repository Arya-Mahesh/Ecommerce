import ProductCard from "@/components/productCard/productCard";

export default function ProductPage( ) {

  const props  = {
            "hasSingleSKU": false,
            "manufacturer": "VetOne",
            "resourceId": "https://loh-prodslr-eus.shop.tractorsupply.com/search/ext/resources/store/2314/productview/byId/2466953",
            "uniqueID": "2466953",
            "partNumber": "254472799",
            "shortDescription": "VetOne Thyro-Tabs for Dogs, Single Tablets",
            "catalogEntryTypeCode": "ProductBean",
            "productColorOptions": {},
            "thumbnail": "https://media.tractorsupply.com/is/image/TractorSupplyCompany/2544727?$456$",
            "buyable": "true",
            "storeID": "2314",
            "name": "VetOne Thyro-Tabs for Dogs, Single Tablets",
            "priceType": "1",
            "price": 0.05,
            "offerPriceMax": 0.05,
            "attributes": [
                {
                    "identifier": "_FulfilledBy",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_FulfilledBy",
                    "uniqueID": "7741124012283425335",
                    "values": [
                        {
                            "identifier": "Allivet",
                            "value": "Allivet",
                            "uniqueID": "7741124012693569352"
                        }
                    ]
                },
                {
                    "identifier": "_IsPrescription",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_IsPrescription",
                    "uniqueID": "7741124012283425337",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7741124012693569354"
                        }
                    ]
                },
                {
                    "identifier": "_RXType",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_RXType",
                    "uniqueID": "7741124012283425338",
                    "values": [
                        {
                            "identifier": "RX MEDICINE",
                            "value": "RX MEDICINE",
                            "uniqueID": "7741124012693569356"
                        }
                    ]
                },
                {
                    "identifier": "_NewArrival",
                    "usage": "Descriptive",
                    "displayable": true,
                    "name": "_NewArrival",
                    "uniqueID": "7000000000000026501",
                    "values": [
                        {
                            "identifier": "Y",
                            "value": "Y",
                            "uniqueID": "7000000000033060456"
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
                }
            ],
            "offerPriceMin": 0.05,
            "displayPrice": {
                "ribbon": "NEWARRIVAL",
                "offer_price_min": "0.05",
                "pricetype": "1",
                "is_Mapp": false,
                "pricetype_selected": "1"
            },
            "newMultiVariant": "true",
            "stdDeliveryAvailable": true,
            "pickupAvailable": false,
            "defaultChildSKU": "2544727",
            "defaultChildCatentryId": "2468729",
            "seo_token_ntk": "vetone-thyro-tabs-for-dogs-single-tablets-2544727",
            "xf_thumbnail": "2544727",
            "mfPartNumber_ntk": "510155",
            "xf_sku": [
                "2544727",
                "2544739",
                "2544741",
                "2544729",
                "2544731",
                "2544733",
                "2544735",
                "2544737",
                "2544743"
            ],
            "shippingpromodesc": "Free Delivery for orders over $30. "
        }
  return (
    <>
      <ProductCard data={props}/>
    </>
  );
}