"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@medusajs/framework/http");
const validation_schemas_1 = require("./validation-schemas");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
exports.default = (0, http_1.defineMiddlewares)({
    routes: [
        {
            matcher: "/admin/digital-products",
            method: "POST",
            middlewares: [
                (0, http_1.validateAndTransformBody)(validation_schemas_1.createDigitalProductsSchema),
            ],
        },
        {
            matcher: "/admin/digital-products/:id/medias",
            method: "POST",
            middlewares: [
                (0, http_1.validateAndTransformBody)(validation_schemas_1.addDigitalProductMediasSchema),
            ],
        },
        {
            matcher: "/admin/digital-products/:id/medias",
            method: "DELETE",
            middlewares: [
                (0, http_1.validateAndTransformBody)(validation_schemas_1.deleteDigitalProductMediasSchema),
            ],
        },
        {
            matcher: "/admin/digital-products/upload**",
            method: "POST",
            middlewares: [
                upload.array("files"),
            ]
        },
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbURBR2lDO0FBQ2pDLDZEQUFtSTtBQUNuSSxvREFBMkI7QUFFM0IsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLGdCQUFNLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0FBRTFELGtCQUFlLElBQUEsd0JBQWlCLEVBQUM7SUFDL0IsTUFBTSxFQUFFO1FBQ047WUFDRSxPQUFPLEVBQUUseUJBQXlCO1lBQ2xDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsV0FBVyxFQUFFO2dCQUNYLElBQUEsK0JBQXdCLEVBQUMsZ0RBQTJCLENBQUM7YUFDdEQ7U0FDRjtRQUNEO1lBQ0UsT0FBTyxFQUFFLG9DQUFvQztZQUM3QyxNQUFNLEVBQUUsTUFBTTtZQUNkLFdBQVcsRUFBRTtnQkFDWCxJQUFBLCtCQUF3QixFQUFDLGtEQUE2QixDQUFDO2FBQ3hEO1NBQ0Y7UUFDRDtZQUNFLE9BQU8sRUFBRSxvQ0FBb0M7WUFDN0MsTUFBTSxFQUFFLFFBQVE7WUFDaEIsV0FBVyxFQUFFO2dCQUNYLElBQUEsK0JBQXdCLEVBQUMscURBQWdDLENBQUM7YUFDM0Q7U0FDRjtRQUNEO1lBQ0UsT0FBTyxFQUFFLGtDQUFrQztZQUMzQyxNQUFNLEVBQUUsTUFBTTtZQUNkLFdBQVcsRUFBRTtnQkFDWCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUN0QjtTQUNGO0tBRUY7Q0FDRixDQUFDLENBQUEifQ==