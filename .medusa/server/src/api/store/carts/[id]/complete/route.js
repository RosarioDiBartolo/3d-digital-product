"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const create_digital_product_order_1 = __importDefault(require("../../../../../workflows/create-digital-product-order"));
const POST = async (req, res) => {
    const { result } = await (0, create_digital_product_order_1.default)(req.scope)
        .run({
        input: {
            cart_id: req.params.id
        }
    });
    res.json({
        type: "order",
        ...result
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2NhcnRzL1tpZF0vY29tcGxldGUvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseUhBQXNHO0FBRS9GLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUEsc0NBQWlDLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUNsRSxHQUFHLENBQUM7UUFDSCxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ3ZCO0tBQ0YsQ0FBQyxDQUFBO0lBRUosR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLElBQUksRUFBRSxPQUFPO1FBQ2IsR0FBRyxNQUFNO0tBQ1YsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBZlksUUFBQSxJQUFJLFFBZWhCIn0=