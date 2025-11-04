import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import QRCode from "qrcode";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

 
mongoose
  .connect("mongodb://127.0.0.1:27017/maha_kumbh_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

 
const userSchema = new mongoose.Schema({
  fullName: String,
  age: Number,
  phone: String,
  email: String,
  dob: String,
  password: String,
  location: String,
  photo: String,
  qrCode: String,
});

const User = mongoose.model("User", userSchema);

 
app.post("/login", async (req, res) => {
  try {
    const userData = req.body;
 
    let user = await User.findOne({ email: userData.email });

   
    if (user) {
      if (user.password !== userData.password) {
        return res.status(401).json({ message: "Invalid password" });
      }
      console.log("✅ Existing user logged in:", user.email);
      return res.status(200).json({ message: "Login successful", user });
    }

  
    const qrText = `
Name: ${userData.fullName}
Age: ${userData.age}
Phone: ${userData.phone}
Email: ${userData.email}
DOB: ${userData.dob}
Location: ${userData.location}
    `;

    const qrCodeImage = await QRCode.toDataURL(qrText);

    const newUser = new User({
      ...userData,
      qrCode: qrCodeImage,
    });

    user = await newUser.save();

    console.log("✅ New user saved:", user.email);
    return res.status(201).json({ message: "New user registered", user });
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: err.message });
  }
}); 
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
