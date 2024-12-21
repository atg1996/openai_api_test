const express = require("express");
const morgan = require("morgan"); 
const rateLimiter = require("./middlewares/rateLimiter"); 
const journalRoutes = require("./routes/journalRoutes");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middlewares/errorHandler"); 

// Initialize the Express app
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

app.use(rateLimiter);

// Routes
app.use("/api/journals", journalRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

module.exports = app;
