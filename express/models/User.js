const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs'); // Import bcryptjs

const UserSchema = new mongoose.Schema({
   email:String,
   password:String
})

// Hash password before saving
UserSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    if (!this.password) {
      throw new Error('Password is not set');
    }
    return await bcryptjs.compare(candidatePassword, this.password);
  } catch (error) {
    console.error('Error comparing passwords:', error.message);
    return false; // Return false in case of error
  }
};

// Add comparePassword method
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcryptjs.compare(candidatePassword, this.password); // Compare hashed password with provided password
};

UserSchema.set('toJSON', {
   transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id.toString()
     delete returnedObject._id
     delete returnedObject.__v
   }
 })
 
const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel