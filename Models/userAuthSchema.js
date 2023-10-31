
const mongoose = require('mongoose');
const userAuthSchema = new mongoose.Schema(
    {
        'emailId': {
            type: String,
            required: true
        },
        'password': {
            type: String,
            required: true
        },
        'userName': {
            type: String,
            required: true
        },
        'contact':{
        type: String,
            required: true
        }
    }
)

const AuthUser = mongoose.model('AuthUser',userAuthSchema);
module.exports = AuthUser;
