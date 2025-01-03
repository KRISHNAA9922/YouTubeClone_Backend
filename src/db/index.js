//method 2 used in production levels
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js"; // The .js extension is mandatory for ES modules
// console.log("DB_NAME:", DB_NAME);


// const connectionDB = async () => { 
//     try {
//       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//        console.log(`\n Connected to MongoDB !! DB Host : ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.error("error failed",error);
//         process.exit(1);
//     }
// }

// export default connectionDB;