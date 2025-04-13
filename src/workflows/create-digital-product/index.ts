import { 
  createWorkflow,
  transform,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  CreateProductWorkflowInputDTO
} from "@medusajs/framework/types"
import { 
  createProductsWorkflow,
  createRemoteLinkStep
} from "@medusajs/medusa/core-flows"
import { 
  Modules
} from "@medusajs/framework/utils"
import createDigitalProductStep, { 
  CreateDigitalProductStepInput
} from "./steps/create-digital-product"
import createDigitalProductMediasStep, { 
  CreateDigitalProductMediaInput
} from "./steps/create-digital-product-medias"
import { DIGITAL_PRODUCT_MODULE } from "../../modules/digital-product"

type CreateDigitalProductWorkflowInput = {
  digitalProductData: CreateDigitalProductStepInput,  
  product_variant_id: string,
}

const createDigitalProductWorkflow = createWorkflow(
  "create-digital-product",
  (input: CreateDigitalProductWorkflowInput) => {
    const { digitalProductData, product_variant_id } = input

 

    const { digital_product } = createDigitalProductStep(
      digitalProductData
    )
 

    createRemoteLinkStep([{
      [DIGITAL_PRODUCT_MODULE]: {
        digital_product_id: digital_product.id
      },
      [Modules.PRODUCT]: {
        product_variant_id: product_variant_id
      }
    }])

    return new WorkflowResponse({
      digital_product 
    })
  }
)

export default createDigitalProductWorkflow