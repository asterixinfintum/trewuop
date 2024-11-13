const express = require('express');

const resetpassword = express.Router();

import sendPasswordResetEmail from "./sendPasswordResetEmail";
import User from '.././models/user';

resetpassword.post('/api/send-reset-link', async (req, res) => {
    const { email } = req.body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    try {
        const resetUser = await User.findOne({ email });

        if (resetUser) {
            sendPasswordResetEmail({ email, userid: resetUser._id, resetToken: "resetToken" })
        } else {
            sendPasswordResetEmail({ email })
        }

        res.status(200).json({ message: 'Password reset link sent successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to send password reset link' });
    }
});

resetpassword.post('/api/send-reset-link/changepassword', async (req, res) => {
    try {
        const { password, userId, resetToken } = req.body;

        if (!password || !userId || !resetToken) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        if (user.resetToken !== resetToken) {
            return res.status(400).json({ error: 'Invalid or expired reset token.' });
        }

        user.password = password;
        user.resetToken = null;
        await user.save();

        res.json({ success: true, message: 'Your password has been successfully updated.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update password' });
    }
});

module.exports = resetpassword;