import User from "../model/userModel.js";


//registering a user - Creating a user
const registerUser = async (req, res) => {

    const { name, email, username, age, password } = req.body;

    const existingUser = await User.findOne({$or: [{email}, {username}]})
    if (existingUser) {
        return res.status(400).json({msg: 'username or email already exists'})
    }

    try {
        const newUser = new User ({ name, email, username, age, password });

        await newUser.save();

        res.status(200).json({msg: 'Registration successful'})

    } catch (error) {
        console.log({error: 'User could not be registered'})
    }
    
}


// login user with existing email - Getting a single user
// const loginUser = async (req, res) => {

//     const { username, email, password } = req.body;

//     try {

//         const user = await User.findOne({$or: [{email}, {username}]})  

//         if (user) {
//             res.status(200).send(user)
//         } 

//     } catch (error) {
//         res.status(404).json({msg: 'User not found'})
//     }
// }


const loginUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById({$where: { id }})

        if (user) {
            res.status(200).send({message: 'Login was successful'})
        }

    } catch (error) {
        console.log(error)
    }
}


// fetch all users
const allUsers = async (req, res) => {

    try {
        const fetchUsers = await User.find()

        res.status(200).send(fetchUsers)

    } catch (error) {
        console.log(error)
    }
}



export default {
    registerUser,
    loginUser,
    allUsers
};