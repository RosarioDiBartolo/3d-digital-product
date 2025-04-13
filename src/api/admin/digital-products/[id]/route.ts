import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import { DIGITAL_PRODUCT_MODULE } from "../../../../modules/digital-product"
import DigitalProductModuleService from "../../../../modules/digital-product/service"

export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {

   const {id} = req.params 
  const service: DigitalProductModuleService = req.scope.resolve(   DIGITAL_PRODUCT_MODULE )
 
  const product = await service.retrieveDigitalProduct(id, {
    relations: ["medias"]
  })
  console.log(product)
  res.json(product)
}