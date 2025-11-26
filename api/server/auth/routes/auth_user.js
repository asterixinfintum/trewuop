import express from 'express';

import User from '../../models/user';

import authenticateToken from '../../utils/authenticateToken';

const authUser = express();

authUser.get('/userauth/auth/user', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        console.log(req.user, 'test here');
        // Return the user data
        res.json({
            success: true,
            user: req.user
        });
    } else {
        // If no user found, return error
        res.status(401).json({
            success: false,
            message: "User not authenticated"
        });
    }
});

export default authUser;