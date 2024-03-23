import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
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

newSchema.pre('save', async function(next) {
  // Only hash the password if it's modified or new
  if (!this.isModified('Password')) {
    return next();
  }

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password along with the salt
    const hashedPassword = await bcrypt.hash(this.Password, salt);

    // Replace the plain text password with the hashed password
    this.Password = hashedPassword;

    next();
  } catch (error:any) {
    next(error);
  }
});
export const User = mongoose.models.User || mongoose.model('User', newSchema);
