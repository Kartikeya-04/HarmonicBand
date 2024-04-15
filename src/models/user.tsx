import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
const newSchema = new mongoose.Schema({
  UserId:{
    type:Number,
    required:false,
    default:0
  },
  UserName: {
    type:String,
    required:true
  },
  Password: {
    type:String,
    required:false,

    default: 'defaultPassword'
  },
  Email:{
    type:String,
    // unique:true
  },
  Feedback:  {type:String
  },
  timestamp:{
    type:Date,
    default: Date.now
  }
});


newSchema.pre('save', async function(next) {
  if(this.Password){
    if (!this.isModified('Password')) {
      return next();
    }
    try {
      const salt = await bcrypt.genSalt(10);
  
      const hashedPassword = await bcrypt.hash(this.Password, salt);
  
      this.Password = hashedPassword;
  
     return next();
    } catch (error:any) {
     return next(error);
    }

  }
  else{
    console.log('pre conditioning condition is checked ! ');
    return
    
  }

});
export const User = mongoose.models.User || mongoose.model('User', newSchema);
