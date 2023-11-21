import { connect } from "mongoose";

export const connectMongodb = async () => {
  try {
    await connect(process.env.MONGODB_URI!);
  } catch (error) {
    console.log("cannot connect to mongodb db");
  }
};
