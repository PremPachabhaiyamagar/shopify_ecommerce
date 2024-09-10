const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: Number,
      trim: true,
      required: true,
    },
    email: {
      type: String,

      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      min: 8,
      max: 16,
    },
    cart: {
      type: Array,
      default: [],
    },
    newCart: {
      type: Array,
      default: [],
    },

    about: {},
    photo: String,
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateAuthToken = async function () {
  try {
    const token = await jwt.sign(
      { _id: this._id.toString() },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    return token;
  } catch (err) {
    res.send("Failed in generating token..");
  }
};
module.exports = mongoose.model("User", userSchema);
