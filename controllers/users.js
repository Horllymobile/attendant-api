const bcrypt = require('bcrypt');
const { Users } = require('./../models/users.model');
const { validateUser } = require('./../configs/validators');

const saltRound = 10;


const addUser = async (req, res) => {
    const user  = req.body;

    
     
    validateUser(user)
    .then(async () => {
        const password = await bcrypt.hash(user.password, saltRound);
        const userObject = {
            name: user.name,
            email: user.email,
            date_registerd: user.date_registerd,
            phone_number: user.phone_number,
            password: password
        }
        const newUser = new Users(userObject);
        newUser.save()
        res.status(200).json(newUser);
    }).catch((error) => {
        res.status(400).json({message: error.message});
    })

}


const getAllUsers = async (req, res) => {
    const users = await Users.find();
    return res.json(users);
}


module.exports = {
    getAllUsers,
    addUser
}