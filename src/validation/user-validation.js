import Joi from "joi";

const registerUserValidation = Joi.object({
    email: Joi.string().max(100).required().email(),
    password: Joi.string().min(8).max(100).required(),
    confirm_pass: Joi.string().min(8).valid(Joi.ref('password')).required().strict(),
    name: Joi.string().max(100).required(),
    no_telp: Joi.string().max(100).required()
});

const loginUserValidation = Joi.object({
    email: Joi.string().max(100).required().email(),
    password: Joi.string().max(100).required()
});

const getUserValidation = Joi.string().max(100).required();

export {
    registerUserValidation,
    loginUserValidation,
    getUserValidation
}
