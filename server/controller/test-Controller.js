export const serverTest = async (req, res) => {
  try {
    res.status(200).json({ message: "Server is running" })
  } catch (error) {
    console.log('error')
    res.status(500).json({ message: error.message })
  }
}
