import jwt from "jsonwebtoken";
const secretKey = "Billo_Bagge_Billeyan_Da_Ki_Karegi"; // Replace with your actual secret key

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization"); // or wherever you store the JWT in the request
  if (!token) {
    return res.status(401).json({ msg: "Authorization failed" });
  }

  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET_KEY
    );
    req.user = decoded; // Add the user to the request object
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ msg: "Token is not valid" });
  }
};

export default authenticateJWT;
