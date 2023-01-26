import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes);

app.listen({ port: 3333, host: "10.1.1.182" }).then(() => {
  console.log("Server is Running on port 3333");
});
