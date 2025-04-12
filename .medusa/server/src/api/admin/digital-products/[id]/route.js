"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const digital_product_1 = require("src/modules/digital-product");
const GET = async (req, res) => {
    const { id } = req.params;
    const service = req.scope.resolve(digital_product_1.DIGITAL_PRODUCT_MODULE);
    const product = await service.retrieveDigitalProduct(id, {
        relations: ["medias"]
    });
    console.log(product);
    res.json(product);
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2RpZ2l0YWwtcHJvZHVjdHMvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxpRUFBb0U7QUFHN0QsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBRUQsTUFBTSxFQUFDLEVBQUUsRUFBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUE7SUFDeEIsTUFBTSxPQUFPLEdBQWdDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFJLHdDQUFzQixDQUFFLENBQUE7SUFFMUYsTUFBTSxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUMsc0JBQXNCLENBQUMsRUFBRSxFQUFFO1FBQ3ZELFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztLQUN0QixDQUFDLENBQUE7SUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDbkIsQ0FBQyxDQUFBO0FBYlksUUFBQSxHQUFHLE9BYWYifQ==