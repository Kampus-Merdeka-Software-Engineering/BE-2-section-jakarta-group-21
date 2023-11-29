import { validate } from '../validation/validation.js'
import { createValidationTestimoni, updateValidationTestimoni } from '../validation/testimoni-validation.js'
import { ResponseError } from '../error/response-error.js'
import { PrismaClient } from '@prisma/client'
import path from "path"
import { unlink } from 'fs/promises'

const prisma = new PrismaClient();

const createTestimoni = async (request, file) => {
    const testimoni = validate(createValidationTestimoni, request);

    testimoni.image = file.filename;
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

    if (testimoni) {
        const oldImage = path.join("uploads/testimoni", testimoni.image);
        await unlink(oldImage);
    }

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

    if (testimoniDatabase) {
        const oldImage = path.join("uploads/testimoni", testimoniDatabase.image);
        await unlink(oldImage);
    }

    const update = validate(updateValidationTestimoni, { ...testimoniDatabase, ...request });

    if (file) {
        update.image = file.filename;
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
    updateTestimoni
}