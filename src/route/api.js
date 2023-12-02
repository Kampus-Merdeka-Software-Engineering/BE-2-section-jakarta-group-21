import express from "express";
import userController from "../controller/user-controller.js";
import menuController from "../controller/menu-controller.js";
import testimoniController from "../controller/testimoni-controller.js";
import { authentication } from "../middleware/auth-middleware.js";
import {
    uploadMenu,
    uploadTestimoni,
} from "../middleware/upload-middleware.js";

// Ini untuk local jika tidak menggunakan imgBB
// const uploadImageMenu = uploadMenu.single('image');
const uploadImageTestimoni = uploadTestimoni.single('image');

const userRouter = new express.Router();
userRouter.use(authentication)

// User API
userRouter.get('/api/users/current', userController.getUser);
userRouter.delete('/api/users/logout', userController.logout);

// Menu API
userRouter.post('/api/menu', uploadMenu, menuController.createMenu);
userRouter.delete('/api/menu/:menuId', menuController.deleteMenu);
userRouter.get('/api/menu', menuController.menus);
// userRouter.put('/api/menu/:menuId', uploadImageMenu, menuController.updateMenu);
userRouter.get('/api/menu/:menuId', menuController.menu);
userRouter.get('/api/cari', menuController.cari);

// Testimoni API
userRouter.post('/api/testimoni', uploadImageTestimoni, testimoniController.createTestimoni);
userRouter.get('/api/testimoni', testimoniController.testimoni);
userRouter.delete('/api/testimoni/:testimoniId', testimoniController.testimoniDelete);
userRouter.put('/api/testimoni/:testimoniId', uploadImageTestimoni, testimoniController.testimoniUpdate);

export {
    userRouter
}
