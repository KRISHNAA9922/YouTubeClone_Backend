import mongoose , {Schema} from "mongoose";
import { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from "bcrypt";

const playlistSchema = new Schema(
    {
        id : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim :true ,
            index :true
        },
       name : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim :true ,
        },
        description: {
            type : String,
            required : true,
            trim :true ,
            index :true
        },
        videos : [
            {
                type:Schema.Types.ObjectId,
                ref :"Video"
            }
        ],
      
    },{timeStaps:true}
)

export const Playlist = mongoose.model("Playlist" , playlistSchema)