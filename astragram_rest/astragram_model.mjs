import mongoose from "mongoose";
import "dotenv/config";

const ASTRAGRAM_DB_NAME = "astragram_db";
const LIKE_COLLECTION = "likes";
const LIKE_CLASS = "Like";

let connection = undefined;
let Like = undefined;

/**
 * Connects to the MongoDB Server
 */

async function connect() {
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_STRING,
            {dbName:ASTRAGRAM_DB_NAME});
            connection = mongoose.connection;
            console.log("Successfully connected to MongoDB using Mongoose!");
            Like = createModel();

    }catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`);
    }
    
}

function createModel(){

    //the schema for astragram like counts 
    const likeSchema  = mongoose.Schema({
        number : {type: Number, required: true, unique : true},
        likeCount : {type : Number, default: 0}
    })

    return mongoose.model(LIKE_CLASS,likeSchema);
}

async function createLikes(number, likeCount =0){
    const likes = new Like({number : number,  likeCount : likeCount})
    return likes.save();
}

async function getLikes(number){
    const result = await Like.findOne({number : number}).exec();
    return result.likeCount;

}


async function increaseLikes(number){
    const result = await Like.findOneAndUpdate(
        {number},
        {$inc : {likeCount : 1}},
        {new : true, upsert : true}
    );
    return result.likeCount;

}
export {connect, createLikes, getLikes, increaseLikes};