import Joi from "joi";
const AuthObj = Joi.object({
  name: Joi.string().required().empty().trim().messages({
    "any.require": "Trường tên không tồn tại",
    "string.empty": "Tên không được để trống",
  }),
  email: Joi.string().required().empty().trim().email().messages({
    "any.require": "Trường email không tồn tại",
    "string.empty": "Email không được để trống",
    "string.email": "Email không đúng định dạng",
  }),
  password: Joi.string().required().empty().trim().min(6).messages({
    "any.require": "Trường tên không tồn tại",
    "string.empty": "Tên không được để trống",
    "string.min": "Mật khẩu không nhỏ hơn 6 kí tự",
  }),
});
const AuthEmailObj = Joi.object({
  email: Joi.string().required().empty().trim().email().messages({
    "any.require": "Trường email không tồn tại",
    "string.empty": "Email không được để trống",
    "string.email": "Email không đúng định dạng",
  }),
  password: Joi.string().required().empty().trim().min(6).messages({
    "any.require": "Trường tên không tồn tại",
    "string.empty": "Tên không được để trống",
    "string.min": "Mật khẩu không nhỏ hơn 6 kí tự",
  }),
});
export const Authvalidate = (req, res, next) => {
  const body = req.body;
  // console.log(req.body);
  const { error } = AuthObj.validate({
    name: body.name,
    email: body.email,
    password: body.password,
  });
  if (error) {
    res.status(502).send({ status: false, message: error.message });
  } else {
    next();
  }
};
export const AuthvalidateLogin = (req, res, next) => {
  const body = req.body;
  // console.log(req.body);
  const { error } = AuthEmailObj.validate({
    email: body.email,
    password: body.password,
  });
  if (error) {
    res.status(502).send({ status: false, message: error.message });
  } else {
    next();
  }
};
const SinhVienObj = Joi.object({
  ten: Joi.string().required().empty().trim().messages({
    "any.require": "Trường tên không tồn tại",
    "string.empty": "Tên không được để trống",
  }),
  tuoi: Joi.number().required().min(0).max(200).messages({
    "any.require": "Tuổi không tồn tại",
    "number.min": "Tuổi không nhỏ hơn 0",
    "number.max": "Tuổi không nhỏ hơn 20",
  }),
  email: Joi.string().required().empty().trim().email().messages({
    "any.require": "Trường email không tồn tại",
    "string.empty": "Email không được để trống",
    "string.email": "Email không đúng định dạng",
  }),
  phone: Joi.string().required().empty().trim().messages({
    "any.require": "Trường số điện thoại không tồn tại",
    "string.empty": "số điện thoại không được để trống",
  }),
});
export const SinhVienValidate = (req, res, next) => {
  const body = req.body;
  const { error } = SinhVienObj.validate(body);
  if (error) {
    res.status(502).send({ status: false, message: error.message });
  } else {
    next();
  }
};
