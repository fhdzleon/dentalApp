import mainRouter from "./routes";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

const server = express();

server.use(express.json());
server.use(cors());
server.use(mainRouter);
// Error handling middleware
server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

export default server;
