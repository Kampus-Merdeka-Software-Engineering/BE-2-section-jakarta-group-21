import Joi from "joi";

const createMenuValidation = Joi.object({
    name: Joi.string().max(100).required(),
    description: Joi.string().optional(),
    price: Joi.string().max(100).required(),
    stok: Joi.string().max(100).optional(),
    image: Joi.string().max(100).required().optional(),
    category: Joi.string().max(100).required(),
});

const updateMenuValidation = Joi.object({
    id: Joi.allow(),
    name: Joi.string().max(100).optional(),
    description: Joi.string().optional(),
    price: Joi.string().max(100).optional(),
    stok: Joi.string().max(100).optional(),
    image: Joi.string().max(100).optional(),
    category: Joi.string().max(100).optional(),
});


export {
    createMenuValidation,
    updateMenuValidation
}