import {
  createWorkflow,

  transform,

  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"

import createDigitalProductMediasStep, { CreateDigitalProductMediaInput } from "../create-digital-product/steps/create-digital-product-medias"
import deleteDigitalProductMedias from "./steps/delete-digital-product-medias"

type WorkflowInput = {medias: string[], digital_product_id: string}


const deleteDigitalProductMediasWorkflow = createWorkflow(
  "delete-digital-product-medias",
  ({medias , digital_product_id}: WorkflowInput) => {
  
    const {deleted_medias} = deleteDigitalProductMedias({
        medias ,
        digital_product_id
    })
     

    return new WorkflowResponse({
         deleted_medias
    })
  }
)

export default deleteDigitalProductMediasWorkflow
