"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const digital_product_1 = require("../../../modules/digital-product");
const deleteDigitalProductMedias = (0, workflows_sdk_1.createStep)("delete-digital-product-medias", async ({ digital_product_id, medias }, { container }) => {
    const digitalProductModuleService = container.resolve(digital_product_1.DIGITAL_PRODUCT_MODULE);
    const digitalProduct = await digitalProductModuleService.retrieveDigitalProduct(digital_product_id);
    await digitalProductModuleService.softDeleteDigitalProductMedias(medias);
    // await digitalProductModuleService.updateDigitalProducts(    {id: digital_product_id, medias :  [... digitalProduct.medias.map(m=> m.id).filter(mid => !medias.includes(mid)) ] })
    return new workflows_sdk_1.StepResponse({
        deleted_medias: medias
    }, {
        deleted_medias: medias
    });
}, async ({ deleted_medias }, { container }) => {
    const digitalProductModuleService = container.resolve(digital_product_1.DIGITAL_PRODUCT_MODULE);
    await digitalProductModuleService.restoreDigitalProductMedias(deleted_medias);
});
exports.default = deleteDigitalProductMedias;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLWRpZ2l0YWwtcHJvZHVjdC1tZWRpYXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2RlbGV0ZS1kaWdpdGFsLXByb2R1Y3QtbWVkaWFzIGNvcHkvc3RlcHMvZGVsZXRlLWRpZ2l0YWwtcHJvZHVjdC1tZWRpYXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxRUFHMEM7QUFFMUMsc0VBQXlFO0FBT3pFLE1BQU0sMEJBQTBCLEdBQUcsSUFBQSwwQkFBVSxFQUMzQywrQkFBK0IsRUFDL0IsS0FBSyxFQUFFLEVBQUksa0JBQWtCLEVBQUUsTUFBTSxFQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ25FLE1BQU0sMkJBQTJCLEdBQy9CLFNBQVMsQ0FBQyxPQUFPLENBQUMsd0NBQXNCLENBQUMsQ0FBQTtJQUd6QyxNQUFNLGNBQWMsR0FBRyxNQUFNLDJCQUEyQixDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFFLENBQUE7SUFFcEcsTUFBTSwyQkFBMkIsQ0FBQyw4QkFBOEIsQ0FDOUQsTUFBTSxDQUNQLENBQUE7SUFFRixvTEFBb0w7SUFHckwsT0FBTyxJQUFJLDRCQUFZLENBQUM7UUFDdEIsY0FBYyxFQUFFLE1BQU07S0FDdkIsRUFBRTtRQUNELGNBQWMsRUFBRSxNQUFNO0tBQ3ZCLENBQUMsQ0FBQTtBQUNKLENBQUMsRUFDRCxLQUFLLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDMUMsTUFBTSwyQkFBMkIsR0FDL0IsU0FBUyxDQUFDLE9BQU8sQ0FBQyx3Q0FBc0IsQ0FBQyxDQUFBO0lBRTNDLE1BQU0sMkJBQTJCLENBQUMsMkJBQTJCLENBQUMsY0FBYyxDQUFFLENBQUE7QUFDaEYsQ0FBQyxDQUNGLENBQUE7QUFFRCxrQkFBZSwwQkFBMEIsQ0FBQSJ9