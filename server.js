const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

app.use(cors());

app.get("/",(rqs,res) =>
    {
        res.send("Fut a szerver")
    }

)

app.listen(2222,() =>
    {
    console.log("A szerveren a 2222 portol fut")

    }
)