import { 
  AuthenticatedMedusaRequest, 
  MedusaResponse
} from "@medusajs/framework"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import { z } from "zod"
import createDigitalProductWorkflow from "../../../workflows/create-digital-product"
import { CreateDigitalProductMediaInput } from "../../../workflows/create-digital-product/steps/create-digital-product-medias"
import { createDigitalProductsSchema } from "../../validation-schemas"

export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  const { 
    fields, 
    limit = 20, 
    offset = 0,
  } = req.validatedQuery || {}
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { 
    data: digitalProducts,
    metadata: { count, take, skip },
  } = await query.graph({
    entity: "digital_product",
    fields: [
      "*",
      "medias.*",
      "product_variant.*",
      ...(fields || []),
    ],
    pagination: {
      skip: offset,
      take: limit,
    },
  })

  res.json({
    digital_products: digitalProducts,
    count,
    limit: take,
    offset: skip,
  })
}

type CreateRequestBody = z.infer<
  typeof createDigitalProductsSchema
>

export const POST = async (
  req: AuthenticatedMedusaRequest<CreateRequestBody>,
  res: MedusaResponse
) => {
  
  const { result } = await createDigitalProductWorkflow(
    req.scope
  ).run({
    input: {
      digitalProductData: {
        name: req.validatedBody.name,
    },
      product_variant_id:  req.validatedBody.variant_id
    }
  })

  res.json({
    digital_product: result.digital_product
  })
}