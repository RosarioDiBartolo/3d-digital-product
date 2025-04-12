"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const create_digital_product_medias_1 = __importDefault(require("../create-digital-product/steps/create-digital-product-medias"));
const addDigitalProductMediasWorkflow = (0, workflows_sdk_1.createWorkflow)("add-digital-product-medias", ({ digital_product_id, medias }) => {
    const { digital_product_medias } = (0, create_digital_product_medias_1.default)({
        medias: (0, workflows_sdk_1.transform)(medias, data => data.map(m => ({ ...m, digital_product_id })))
    });
    return new workflows_sdk_1.WorkflowResponse({
        digital_product_medias,
    });
});
exports.default = addDigitalProductMediasWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2FkZC1kaWdpdGFsLXByb2R1Y3QtbWVkaWFzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHFFQUFnRztBQUNoRyxrSUFBOEk7QUFTOUksTUFBTSwrQkFBK0IsR0FBRyxJQUFBLDhCQUFjLEVBQ3BELDRCQUE0QixFQUM1QixDQUFDLEVBQUcsa0JBQWtCLEVBQUUsTUFBTSxFQUFnQixFQUFFLEVBQUU7SUFFaEQsTUFBTSxFQUFDLHNCQUFzQixFQUFDLEdBQUcsSUFBQSx1Q0FBOEIsRUFBQztRQUM1RCxNQUFNLEVBQUcsSUFBQSx5QkFBUyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLEVBQUUsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDLENBQUM7S0FDakYsQ0FBQyxDQUFBO0lBRUYsT0FBTyxJQUFJLGdDQUFnQixDQUFDO1FBQ3hCLHNCQUFzQjtLQUV6QixDQUFDLENBQUE7QUFDSixDQUFDLENBQ0YsQ0FBQTtBQUVELGtCQUFlLCtCQUErQixDQUFBIn0=