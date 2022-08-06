const service = require("./user.service");

const registration = async(req, res) => {
    const { fullname, username, password } = req.body;
    console.log(req.body);
    const registerUser = await service.register({ fullname, username, password });
    res.json(registerUser);
}
const fetchUser = async(req, res) => {
    const allUser = await service.getUsersAll();
    res.json(allUser);
}

const con = {
    registration,
    fetchUser,
}

module.exports = con;