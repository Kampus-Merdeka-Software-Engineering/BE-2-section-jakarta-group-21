import menuService from "../service/menu-service.js";

const createMenu = async (req, res, next) => {
    try {
        const imgbbImage = await menuService.uploadImageToImgBB(req.file);
        const result = await menuService.createMenu(req.body, imgbbImage);
        res.status(201).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const deleteMenu = async (req, res, next) => {
    try {
        const menuId = req.params.menuId;
        await menuService.deleteMenu(menuId);
        res.status(200).json({
            data: "Delete Success"
        })
    } catch (error) {
        next(error)
    }
}

const menus = async (req, res, next) => {
    try {
        const result = await menuService.menus();
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const updateMenu = async (req, res, next) => {
    try {
        const menuId = req.params.menuId;
        const imgbbImage = await menuService.uploadImageToImgBB(req.file);
        const result = await menuService.updateMenu(menuId, req.body, imgbbImage);
        res.status(201).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const menu = async (req, res, next) => {
    try {
        const menuId = parseInt(req.params.menuId);
        const result = await menuService.menu(menuId);
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const cari = async (req, res, next) => {
    try {
        const { q } = req.query;
        const result = await menuService.cariMenu(q);
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export default {
    createMenu,
    deleteMenu,
    menus,
    updateMenu,
    menu,
    cari
}