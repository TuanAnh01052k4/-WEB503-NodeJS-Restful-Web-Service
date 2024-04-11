import mongoose from "mongoose";
const SinhVienSchema = mongoose.Schema({
  ten: {
    type: String,
    required: true,
  },
  tuoi: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});
const SvModel = mongoose.model("sinhviens", SinhVienSchema);
export default SvModel;
