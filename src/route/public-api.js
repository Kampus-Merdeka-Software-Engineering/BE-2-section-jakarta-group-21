import express from "express";
import userController from "../controller/user-controller.js";

const publicRouter = new express.Router();
publicRouter.post('/api/register', userController.register);
publicRouter.post('/api/login', userController.login);

publicRouter.get('/api/testimoni', testimoniController.testimoni);

publicRouter.get('/api/menu', menuController.menus);
publicRouter.get('/api/menu/:menuId', menuController.menu);
publicRouter.get('/api/cari', menuController.cari);

export {
    publicRouter
}
