const { connect } = require("mongoose")
require("dotenv").config()

async function connectDB() {
    try {
        await connect(process.env.MONGO_URI)
    } catch (error) {
        console.error("MongoDB connection failed:", error)
        process.exit(1) // Exit the process with failure
    }
}

module.exports= connectDB