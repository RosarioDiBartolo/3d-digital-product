import { CreateDigitalProductMediaInput } from "../create-digital-product/steps/create-digital-product-medias";
type WorkflowInput = {
    digital_product_id: string;
    medias: Omit<CreateDigitalProductMediaInput, "digital_product_id">[];
};
declare const addDigitalProductMediasWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<WorkflowInput, {
    digital_product_medias: ({
        id: string;
        type: import("../../modules/digital-product/types").MediaType;
        fileId: string;
        mimeType: string;
        digitalProduct: {
            id: string;
            name: string;
            medias: /*elided*/ any[];
            orders: {
                id: string;
                status: import("../../modules/digital-product/types").OrderStatus;
                products: /*elided*/ any[];
                created_at: Date;
                updated_at: Date;
                deleted_at: Date;
            }[];
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
        };
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        digitalProduct_id: string;
    }[] | import("@medusajs/framework/workflows-sdk").WorkflowData<{
        id: string;
        type: import("../../modules/digital-product/types").MediaType;
        fileId: string;
        mimeType: string;
        digitalProduct: {
            id: string;
            name: string;
            medias: /*elided*/ any[];
            orders: {
                id: string;
                status: import("../../modules/digital-product/types").OrderStatus;
                products: /*elided*/ any[];
                created_at: Date;
                updated_at: Date;
                deleted_at: Date;
            }[];
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
        };
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        digitalProduct_id: string;
    }[]>) & {
        id: string;
        type: import("../../modules/digital-product/types").MediaType;
        fileId: string;
        mimeType: string;
        digitalProduct: {
            id: string;
            name: string;
            medias: /*elided*/ any[];
            orders: {
                id: string;
                status: import("../../modules/digital-product/types").OrderStatus;
                products: /*elided*/ any[];
                created_at: Date;
                updated_at: Date;
                deleted_at: Date;
            }[];
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
        };
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        digitalProduct_id: string;
    }[];
}, []>;
export default addDigitalProductMediasWorkflow;
