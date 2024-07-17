import mongoose from "mongoose";
const Connection = async () => {
  // dbName, username, password
  //const url = `mongodb+srv://${username}:${password}@hameed.20n99cb.mongodb.net/${dbName}`;
  const url = `mongodb+srv://hameed:B0neLZcuxfY5aO7a@hameed.20n99cb.mongodb.net/flipkartDB`;
  try {
    await mongoose.connect(url); // since the connect() method is an asynchronous function or it returns a 'promise' so we have to use either .then() or async-await.
    console.log("Database Connected Succesfully");

  } catch (error) {
    console.log("Error While connecting with database", error.message);
  }

}

export default Connection;