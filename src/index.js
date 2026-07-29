import dotenv from "dotenv";
import path from "path"; //path module is used to work with file and directory paths
import { fileURLToPath } from "url"; //fileURLToPath is used to convert a file URL to a file path

import connectDB from "./db/index.js";

const __filename = fileURLToPath(import.meta.url); //import.meta.url is a special meta property that contains the URL of the current module. It is used to get the file path of the current module in Node.js when using ES modules.

const __dirname = path.dirname(__filename); //path.dirname() method returns the directory name of a path. It is used to get the directory path of the current module in Node.js when using ES modules.

dotenv.config({
  //dotenv.config() loads environment variables from a .env file into process.env
  path: path.resolve(__dirname, "../.env"),
});

connectDB();

/*
import express from "express"
const app = express()

( async () => {    //IIFE
    try{
      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      app.on("error", (error) => {
        console.log("ERROR:", error);
        throw error
      })

      app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
        
      })
    }
    catch (error) {
      console.error("ERROR:", error);
      throw error
    }
})();   
*/
