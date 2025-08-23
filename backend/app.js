const express= require('express');
const dotenv = require('dotenv');
const cors= require('cors');
const cookieParser = require('cookie-parser');
const verifyToken= require('./middlewares/verifyToken');
const db= require('./config/mongoose-connection'); 
const client  = require('./config/emailConfig'); 
// const twilio = require('twilio');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const publicRoutes = require('./routes/publicRoutes');

const app = express();

dotenv.config();
console.log("twilioaccountsid", process.env.TWILIO_ACCOUNT_SID);
console.log("twilioauthtoken", process.env.TWILIO_AUTH_TOKEN);
console.log("twilioServiceSid", process.env.TWILIO_SERVICE_SID);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use(cookieParser());


// Allow specific origin (e.g., Vite dev server)
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true,  
}));
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/public", publicRoutes);


const twilioServiceSid=process.env.TWILIO_SERVICE_SID


const port = process.env.PORT;










app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});