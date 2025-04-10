import {
  createStep,
  StepResponse
} from "@medusajs/framework/workflows-sdk" 
import DigitalProductModuleService from "../../../modules/digital-product/service"
import { DIGITAL_PRODUCT_MODULE } from "../../../modules/digital-product" 

type StepInput = {
    digital_product_id: string;
    medias: string[];
}

const deleteDigitalProductMedias = createStep(
  "delete-digital-product-medias",
  async ({   digital_product_id, medias }: StepInput, { container }) => {
    const digitalProductModuleService: DigitalProductModuleService = 
      container.resolve(DIGITAL_PRODUCT_MODULE)


      const digitalProduct = await digitalProductModuleService.retrieveDigitalProduct(digital_product_id )

      await digitalProductModuleService.softDeleteDigitalProductMedias(
        medias
      )
 
     // await digitalProductModuleService.updateDigitalProducts(    {id: digital_product_id, medias :  [... digitalProduct.medias.map(m=> m.id).filter(mid => !medias.includes(mid)) ] })
 
 
    return new StepResponse({
      deleted_medias: medias
    }, {
      deleted_medias: medias
    })
  },
  async ({ deleted_medias }, { container }) => {
    const digitalProductModuleService: DigitalProductModuleService = 
      container.resolve(DIGITAL_PRODUCT_MODULE)

    await digitalProductModuleService.restoreDigitalProductMedias(deleted_medias )
  }
)

export default deleteDigitalProductMedias