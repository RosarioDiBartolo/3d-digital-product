"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const create_digital_product_order_1 = __importDefault(require("./steps/create-digital-product-order"));
const digital_product_1 = require("../../modules/digital-product");
const createDigitalProductOrderWorkflow = (0, workflows_sdk_1.createWorkflow)("create-digital-product-order", (input) => {
    const { id } = core_flows_1.completeCartWorkflow.runAsStep({
        input: {
            id: input.cart_id
        }
    });
    const { data: orders } = (0, core_flows_1.useQueryGraphStep)({
        entity: "order",
        fields: [
            "*",
            "items.*",
            "items.variant.*",
            "items.variant.digital_product.*"
        ],
        filters: {
            id
        },
        options: {
            throwIfKeyNotFound: true
        }
    });
    const itemsWithDigitalProducts = (0, workflows_sdk_1.transform)({
        orders
    }, (data) => {
        return data.orders[0].items.filter((item) => item.variant.digital_product !== undefined);
    });
    const digital_product_order = (0, workflows_sdk_1.when)("create-digital-product-order-condition", itemsWithDigitalProducts, (itemsWithDigitalProducts) => {
        return itemsWithDigitalProducts.length;
    })
        .then(() => {
        const { digital_product_order, } = (0, create_digital_product_order_1.default)({
            items: orders[0].items
        });
        (0, core_flows_1.createRemoteLinkStep)([{
                [digital_product_1.DIGITAL_PRODUCT_MODULE]: {
                    digital_product_order_id: digital_product_order.id
                },
                [utils_1.Modules.ORDER]: {
                    order_id: id
                }
            }]);
        core_flows_1.createOrderFulfillmentWorkflow.runAsStep({
            input: {
                order_id: id,
                items: (0, workflows_sdk_1.transform)({
                    itemsWithDigitalProducts
                }, (data) => {
                    return data.itemsWithDigitalProducts.map((item) => ({
                        id: item.id,
                        quantity: item.quantity
                    }));
                })
            }
        });
        (0, core_flows_1.emitEventStep)({
            eventName: "digital_product_order.created",
            data: {
                id: digital_product_order.id
            }
        });
        return digital_product_order;
    });
    return new workflows_sdk_1.WorkflowResponse({
        order: orders[0],
        digital_product_order
    });
});
exports.default = createDigitalProductOrderWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1kaWdpdGFsLXByb2R1Y3Qtb3JkZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxRUFLMEM7QUFDMUMsNERBTW9DO0FBQ3BDLHFEQUVrQztBQUNsQyx3R0FBZ0Y7QUFDaEYsbUVBQXNFO0FBTXRFLE1BQU0saUNBQWlDLEdBQUcsSUFBQSw4QkFBYyxFQUN0RCw4QkFBOEIsRUFDOUIsQ0FBQyxLQUFvQixFQUFFLEVBQUU7SUFDdkIsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLGlDQUFvQixDQUFDLFNBQVMsQ0FBQztRQUM1QyxLQUFLLEVBQUU7WUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FDbEI7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUEsOEJBQWlCLEVBQUM7UUFDekMsTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUU7WUFDTixHQUFHO1lBQ0gsU0FBUztZQUNULGlCQUFpQjtZQUNqQixpQ0FBaUM7U0FDbEM7UUFDRCxPQUFPLEVBQUU7WUFDUCxFQUFFO1NBQ0g7UUFDRCxPQUFPLEVBQUU7WUFDUCxrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSx3QkFBd0IsR0FBRyxJQUFBLHlCQUFTLEVBQUM7UUFDekMsTUFBTTtLQUNQLEVBQ0QsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsS0FBSyxTQUFTLENBQUMsQ0FBQTtJQUMxRixDQUFDLENBQ0EsQ0FBQTtJQUVELE1BQU0scUJBQXFCLEdBQUcsSUFBQSxvQkFBSSxFQUFDLHdDQUF3QyxFQUFFLHdCQUF3QixFQUFFLENBQUMsd0JBQXdCLEVBQUUsRUFBRTtRQUNsSSxPQUFPLHdCQUF3QixDQUFDLE1BQU0sQ0FBQTtJQUN4QyxDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1QsTUFBTSxFQUNKLHFCQUFxQixHQUN0QixHQUFHLElBQUEsc0NBQTZCLEVBQUM7WUFDaEMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO1NBQ3ZCLENBQUMsQ0FBQTtRQUVGLElBQUEsaUNBQW9CLEVBQUMsQ0FBQztnQkFDcEIsQ0FBQyx3Q0FBc0IsQ0FBQyxFQUFFO29CQUN4Qix3QkFBd0IsRUFBRSxxQkFBcUIsQ0FBQyxFQUFFO2lCQUNuRDtnQkFDRCxDQUFDLGVBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDZixRQUFRLEVBQUUsRUFBRTtpQkFDYjthQUNGLENBQUMsQ0FBQyxDQUFBO1FBRUgsMkNBQThCLENBQUMsU0FBUyxDQUFDO1lBQ3ZDLEtBQUssRUFBRTtnQkFDTCxRQUFRLEVBQUUsRUFBRTtnQkFDWixLQUFLLEVBQUUsSUFBQSx5QkFBUyxFQUFDO29CQUNmLHdCQUF3QjtpQkFDekIsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO29CQUNWLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDbEQsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO3dCQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtxQkFDeEIsQ0FBQyxDQUFDLENBQUE7Z0JBQ0wsQ0FBQyxDQUFDO2FBQ0g7U0FDRixDQUFDLENBQUE7UUFFRixJQUFBLDBCQUFhLEVBQUM7WUFDWixTQUFTLEVBQUUsK0JBQStCO1lBQzFDLElBQUksRUFBRTtnQkFDSixFQUFFLEVBQUUscUJBQXFCLENBQUMsRUFBRTthQUM3QjtTQUNGLENBQUMsQ0FBQTtRQUVGLE9BQU8scUJBQXFCLENBQUE7SUFDOUIsQ0FBQyxDQUFDLENBQUE7SUFFRixPQUFPLElBQUksZ0NBQWdCLENBQUM7UUFDMUIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEIscUJBQXFCO0tBQ3RCLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FDRixDQUFBO0FBRUQsa0JBQWUsaUNBQWlDLENBQUEifQ==