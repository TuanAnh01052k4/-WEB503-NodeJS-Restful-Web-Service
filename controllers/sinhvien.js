import SvModel from "./../models/sinhvien.js";
export const GetALLSinhVien = async (req, res) => {
  try {
    const sinhvien = await SvModel.find();
    res.status(200).send({ status: true, data: sinhvien });
  } catch (error) {
    res.status(503).send({ status: false, message: "Lỗi không xác định" });
  }
};
export const GetSinhVienByID = async (req, res) => {
  try {
    const sinhvien = await SvModel.findOne({ _id: req.params.id });
    res.status(200).send({ status: true, data: sinhvien });
  } catch (error) {
    res.status(503).send({ status: false, message: "Lỗi không xác định" });
  }
};
export const AddSinhVien = async (req, res) => {
  try {
    const Svmodel = new SvModel(req.body);
    const sinhvien = await Svmodel.save();
    res.status(200).send({ status: true, data: sinhvien });
  } catch (error) {
    res.status(502).send({ status: false, message: "Lỗi thêm sản phẩm" });
  }
};
export const UpdateSinhVien = async (req, res) => {
  try {
    // lấy id truyền vào
    const id = req.params.id;
    const sinhvien = await SvModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).send({ status: true, data: sinhvien });
  } catch (error) {
    res
      .status(502)
      .send({ status: false, message: `Lỗi cập nhật sản phẩm ${error}` });
  }
};
export const DeleteSinhVien = async (req, res) => {
  try {
    // lấy id truyền vào
    const id = req.params.id;
    const sinhvien = await SvModel.findOneAndDelete({ _id: id });
    res
      .status(200)
      .send({ status: true, data: sinhvien, message: "Xóa thành công" });
  } catch (error) {
    res
      .status(502)
      .send({ status: false, message: `Lỗi xóa sản phẩm ${error}` });
  }
};
