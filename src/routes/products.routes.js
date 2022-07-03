import { Router } from "express";
const router = Router();
import { authJwt } from "../middlewares";
import * as productsController from '../controllers/products.controller'

router.post('/',[authJwt.verifyToken, authJwt.isModerator], productsController.createProduct);

router.get('/', productsController.getProducts);

router.get('/:productId', productsController.getProductById);

router.put('/:productId',[authJwt.verifyToken, authJwt.isAdmin], productsController.updateProduct);

router.delete('/:productId',[authJwt.verifyToken, authJwt.isAdmin], productsController.deleteProduct);

export default router;