
import { createWorkflow, transform, WorkflowResponse } from "@medusajs/framework/workflows-sdk";
import createDigitalProductMediasStep, { CreateDigitalProductMediaInput } from "../create-digital-product/steps/create-digital-product-medias"

type WorkflowInput = {
    digital_product_id: string;
   medias: Omit<CreateDigitalProductMediaInput, "digital_product_id">[];
 
}


const addDigitalProductMediasWorkflow = createWorkflow(
  "add-digital-product-medias",
  ({  digital_product_id, medias}: WorkflowInput) => {
 
    const {digital_product_medias} = createDigitalProductMediasStep({
        medias:  transform(medias, data => data.map(m=> ({...m, digital_product_id})))
    })

    return new WorkflowResponse({
        digital_product_medias,
       
    })
  }
)

export default addDigitalProductMediasWorkflow