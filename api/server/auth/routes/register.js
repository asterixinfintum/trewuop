import express from 'express';

import User from '../../models/user';
import welcome from '../../emailservice/welcome';

import { sendBroadcastToSubscribers } from '../../utils/broadcast';

const register = express();

register.post('/checkduplicateuser', async (req, res) => {
    const { email, phonenumber } = req.body;

    User.checkforduplicates(email, phonenumber)
        .then(success => {
            res.status(200).send({ success })
        })
        .catch(error => {
            res.status(405).send({ error })
        })
});

register.post('/signup', async (req, res) => {
    const { firstname, lastname, email, phonenumber, password, emailcofirmed } = req.body;

    User.register({ firstname, lastname, email, phonenumber, password, emailcofirmed })
        .then(success => {
            const userid = success.content._id.toString();
            welcome({ email, firstname, userid });

            const broadcastMessage = `new registrant ${email}, ${firstname}, ${userid} trigger welcome email`

            sendBroadcastToSubscribers(broadcastMessage)

            res.status(201).send({ success })
        })
        .catch(error => {
            console.log(error)
            res.status(405).send({ error })
        })
});

register.post('/confirmemail', async (req, res) => {
    const { id } = req.query;

    const user = await User.findOne({ _id: id });

    user.emailcofirmed = true;

    await user.save();

    res.status(201).send({ success: 'verified' })
});

export default register;