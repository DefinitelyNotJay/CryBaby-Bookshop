export const register = async(req, res, next) => {
    const body = req.body;
    res.status(200).send("register complete!")
}