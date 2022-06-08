const User = require('../models/user.model');

//Insert User
const createUser = async ({fullname,age,grade}) =>{

    const user = {
        fullname,
        age,
        grade
    }

    const result = await User.create(user);
    return result;

}

//Get All Users
const getAllUsers = async () =>{

    const result = await User.find();
    return result;

}

//Get single User
const getUser = async (id) =>{

    const result = await User.findById(id);
    return result;

}

//Update User
const updateUser = async (id,{fullname,age,grade}) =>{

    const user = {
        fullname,age,grade
    }

    const result = await User.findByIdAndUpdate(id,user);
    return result;

}

//Delete User
const deleteUser = async (id) =>{

    const result = await User.findByIdAndDelete(id);
    return result;   

}

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}