import express, { Request, Response } from "express";

const app = express();

// Define a route handler for the root path
app.get("/", (req: Request, res: Response) => {
  res.send("<h1 style='text-align: center; margin-top: 50px;'>Hello, World!</h1>");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is up and running at http://localhost:${PORT}`);
});
