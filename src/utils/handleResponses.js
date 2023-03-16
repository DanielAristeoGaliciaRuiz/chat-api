

//? Para respuestas exitosas
const success = ({status, data, message, res}) => {
    res.status(status).json({
        error: false,
        status: status,
        message: message,
        data: data
    })
} 



//? Para respuestas de errores
const error = ({status, data, message, res, fields}) => {
    res.status(status).json({
        error: true,
        status: status,
        message: message,
        fields: fields,
        data
    })
}

module.exports = {
    success,
    error
}

