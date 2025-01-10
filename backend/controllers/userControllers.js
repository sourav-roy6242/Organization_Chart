const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    try {
        const allUsers = await User.find({});
        res.json(allUsers);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
}

async function handlegetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ msg: "User not found" });
    }
    return res.json(user);
}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, req.body);
    return res.json({ status: "success" });
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "success" });
}

async function handleCreateNewUser(req, res) {
    const body = req.body;
    if (
        !body ||
        !body.role ||
        !body.reporting
    ) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    const result = await User.create({
        role: body.role,
        reporting: body.reporting
    });

    return res.status(201).json({ msg: "Success" , id: result._id});
}

module.exports = {
    handleGetAllUsers,
    handlegetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
};