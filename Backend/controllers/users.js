import User from '../models/User.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().sort('-createdAt');
        if (!users.length) {
            return res.status(404).json({ message: 'Users not exist' });
        }
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Something is wrong' });
    }
};

export const createUser = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        
        if (!name || !email || !phone) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        
        // Дополнительная валидация, если нужно
        const newUser = new User({
            username: name,
            email,
            phone,
            password: 'defaultPassword123',
        });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error when creating a user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};