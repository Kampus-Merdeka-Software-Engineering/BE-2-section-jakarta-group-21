import { validate } from '../validation/validation.js'
import { createValidationTestimoni } from '../validation/testimoni-validation.js'
import { ResponseError } from '../error/response-error.js'
import { PrismaClient } from '@prisma/client'

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

    return await prisma.testimoni.delete({
        where: {
            id: testimoniId
        }
    })


}

export default {
    createTestimoni,
    testimoni,
    deleteTestimoni
}