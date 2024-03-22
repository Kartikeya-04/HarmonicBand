import mongoose from 'mongoose';

const newSchema = new mongoose.Schema({
  UserName: String,
  Password: String,
  Email: String,
});
export const User = mongoose.models.User || mongoose.model('User', newSchema);
