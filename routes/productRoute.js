import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";

import formidable from "express-formidable";

const router = express.Router();

// routes
// CREATE PRODUCT
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// GET PRODUCTS
router.get("/get-product", getProductController);

// GET SINGLE PRODUCT
router.get("/get-product/:slug", getSingleProductController);

// PHOTO
router.get("/product-photo/:pid", productPhotoController);

// DELETE
router.delete("/delete-product/:pid", deleteProductController);

// UPDATE PRODUCT
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
  );

// filter product
router.post("/product-filters", productFiltersController)

// PRODUCT COUNT
router.get("/product-count", productCountController)

// PRODUCT PER PAGE
router.get("/product-list/:page", productListController)

// SEARCH PRODUCT
router.get("/search/:keyword", searchProductController)

// SIMILAR PRODUCT
router.get("/related-product/:pid/:cid", relatedProductController)

// category wise product
router.get('/product-category/:slug', productCategoryController)

// payments route
// token
router.get('/braintree/token', braintreeTokenController)

// payments
router.post('/braintree/payment', requireSignIn, brainTreePaymentController)

export default router;
