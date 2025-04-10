import { useQuery } from "@tanstack/react-query";
import { sdk } from "./config";
import { DigitalProduct } from "../types";

export const useDigitalProduct = (id?: string)=>useQuery({
 
    queryKey: ["digital-products", id],

    queryFn: async () => {
      if (!id) throw "Missing id when trying to retrive digital_product"
      const data = await sdk.client.fetch< DigitalProduct >(`/admin/digital-products/${id}`)
      console.log(data)
       return  data
    },
  })
 