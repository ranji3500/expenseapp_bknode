import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const db = "mongodb://ranjith:ranji123@167.71.239.215:27017/expense_db?authSource=admin"; // force IPv4
    const conn = await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

