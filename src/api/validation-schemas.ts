 
import { z } from "zod"
import { MediaType } from "../modules/digital-product/types"

export const createDigitalProductsSchema = z.object({
  name: z.string(),
  variant_id: z.string()
})

export const addDigitalProductMediasSchema = z.object({
  medias: z.array(z.object({
    type: z.nativeEnum(MediaType),
    fileId: z.string(),
    mimeType: z.string()
  })),
  
})


export const deleteDigitalProductMediasSchema = z.object({
  medias: z.array(z.string())
  
})