import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework";
import { addDigitalProductMediasSchema, deleteDigitalProductMediasSchema } from "src/api/validation-schemas";
import { z } from "zod";
type AddMediasRequestBody = z.infer<typeof addDigitalProductMediasSchema>;
export declare const POST: (req: AuthenticatedMedusaRequest<AddMediasRequestBody>, res: MedusaResponse) => Promise<void>;
type DeleteMediasRequestBody = z.infer<typeof deleteDigitalProductMediasSchema>;
export declare const DELETE: (req: AuthenticatedMedusaRequest<DeleteMediasRequestBody>, res: MedusaResponse) => Promise<void>;
export {};
