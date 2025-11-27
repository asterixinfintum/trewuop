import express from 'express';

import User from '../../models/user';
import authenticateToken from '../../utils/authenticateToken';

const resetpassword = express();

resetpassword.post('/resetpassword', (req, res) => {
    const { userId, newPassword } = req.body;

    User.updatepasswordv2(userId, newPassword)
        .then(success => {
            res.status(200).send({ success });
        })
        .catch(error => {
            console.log(error);
            res.status(405).send({ error });
        });
});

export default resetpassword;
