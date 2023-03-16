const conversationControllers = require('./conversations.controllers')
const responses = require('../utils/handleResponses')

const getAllConversationsByUser = (req,res) => {
    const userId = req.user.id

    conversationControllers.findAllConversationsByUser(userId)
    .then(data => {
        responses.success({
            res,
            status:200,
            message: data.length? 'Showing all yout conversations': 'No conversations .'
        })
    })
    .catch(err => {
        responses.error({
            res,
            status:400,
            message: 'Something bad',
            data:err
        })
    })
}

const postNeweConversation = (req,res)=>{
    const ownerId = req.user.id
    const {guestId, ...conversationObj} = req.body

    conversationControllers.createConversation(conversationObj,ownerId, guestId)
    .then(data =>{
        responses.success({
            res,
            status:201,
            message:'Conversation created succesfully',
            data
        })
    })
    .catch(err =>{
        responses.error({
            res,
            status: 400,
            message: err.message || 'Something bad',
            data: err,
            fields: {
                name: 'String',
                profileImage: 'String',
                isGroup: 'boolean',
                guestId: 'String UUID'
            }
        })
    })
}

module.exports = {
    getAllConversationsByUser,
    postNeweConversation
}