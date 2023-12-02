import express from "express";
import userController from "../controller/user-controller.js";
import menuController from "../controller/menu-controller.js";
import testimoniController from "../controller/testimoni-controller.js";
import { authentication } from "../middleware/auth-middleware.js";
import {
    // uploadMenu,
    // uploadTestimoni,
    uploadImage
} from "../middleware/upload-middleware.js";

// Ini untuk upload di local jika tidak menggunakan imgBB

// const uploadImageMenu = uploadMenu.single('image');
// const uploadImageTestimoni = uploadTestimoni.single('image');

const userRouter = new express.Router();
userRouter.use(authentication)

// User API
userRouter.get('/api/users/current', userController.getUser);
userRouter.delete('/api/users/logout', userController.logout);

// Menu API
userRouter.post('/api/menu', uploadImage, menuController.createMenu);
userRouter.delete('/api/menu/:menuId', menuController.deleteMenu);
userRouter.get('/api/menu', menuController.menus);
userRouter.put('/api/menu/:menuId', uploadImage, menuController.updateMenu);
userRouter.get('/api/menu/:menuId', menuController.menu);
userRouter.get('/api/cari', menuController.cari);

// Testimoni API
userRouter.post('/api/testimoni', uploadImage, testimoniController.createTestimoni);
userRouter.get('/api/testimoni', testimoniController.testimoni);
userRouter.delete('/api/testimoni/:testimoniId', testimoniController.testimoniDelete);
userRouter.put('/api/testimoni/:testimoniId', uploadImage, testimoniController.testimoniUpdate);

export {
    userRouter
}
