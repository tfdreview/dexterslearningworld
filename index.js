// server/_core/index.ts
import express from "express";
var app = express();
app.listen(3001, () => console.log("Server running on port 3001"));
