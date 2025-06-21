const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: "Users",
    },
  type: { 
    type: String, enum: ["welcome", "otp", "offerLetter", "feedback", "completion"], 
    required: true
    },
 content:{ 
    type: String,
    required: true
    },
  createdAt: {
     type: Date, 
     default: Date.now
    }
});

module.exports = mongoose.model("Notifications", NotificationSchema);