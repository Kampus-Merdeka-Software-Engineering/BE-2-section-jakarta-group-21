import { validate } from '../validation/validation.js'
import { createValidationTestimoni, updateValidationTestimoni } from '../validation/testimoni-validation.js'
import { ResponseError } from '../error/response-error.js'
import { PrismaClient } from '@prisma/client'
import path from "path"
import { unlink } from 'fs/promises'
import axios from 'axios'
import { env } from "process";

const prisma = new PrismaClient();

const uploadImageToImgBB = async (file) => {
    const imgbbApiKey = '67451670967551642fdc92c6963422fc';
    // const imgbbApiKey = process.env.IMGBB_API_KEY;

    const formData = new FormData();
    formData.append('image', file.buffer.toString('base64'));

    return await axios.post('https://api.imgbb.com/1/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        params: {
            key: imgbbApiKey
        }
    });
}
const createTestimoni = async (request, file) => {
    const testimoni = validate(createValidationTestimoni, request);

    // ini buat upload di local jangan di hapus
    // testimoni.image = file.filename;

    testimoni.image = file.data.data.url;

    return await prisma.testimoni.create({
        data: testimoni,
        select: {
            id: true,
            name: true,
            description: true,
            image: true,
            rating: true,
        }
    });
}

const testimoni = async () => {
    const get = await prisma.testimoni.findMany();
    if (get.length === 0) {
        throw new ResponseError(404, "Testimoni is not found");
    }
    return get;
}

const deleteTestimoni = async (testimoniId) => {
    const testimoni = await prisma.testimoni.findUnique({
        where: {
            id: testimoniId
        }
    });

    if (!testimoni) {
        throw new ResponseError(404, "Testimoni is not found");
    }

    // Ini untuk hapus file di local jangan di hapus
    // if (testimoni) {
    //     const oldImage = path.join("uploads/testimoni", testimoni.image);
    //     await unlink(oldImage);
    // }

    return await prisma.testimoni.delete({
        where: {
            id: testimoniId
        }
    })
}

const updateTestimoni = async (request, testimoniId, file) => {
    const testimoniDatabase = await prisma.testimoni.findUnique({
        where: {
            id: parseInt(testimoniId)
        }
    });

    if (!testimoniDatabase) {
        throw new ResponseError(404, "Testimoni is not found");
    }

    // Ini untuk hapus file di local jika sudah update jangan di hapus

    // if (testimoniDatabase) {
    //     const oldImage = path.join("uploads/testimoni", testimoniDatabase.image);
    //     await unlink(oldImage);
    // }

    const update = validate(updateValidationTestimoni, { ...testimoniDatabase, ...request });

    if (file) {
        // update.image = file.filename;
        update.image = file.data.data.url;
    }

    return await prisma.testimoni.update({
        where: {
            id: parseInt(testimoniId)
        },
        data: update,
        select: {
            id: true,
            name: true,
            description: true,
            image: true,
            rating: true,
        }

    })
}

export default {
    createTestimoni,
    testimoni,
    deleteTestimoni,
    updateTestimoni,
    uploadImageToImgBB
}