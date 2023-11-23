import { validate } from "../validation/validation.js";
import { ResponseError } from "../error/response-error.js";
import { createMenuValidation, updateMenuValidation } from "../validation/menu-validation.js"
import { PrismaClient } from '@prisma/client'
import path from 'path';
import { unlink } from 'fs/promises';

const prisma = new PrismaClient()

const createMenu = async (request, file) => {
    const menu = validate(createMenuValidation, request);

    const countMenu = await prisma.menu.count({
        where: {
            name: menu.name
        }
    });

    if (countMenu === 1) {
        throw new ResponseError(400, "Menu already exists");
    }

    menu.image = file.filename;

    return await prisma.menu.create({
        data: menu,
        select: {
            id: true,
            name: true,
            description: true,
            price: true,
            stok: true,
            category: true,
            image: true
        }
    });
}


const deleteMenu = async (menuId) => {
    const menuDatabase = await prisma.menu.findUnique({
        where: {
            id: parseInt(menuId)
        }
    });

    if (!menuDatabase) {
        throw new ResponseError(404, "menu is not found");
    }

    return await prisma.menu.delete({
        where: {
            id: parseInt(menuId)
        }
    })
}

const menus = async () => {

    const menu = await prisma.menu.findMany();
    if (menu.length === 0) {
        throw new ResponseError(404, "Menu is not found");
    }
    return menu;
}

const updateMenu = async (menuId, data, file) => {
    const menuDatabase = await prisma.menu.findUnique({
        where: {
            id: parseInt(menuId)
        }
    });

    if (!menuDatabase) {
        throw new ResponseError(404, "Menu is not found");
    }



    const updatedMenu = validate(updateMenuValidation, { ...menuDatabase, ...data });

    if (file) {
        updatedMenu.image = file.filename;
    }

    return await prisma.menu.update({
        where: {
            id: parseInt(menuId)
        },
        data: updatedMenu,
        select: {
            id: true,
            name: true,
            description: true,
            price: true,
            stok: true,
            category: true,
            image: true
        }
    });
};

const menu = async (menuId) => {
    const menu = await prisma.menu.findUnique({
        where: {
            id: menuId
        }
    });

    if (!menu) {
        throw new ResponseError(404, "menu is not found");
    }

    return menu;
}

const cariMenu = async (query) => {
    const search = await prisma.menu.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: query
                    }
                },
                {
                    category: {
                        contains: query
                    }
                },
            ]
        }
    });

    if (search.length === 0) {
        throw new ResponseError(404, "Menu is not found for the given query");
    }
    return search;
}

export default {
    createMenu,
    deleteMenu,
    menus,
    updateMenu,
    menu,
    cariMenu

}