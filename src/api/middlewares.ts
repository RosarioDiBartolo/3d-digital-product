import { 
  validateAndTransformBody,
  defineMiddlewares, 
} from "@medusajs/framework/http"
import { createDigitalProductsSchema , addDigitalProductMediasSchema, deleteDigitalProductMediasSchema} from "./validation-schemas"
import multer from "multer"

const upload = multer({ storage: multer.memoryStorage() })

export default defineMiddlewares({
  routes: [
    {
      matcher: "/admin/digital-products",
      method: "POST",
      middlewares: [
        validateAndTransformBody(createDigitalProductsSchema),
      ],
    },
    {
      matcher: "/admin/digital-products/:id/medias",
      method: "POST",
      middlewares: [
        validateAndTransformBody(addDigitalProductMediasSchema),
      ],
    },
    {
      matcher: "/admin/digital-products/:id/medias",
      method: "DELETE",
      middlewares: [
        validateAndTransformBody(deleteDigitalProductMediasSchema),
      ],
    },
    {
      matcher: "/admin/digital-products/upload**",
      method: "POST",
      middlewares: [
        upload.array("files"),
      ]
    },
    
  ],
})