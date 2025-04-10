import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@medusajs/framework";
import { addDigitalProductMediasSchema, deleteDigitalProductMediasSchema } from "src/api/validation-schemas";
import addDigitalProductMediasWorkflow from "src/workflows/add-digital-product-medias";
import { CreateDigitalProductMediaInput } from "src/workflows/create-digital-product/steps/create-digital-product-medias";
import deleteDigitalProductMediasWorkflow from "src/workflows/delete-digital-product-medias copy";

import { z } from "zod"

type AddMediasRequestBody = z.infer<
  typeof addDigitalProductMediasSchema
>

export const POST = async (
  req: AuthenticatedMedusaRequest<AddMediasRequestBody>,
  res: MedusaResponse
) => {

  console.log( req.validatedBody.medias)
  const {
    result: { digital_product_medias },
  } = await addDigitalProductMediasWorkflow(req.scope).run({
    input: {
      digital_product_id:   req.params.id,
      medias: req.validatedBody.medias  as Omit<CreateDigitalProductMediaInput, "digital_product_id">[],
         },
  });
  res.json({
    digital_product_medias,
  });
}; 
type DeleteMediasRequestBody = z.infer<
  typeof deleteDigitalProductMediasSchema 
>

export const DELETE = async (
  req: AuthenticatedMedusaRequest<DeleteMediasRequestBody>,
  res: MedusaResponse
) => {

  const {id} = req.params 

  const {
    result: { deleted_medias },
  } = await deleteDigitalProductMediasWorkflow(req.scope).run({    input: {
      digital_product_id: id,
      medias: req.validatedBody.medias   ,
      
    }
  })

   
  res.json({
    deleted_medias,
  });
};

