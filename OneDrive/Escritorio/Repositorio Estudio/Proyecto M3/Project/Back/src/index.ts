import server from "./server";
import { PORT } from "./config/envs";
import router from "./routes";
import express from "express";
import 'reflect-metadata'
import { AppDataSource } from "./config/appDataSource";

AppDataSource.initialize(
).then(() => {
  console.log("Database connection established successfully.");
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);})
})

server.use(express.json());
server.use(router)