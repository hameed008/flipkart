import { products } from "./constants/data.js"
import Product from "./modules/product-schema.js";
const DefaultData = async () => {
  try {

    //await Product.deleteMany({});
    // this will prevent the duplication of data in the database ( but this is not an ideal way to prevent data duplication because here we are first deleting all the documents and then inserting it again which will is tedious job specially if data is large ):
    // so we will prevent data duplication from 'schema objects'.


    // we can insert data to databaae in many ways like by using: insert() insertOne(), insertMany() and we can also use save() if we have only one object.
    await Product.insertMany(products)  // since the insertMany() method is an asynchronous function or it returns a 'promise' so we have to use either .then() or async-await
    console.log('Data inserted Succesfully');

  } catch (error) {
    console.log('Error While Inserting Data', error.message);
  }
}
export default DefaultData;