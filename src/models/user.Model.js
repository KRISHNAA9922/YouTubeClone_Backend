import mongoose , {Schema} from "mongoose";
import { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim :true ,
            index :true
        },
        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim :true ,
        },
        fullname : {
            type : String,
            required : true,
            trim :true ,
            index :true
        },
        avatar : {
            type : String, // he cloud var image takun URL betel
            required : true,
        },
        coverimage : {
            type : String, // he cloud var image takun URL betel
        },
        watchHistory : [
            {
                type:Schema.Types.ObjectId,
                ref :"Video"
            }
        ],
        password : {
            type : String, 
            required : [true,'password is required']
        },
        refreshTokens : {
            type : String, 
        },
    },{timeStaps:true}
)
//pre ha pass la save karny pahile encrypt karto || ha middelware ahe
userSchema.pre("save",async function(next){  // middle ware made next asna garjech ahe
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password,10)
    next()
})
//for Cheaking the passwords(string , hash pass) help of bcrypt
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password,this.password)
}
//FOR ACCESSING ACCESS JWT
userSchema.methods.generateAccessToken = function () {
    return JsonWebTokenError.sign(
        { _id: this._id ,//payloads of th tokens
           email:this.email,
           username:this.username,
           fullname:this.fullname
        },process.env.ACCESS_TOKEN_SECRET,//for accesing key
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY//for expiry
        }
    )
}
//FOR ACCESSING  REFRESH JWT
userSchema.methods.generateRefreshToken = function () {
    return JsonWebTokenError.sign(
        { _id: this._id},
        process.env.REFRESH_TOKEN_SECRET,//for accesing key
        {expiresIn:process.env.REFRESH_TOKEN_EXPIRY }//for expiry}
    )
 }
export const User = mongoose.model("User" , userSchema)