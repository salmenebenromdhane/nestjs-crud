import * as mongoose from 'mongoose';

export const UserSchema= new mongoose.Schema({
    id:{type:Number},  
  firstName: { type: String },
  lastName:    { type: String},
  email : {type:String},
  password:{type:String}
});
export interface User extends mongoose.Document {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password : string;

  }