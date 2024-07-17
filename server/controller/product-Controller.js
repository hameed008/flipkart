import Product from "../modules/product-schema.js"
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    console.log('Hi')
    res.status(200).json(products)
  } catch (error) {
    console.log('error')
    res.status(500).json({ message: error.message })
  }
}