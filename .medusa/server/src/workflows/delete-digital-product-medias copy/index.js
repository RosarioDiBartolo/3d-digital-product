"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const delete_digital_product_medias_1 = __importDefault(require("./steps/delete-digital-product-medias"));
const deleteDigitalProductMediasWorkflow = (0, workflows_sdk_1.createWorkflow)("delete-digital-product-medias", ({ medias, digital_product_id }) => {
    const { deleted_medias } = (0, delete_digital_product_medias_1.default)({
        medias,
        digital_product_id
    });
    return new workflows_sdk_1.WorkflowResponse({
        deleted_medias
    });
});
exports.default = deleteDigitalProductMediasWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2RlbGV0ZS1kaWdpdGFsLXByb2R1Y3QtbWVkaWFzIGNvcHkvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUVBTTBDO0FBRzFDLDBHQUE4RTtBQUs5RSxNQUFNLGtDQUFrQyxHQUFHLElBQUEsOEJBQWMsRUFDdkQsK0JBQStCLEVBQy9CLENBQUMsRUFBQyxNQUFNLEVBQUcsa0JBQWtCLEVBQWdCLEVBQUUsRUFBRTtJQUUvQyxNQUFNLEVBQUMsY0FBYyxFQUFDLEdBQUcsSUFBQSx1Q0FBMEIsRUFBQztRQUNoRCxNQUFNO1FBQ04sa0JBQWtCO0tBQ3JCLENBQUMsQ0FBQTtJQUdGLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQztRQUN2QixjQUFjO0tBQ2xCLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FDRixDQUFBO0FBRUQsa0JBQWUsa0NBQWtDLENBQUEifQ==