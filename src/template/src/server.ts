import express, { Request, Response } from "express"

const app = express()

// Define a route handler for the root path
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!")
})

// Start the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
