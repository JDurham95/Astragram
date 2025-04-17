import "dotenv/config";
import * as likes from "./astragram_model.mjs";
import express from "express";
import asyncHandler from "express-async-handler";

const PORT = process.env.PORT;

const ERROR_NOT_FOUND = {Error : "Not found"};
const ERROR_INVALID_REQUES = {Error : "Invalid Request"};

const app = express();

app.use(express.json());

app.listen(PORT, async () => {
    await likes.connect(true)
    console.log(`Listening on port; ${PORT}`)
});

app.get("/:astragram_number", asyncHandler(async (req, res) => {
    const likeCount = await likes.getLikes(req.params.astragram_number);
    if (likeCount !== null){
        res.status(200).json(likeCount);
    }else{
        res.status(404).json(ERROR_NOT_FOUND);
    }

}))

app.put("/:astragram_number", asyncHandler(async(req,res) =>{

    const gramNumber = req.body.astragram_number;
}))