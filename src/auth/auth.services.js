const checkUsersCredentials = require('./auth.controllers')
require('dotenv').config()
const response=require('../utils/handleResponses')
const jwt = require('jsonwebtoken')

const postLogin = (req,res) => {
    const {email, password} = req.body
    checkUsersCredentials(email,password)
    .then(data => {
        if(data){
            const token = jwt.sign({
                id:data.id,
                email:data.email,
                firstName:data.firstName
            },process.env.JWT_SECRET,{
                expiresIn:'1d'
            })

            response.success({
                res,
                status:200,
                message:'Correct Credentials',
                data:token
            })
        }else{
            response.error({
                res,
                status: 401,
                message: 'Invalid Credentials'
            })
        }
    })
    .catch(err => {
        response.error({
            res,
            status:400,
            data: err,
            message: 'Something Bad'
        })
    })
}

module.exports = postLogin