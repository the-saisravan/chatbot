const dotenv = require("dotenv")
const express = require("express")
const bodyParser = require("body-parser")

const app = express();
dotenv.config()

app.use(express.json())
app.use(bodyParser.json())
// app.use(express.static('public'));

const ApiKey = "AIzaSyBdQniAD9f9fuvUY3LOQ5qPcuUZIdecpkg"
const {GoogleGenAI} = require("@google/genai")

const ai = new GoogleGenAI({ apiKey: ApiKey });

app.post("/chat", async (req,res) => {
    const {userPrompt} = req.body
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: userPrompt
        })
        res.send({"message" : response.text}).json()
    })


app.get("/",(req,res)=>{
    res.send("Hello Get is working perfectly fine")
})


module.exports = app