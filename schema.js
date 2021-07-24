import mongoose from "mongoose";

const intence = mongoose.Schema({
  caption: String,
  user: String,
  image: String,
  comments: [],
});
export default mongoose.model("posts", intence);
