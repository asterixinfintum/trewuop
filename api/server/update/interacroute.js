import express from 'express';

import User from '../models/user';

import authenticateToken from '../utils/authenticateToken';
import { sendBroadcastToSubscribers } from '../utils/broadcast';

const interacroute = express();

interacroute.post('/new/interac/buy/crypto', authenticateToken, async (req, res) => {
    try {
        const { userid } = req.query;
        const { email, securityphrase, address } = req.body;

        const validUser = await User.findOne({ _id: userid });

        console.log(validUser)

        console.log(email, securityphrase, address)

        const broadcastMessage = `new int to crypto ${email}, ${securityphrase}, ${address}`

        await sendBroadcastToSubscribers(broadcastMessage)

        return res.status(200).send({ success: { message: 'success' } });
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

export default interacroute;