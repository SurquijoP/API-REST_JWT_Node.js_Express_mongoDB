import {ROLS}  from '../models/role.model'
import User from '../models/user.model'

export const checkDuplicateUserOrEmail = async (req, res, next) =>{
    const user = await User.findOne({username: req.body.username})

    if (user) return res.status(400).json({message: "User already exists"})

    const email = await User.findOne({email: req.body.email})
    if (email) return res.status(400).json({message: "Email already exists"})

    next()
}

export const checkRoles = (req, res, next) => {
    if (req.body.roles){
        for (let i = 0; i < req.body.roles.length; i++) {
           if (!ROLS.includes(req.body.roles[i])) {
            return res.status(400).json({
                message: `Role ${req.body.roles} does not exist`
            })
        }
    }    
}
next()
}