import User from "../models/User.js";

export const register = async (req, res, next) => {
  const registerData = req.body;
  console.log(registerData)
  await User.collection.insertOne({
    ...registerData,
  });
};
