import mongoose from "mongoose";

const ServiceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Service = mongoose.model("Service", ServiceSchema);

export default Service;
