import * as Joi from "joi"

export const joiValidationSchema = Joi.object({
    MONGODBURL: Joi.required(),
    PORT: Joi.number().default(3002)
})