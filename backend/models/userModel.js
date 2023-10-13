const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema( {
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  username: {type: String, require: true},
  password: {type: String, required: true},
  avatar: { type: String, required: false },
  avatarPublicId: { type: String, required: false },
  isAdmin:{type : Boolean , default:false}
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = User;