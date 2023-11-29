import express from "express";
import userController from "../controller/user-controller.js";
import menuController from "../controller/menu-controller.js";
import testimoniController from "../controller/testimoni-controller.js";

const publicRouter = new express.Router();
publicRouter.post('/api-public/register', userController.register);
publicRouter.post('/api-public/login', userController.login);

publicRouter.get('/api-public/testimoni', testimoniController.testimoni);

publicRouter.get('/api-public/menu', menuController.menus);
publicRouter.get('/api-public/menu/:menuId', menuController.menu);
publicRouter.get('/api-public/cari', menuController.cari);

export {
    publicRouter
}
