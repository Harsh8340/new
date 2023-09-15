import { nanoid } from 'nanoid';
const {nanoid} = require("nanoid");
const User = require("./Modal/User");
    const register = async ( _,firstName, lastName, email, password ) => {
    if (!firstName || !lastName || !email || !password) {
        return "All fields are required";
    }
try {
    const user = new User({
        id:nanoid(),
        firstName,
        lastName,
        email,
        password,
    });
    await user.save();
    return "User registered!";
}   catch (error) {
    return "Error occurred!";
}
};
module.exports = {
    Query:{},
    Mutation:{
        register,
    }
};
