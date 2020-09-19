const Joi = require('joi');


const validateUser = async (user) => {

    const Schema = Joi.object(
        {
            name: Joi.string().max(255).required(),
            email: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,16}$')).required(),
            date_registered: Joi.date().required(),
            phone_number: Joi.number(),
            password: Joi.string().required().min(8).max(16)
        }
    );

    try{
        const result = await Schema.validate(user);
        if(result){
            return true;
        }
    }catch(error){
        return error
    }    
};

module.exports = {
    validateUser,
}