"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fulfillDigitalOrderWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const send_digital_order_notification_1 = require("./steps/send-digital-order-notification");
exports.fulfillDigitalOrderWorkflow = (0, workflows_sdk_1.createWorkflow)("fulfill-digital-order", ({ id }) => {
    const { data: digitalProductOrders } = (0, core_flows_1.useQueryGraphStep)({
        entity: "digital_product_order",
        fields: [
            "*",
            "products.*",
            "products.medias.*",
            "order.*"
        ],
        filters: {
            id,
        },
        options: {
            throwIfKeyNotFound: true
        }
    });
    (0, send_digital_order_notification_1.sendDigitalOrderNotificationStep)({
        digital_product_order: digitalProductOrders[0]
    });
    return new workflows_sdk_1.WorkflowResponse(digitalProductOrders[0]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2Z1bGZpbGwtZGlnaXRhbC1vcmRlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFHMEM7QUFDMUMsNERBRW9DO0FBQ3BDLDZGQUEwRjtBQU03RSxRQUFBLDJCQUEyQixHQUFHLElBQUEsOEJBQWMsRUFDdkQsdUJBQXVCLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQW9DLEVBQUUsRUFBRTtJQUMzQyxNQUFNLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsSUFBQSw4QkFBaUIsRUFBQztRQUN2RCxNQUFNLEVBQUUsdUJBQXVCO1FBQy9CLE1BQU0sRUFBRTtZQUNOLEdBQUc7WUFDSCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFNBQVM7U0FDVjtRQUNELE9BQU8sRUFBRTtZQUNQLEVBQUU7U0FDSDtRQUNELE9BQU8sRUFBRTtZQUNQLGtCQUFrQixFQUFFLElBQUk7U0FDekI7S0FDRixDQUFDLENBQUE7SUFFRixJQUFBLGtFQUFnQyxFQUFDO1FBQy9CLHFCQUFxQixFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQztLQUMvQyxDQUFDLENBQUE7SUFFRixPQUFPLElBQUksZ0NBQWdCLENBQ3pCLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUN4QixDQUFBO0FBQ0gsQ0FBQyxDQUNGLENBQUEifQ==