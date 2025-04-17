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
    const likeCount = await likes.getLikes(req)

}))