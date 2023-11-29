import Joi from "joi";

const createValidationTestimoni = Joi.object({
    name: Joi.string().max(100).required(),
    description: Joi.string().required(),
    image: Joi.string().max(100).required().optional(),
    rating: Joi.string().max(100).required(),
});

const updateValidationTestimoni = Joi.object({
    id: Joi.allow(),
    name: Joi.string().max(100).required(),
    description: Joi.string().required(),
    image: Joi.string().max(100).required().optional(),
    rating: Joi.string().max(100).required(),
});

export {
    createValidationTestimoni,
    updateValidationTestimoni
}