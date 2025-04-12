type StepInput = {
    digital_product_id: string;
    medias: string[];
};
declare const deleteDigitalProductMedias: import("@medusajs/framework/workflows-sdk").StepFunction<StepInput, {
    deleted_medias: string[];
}>;
export default deleteDigitalProductMedias;
