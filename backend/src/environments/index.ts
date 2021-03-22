import * as dotenv from "dotenv";

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 8080;
const SALT = 15;
const ACCESS_TOKEN_SECRET = "dunghuynh01051998";
const ACCESS_TOKEN = "access-token";

const DATABASE_NAME = "app";
// const MONGO_URI = `${process.env.MONGO_URL}/${DATABASE_NAME}`;
const MONGO_URI =
  "mongodb+srv://admin:admin@cluster0.5vgel.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

export { SERVER_PORT, SALT, ACCESS_TOKEN_SECRET, ACCESS_TOKEN, MONGO_URI };
