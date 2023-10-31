const express = require('express');
const AuthUser = require('../Models/userAuthSchema');
const router = express.Router();

router.post('/home', async (req, res) => {
    const { emailId, password, userName, contact } = req.body;
    const savedUser = new AuthUser({ emailId, password, userName, contact });
    try {
        await savedUser.save();
        return res.status(200).json({ message: "Data posted successfully.", userInfo: savedUser });
    }
    catch (err) {
        console.log(err);
        return res.status(200).json({ message: "There is an error" });
    }

});
module.exports = router;