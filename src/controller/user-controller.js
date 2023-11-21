import userService from "../service/user-service.js";

const register = async (req, res, next) => {
    try {
        const result = await userService.register(req.body);
        res.status(200).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const result = await userService.login(req.body);
        res.status(200).json({
            data: result
        });
    } catch (error) {
        next(error)
    }
}

const getUser = async (req, res, next) => {
    try {
        const email = req.user.email;
        const result = await userService.getUser(email);
        res.status(200).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const logout = async (req, res, next) => {
    try {
        await userService.logout(req.user.id);
        res.status(200).json({
            data: "OK"
        });
    } catch (error) {
        next(error)
    }
}


export default {
    register,
    login,
    getUser,
    logout

}
