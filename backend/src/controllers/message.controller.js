import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsers controller: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const myId = req.user._id;
    const { id: chatToId } = req.params;

    const allMessages = await Message.find({
      $or: [
        { senderId: myId, receiverId: chatToId },
        { senderId: chatToId, receiverId: myId },
      ],
    });
    res.status(200).json(allMessages);
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.user._id;
    const { id: receiverId } = req.params;
    const { text, image } = req.body;

    let imgUrl;
    if (image) {
      const imgUploadRes = await cloudinary.uploader.upload(image);
      imgUrl = imgUploadRes.secure_url;
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imgUrl,
    });
    //TODO: realtime using socket.io
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in send message controller: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
