import {
  registerForEvent
} from "./chunk-OJ6HMEIW.mjs";
import {
  errorHandler
} from "./chunk-3YJAJFMR.mjs";
import {
  checkIn
} from "./chunk-7JHGBIBT.mjs";
import {
  createEvent
} from "./chunk-POAO2I4A.mjs";
import "./chunk-OURDIITQ.mjs";
import {
  getAttendeeBadge
} from "./chunk-F4CZETBP.mjs";
import {
  getEventAttendees
} from "./chunk-BZMY7W5M.mjs";
import {
  getEvent
} from "./chunk-3ASP4FEK.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "API para gerenciar eventos pass.in",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("Server is running on port 3333");
});
