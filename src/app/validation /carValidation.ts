import Joi from 'joi';

export const carSchema = Joi.object({
    brand: Joi.string().required()
        .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/)
        .min(1)
        .max(20)
        .messages({
            'string.pattern.base': 'Brand must contain only letters (Latin or Cyrillic) and be 1-20 characters long',
            'string.empty': 'Brand is required',
            'string.min': 'Brand must be at least 1 character long',
            'string.max': 'Brand must be at most 20 characters long'
        }),
    price: Joi.number().required()
        .integer()
        .min(0)
        .max(1000000)
        .messages({
            'number.base': 'Price must be a number',
            'number.integer': 'Price must be an integer',
            'number.min': 'Price must be at least 0',
            'number.max': 'Price must be at most 1000000',
            'any.required': 'Price is required'
        }),
    year: Joi.number().required()
        .integer()
        .min(1990)
        .max(2025)
        .messages({
            'number.base': 'Year must be a number',
            'number.integer': 'Year must be an integer',
            'number.min': 'Year must be at least 1990',
            'number.max': 'Year must be at most 2025',
            'any.required': 'Year is required'
        })
})