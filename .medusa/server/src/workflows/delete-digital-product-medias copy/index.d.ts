type WorkflowInput = {
    medias: string[];
    digital_product_id: string;
};
declare const deleteDigitalProductMediasWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<WorkflowInput, {
    deleted_medias: (string[] | import("@medusajs/framework/workflows-sdk").WorkflowData<string[]>) & string[];
}, []>;
export default deleteDigitalProductMediasWorkflow;
