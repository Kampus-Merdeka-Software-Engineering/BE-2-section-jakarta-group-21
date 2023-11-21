import menuService from "../service/menu-service.js";

const createMenu = async (req, res, next) => {
    try {
        const result = await menuService.createMenu(req.body, req.file);
        res.status(200).json({
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
            data: "OK"
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
        const result = await menuService.updateMenu(menuId, req.body, req.file);
        res.status(200).json({
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

export default {
    createMenu,
    deleteMenu,
    menus,
    updateMenu,
    menu
}