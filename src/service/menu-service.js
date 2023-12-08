import { validate } from "../validation/validation.js";
import { ResponseError } from "../error/response-error.js";
import { createMenuValidation, updateMenuValidation } from "../validation/menu-validation.js"
import { PrismaClient } from '@prisma/client'
import path from 'path';
import { unlink } from 'fs/promises';
import axios from 'axios';
import dotenv from "dotenv/config";

const prisma = new PrismaClient()


const uploadImageToImgBB = async (file) => {

    const imgbbApiKey = '67451670967551642fdc92c6963422fc';
    // const imgbbApiKey = process.env.IMGBB_API_KEY;

    const formData = new FormData();
    formData.append('image', file.buffer.toString('base64'));

    return await axios.post('https://api.imgbb.com/1/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        params: {
            key: imgbbApiKey,
        },
    });
}



const createMenu = async (request, file) => {
    const menu = validate(createMenuValidation, request);

    const countMenu = await prisma.menu.count({
        where: {
            name: menu.name
        }
    });

    if (countMenu === 1) {
        throw new ResponseError(404, "Menu already exists");
    }

    // ini untuk upload di local jangan di hapus
    // menu.image = file.filename;

    menu.image = file.data.data.url;

    return await prisma.menu.create({
        data: menu,
        select: {
            id: true,
            name: true,
            description: true,
            price: true,
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

    // Ini untuk hapus file image di local jangan di hapus

    // if (menuDatabase) {
    //     const oldImage = path.join('uploads/menu/', menuDatabase.image);
    //     await unlink(oldImage);
    // }

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

    // ini untuk hapus file image di loccal jangan di hapus

    // if (menuDatabase) {
    //     const oldImage = path.join('uploads/menu/', menuDatabase.image);
    //     await unlink(oldImage);
    // }


    const updatedMenu = validate(updateMenuValidation, { ...menuDatabase, ...data });

    if (file) {
        // updatedMenu.image = file.filename;
        updatedMenu.image = file.data.data.url;
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
    cariMenu,
    uploadImageToImgBB

}