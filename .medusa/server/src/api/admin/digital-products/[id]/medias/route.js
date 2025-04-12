"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.POST = void 0;
const add_digital_product_medias_1 = __importDefault(require("src/workflows/add-digital-product-medias"));
const delete_digital_product_medias_copy_1 = __importDefault(require("src/workflows/delete-digital-product-medias copy"));
const POST = async (req, res) => {
    console.log(req.validatedBody.medias);
    const { result: { digital_product_medias }, } = await (0, add_digital_product_medias_1.default)(req.scope).run({
        input: {
            digital_product_id: req.params.id,
            medias: req.validatedBody.medias,
        },
    });
    res.json({
        digital_product_medias,
    });
};
exports.POST = POST;
const DELETE = async (req, res) => {
    const { id } = req.params;
    const { result: { deleted_medias }, } = await (0, delete_digital_product_medias_copy_1.default)(req.scope).run({ input: {
            digital_product_id: id,
            medias: req.validatedBody.medias,
        }
    });
    res.json({
        deleted_medias,
    });
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2RpZ2l0YWwtcHJvZHVjdHMvW2lkXS9tZWRpYXMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0EsMEdBQXVGO0FBRXZGLDBIQUFrRztBQVEzRixNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQXFELEVBQ3JELEdBQW1CLEVBQ25CLEVBQUU7SUFFRixPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDdEMsTUFBTSxFQUNKLE1BQU0sRUFBRSxFQUFFLHNCQUFzQixFQUFFLEdBQ25DLEdBQUcsTUFBTSxJQUFBLG9DQUErQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDdkQsS0FBSyxFQUFFO1lBQ0wsa0JBQWtCLEVBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ25DLE1BQU0sRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQXVFO1NBQzdGO0tBQ1AsQ0FBQyxDQUFDO0lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLHNCQUFzQjtLQUN2QixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFqQlcsUUFBQSxJQUFJLFFBaUJmO0FBS0ssTUFBTSxNQUFNLEdBQUcsS0FBSyxFQUN6QixHQUF3RCxFQUN4RCxHQUFtQixFQUNuQixFQUFFO0lBRUYsTUFBTSxFQUFDLEVBQUUsRUFBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUE7SUFFdkIsTUFBTSxFQUNKLE1BQU0sRUFBRSxFQUFFLGNBQWMsRUFBRSxHQUMzQixHQUFHLE1BQU0sSUFBQSw0Q0FBa0MsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUssS0FBSyxFQUFFO1lBQ3BFLGtCQUFrQixFQUFFLEVBQUU7WUFDdEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTTtTQUVqQztLQUNGLENBQUMsQ0FBQTtJQUdGLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxjQUFjO0tBQ2YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBcEJXLFFBQUEsTUFBTSxVQW9CakIifQ==