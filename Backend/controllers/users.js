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

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.send(user);
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        res.send({ message: 'Something is wrong' });
    }
};

export const updateAccountData = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.username = req.body.username || 'undf';
        user.phone = req.body.phone || 'undf';
        await user.save();
        
        res.json(user); 
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

export const createUser = async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({ message: 'Всі поля обов’язкові' });
        }

        const newUser = new User({
            username: name,
            email,
            phone,
            password: 'defaultPassword123',
        });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Помилка при створенні користувача:', error);
        res.status(500).json({ message: 'Помилка сервера' });
    }
};