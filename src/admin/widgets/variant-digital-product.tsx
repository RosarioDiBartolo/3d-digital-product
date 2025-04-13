import { defineWidgetConfig } from "@medusajs/admin-sdk";

import {
  Container,
  DropdownMenu,
  IconButton,
  clx,
  Text,
  Button,
} from "@medusajs/ui";
import { useLoaderData, LoaderFunctionArgs, Link } from "react-router-dom";

import { Header } from "../components/header";
import {
  DetailWidgetProps,
  AdminProductVariant, 
} from "@medusajs/framework/types";
import { sdk } from "../lib/config";
import { useQuery } from "@tanstack/react-query";
import { DigitalProduct } from "../types";
import { CreateForm } from "../components/create-variant-digital-product";

type Variant = AdminProductVariant & {
    digital_product: DigitalProduct
}
function VariantDigitalProduct({
  data,
}: DetailWidgetProps<AdminProductVariant>) {
  const {data: digital_product} = useQuery({
    queryFn: async () => {
        
      const productVariantsList = await sdk.admin.productVariant.list({
        id: data.id,
        fields:  "*digital_product" ,
      });

        const variant = (productVariantsList.variants.length? productVariantsList.variants[0]: null )as  Variant | null 

        if (!variant){
            return null
        }
        return variant.digital_product
        

    },
    queryKey: ["product_variants", data.id],
  });

  return (
    <Container>
      <Header 
      
      actions={ digital_product? []: [
        {
            type: "custom",
            children: <CreateForm  {...data}/>,
          },

      ] }
      title="Related digital product" />
      <Container> 
      { digital_product? (
        <Link to = {`/digital-products/${digital_product.id}`}>
            {digital_product.name}
        </Link>
      ) : (
        <>
          {" "}
          <Text>
            {" "}
            <> No digital product correlated with this variant </>{" "}
          </Text>
      
        </>
      )}
      </Container>
    </Container>
  );
}

export default VariantDigitalProduct;

// The widget's configurations
export const config = defineWidgetConfig({
  zone: "product_variant.details.after",
});
