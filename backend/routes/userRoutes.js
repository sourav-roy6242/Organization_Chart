const express = require("express");
const { handleGetAllUsers,
    handlegetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser } = require('../controllers/userControllers');
const router = express.Router();


router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router.route("/:id")
    .get(handlegetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

router.post("/", handleCreateNewUser);

module.exports = router;