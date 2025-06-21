const express= require('express');
const dotenv = require('dotenv');
const cors= require('cors');
const cookieParser = require('cookie-parser');
const verifyToken= require('./middlewares/auth');
const db= require('./config/mongoose-connection'); 
const client  = require('./config/emailConfig'); 
// const twilio = require('twilio');
const authRoutes = require('./routes/authRoutes');

const app = express();

dotenv.config();
console.log("twilioaccountsid", process.env.TWILIO_ACCOUNT_SID);
console.log("twilioauthtoken", process.env.TWILIO_AUTH_TOKEN);
console.log("twilioServiceSid", process.env.TWILIO_SERVICE_SID);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Allow specific origin (e.g., Vite dev server)
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
}));
app.use("/user", authRoutes)

const twilioServiceSid=process.env.TWILIO_SERVICE_SID


const port = process.env.PORT;










app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});