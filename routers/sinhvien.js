import express from "express";
import { CheckPermission } from "../permission/auth.js";
import {
  GetALLSinhVien,
  GetSinhVienByID,
  AddSinhVien,
  UpdateSinhVien,
  DeleteSinhVien,
} from "./../controllers/sinhvien.js";
import { SinhVienValidate } from "../validate/validate.js";
const sinhvienrouter = express.Router();
sinhvienrouter.get("/", GetALLSinhVien);
sinhvienrouter.get("/:id", GetSinhVienByID);
sinhvienrouter.post("/", CheckPermission, SinhVienValidate, AddSinhVien);
sinhvienrouter.put("/:id", CheckPermission, SinhVienValidate, UpdateSinhVien);
sinhvienrouter.delete("/:id", CheckPermission, DeleteSinhVien);
export default sinhvienrouter;
