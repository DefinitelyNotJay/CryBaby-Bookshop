import express from "express"
import mongoose from "mongoose"

const app = express()

const dbConnect = async() => {
    try {
        await mongoose.connect("mongodb://localhost/pagination")
        console.log("server is running")
    } catch (err) {
        throw new Error(err)
    }
}

app.listen("3000", ()=>{
    dbConnect()
})