import { validate } from "../validation/validation.js";
import { v4 as uuid } from "uuid"
import {
    getUserValidation,
    loginUserValidation,
    registerUserValidation
} from "../validation/user-validation.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();


const register = async (request) => {
    const user = validate(registerUserValidation, request);

    const countUser = await prismaClient.user.count({
        where: {
            email: user.email
        }
    });

    if (countUser === 1) {
        throw new ResponseError(400, "Email already exists");
    }

    user.password = await bcrypt.hash(user.password, 10);

    return prismaClient.user.create({
        data: {
            email: user.email,
            name: user.name,
            password: user.password,
            no_telp: user.no_telp,
        },
        select: {
            email: true,
            name: true
        }
    });
}


const login = async (request) => {

    const loginRequest = validate(loginUserValidation, request);
    const user = await prismaClient.user.findFirst({
        where: {
            email: loginRequest.email
        },
        select: {
            id: true,
            email: true,
            password: true
        }
    });

    if (!user) {
        throw new ResponseError(401, "Email or password wrong");
    }

    const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);
    if (!isPasswordValid) {
        throw new ResponseError(401, "Email or password wrong");
    }

    const token = uuid().toString();
    return await prismaClient.user.update({
        where: {
            id: user.id
        },
        data: {
            token: token
        },
        select: {
            token: true
        }
    });
}


const getUser = async (email) => {
    email = validate(getUserValidation, email);

    const user = await prismaClient.user.findFirst({
        where: {
            email: email
        },
        select: {
            id: true,
            email: true,
            name: true,
            no_telp: true
        }
    });


    if (!user) {
        throw new ResponseError(404, "user is not found");
    }

    return user;
}


const logout = async (userId) => {
    const user = await prismaClient.user.findUnique({
        where: {
            id: userId
        }
    });

    if (!user) {
        throw new ResponseError(404, "User is not found");
    }

    return prismaClient.user.update({
        where: {
            id: userId
        },
        data: {
            token: null
        },
        select: {
            id: true,
            email: true
        }
    });
}




export default {
    register,
    login,
    getUser,
    logout
}
