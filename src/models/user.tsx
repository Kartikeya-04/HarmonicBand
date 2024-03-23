import mongoose from 'mongoose';

const newSchema = new mongoose.Schema({
  UserId:{
    type:Number,
    required:true,
    unique:true
  },
  UserName: {
    type:String,
    required:true
  },
  Password: {
    type:String,
    required:true
  },
  Email: String,
});
export const User = mongoose.models.User || mongoose.model('User', newSchema);
