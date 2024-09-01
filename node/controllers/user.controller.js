import db from "../db.js";
import bcrypt from 'bcryptjs';

export const createUser = (req, res) => {
  console.log(req.file);
  const profile = req.file.filename;
  const {
    f_name,
    l_name,
    address,
    email,
    password,
    phone,
    gender,
    dob
  } = req.body;
  const created_at = new Date().toISOString().split("T")[0];
    bcrypt.hash(password, 10, (err, hash)=>{
      if(err){
        res.send(err);
      }
      else{

        const sql =
          "insert into user(f_name, l_name, address, email, password, phone, gender, dob,profile, created_at) values (?,?,?,?,?,?,?,?,?,?)";
        const values = [
          f_name,
          l_name,
          address,
          email,
          hash,
          phone,
          gender,
          dob,
          profile,
          created_at,
        ];
      
        db.query(sql, values, (err, result) => {
          if (err) {
            res.send(err);
          } else {
            res.send({ statusCode: 200, message: "succesfully added!!" });
          }
        });
      }
    })
  };


export const getAllUsers = (req, res) => {
  const sql = "select * from user";
  db.query(sql, (err, data) => {
    if (err) {
      res.send({ statusCode: 300, message: "Something gone wrong" });
    } else {
      if (data.length === 0) {
        res.send({ statusCode: 300, message: "User is not available" });
      } else {
        res.send(data);
      }
    }
  });
};

export const getSingleUser = (req, res) => {
  const id = parseInt(req.params.id);
  const sql = "SELECT * FROM user WHERE user_id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};

export const updateUsers = (req, res) => {
  const id = parseInt(req.params.id);
  const { f_name, l_name, address, email, password, phone, dob, gender } =
    req.body;
  console.log(f_name, l_name, address, email, password, phone, dob, gender);
  const updated_at = new Date().toISOString().split("T")[0];
  const sql =
    "UPDATE user SET f_name=?, l_name=?, address=?, email=?, password=?, phone=?, gender=?, dob=?,  updated_at=? WHERE user_id=?";
  const values = [
    f_name,
    l_name,
    address,
    email,
    password,
    phone,
    gender,
    dob,

    updated_at,
    id,
  ]; // Include id at the end

  db.query(sql, values, (err, result) => {
    if (err) {
      res
        .status(500)
        .send({ statusCode: 500, message: "Something went wrong", error: err });
    } else {
      res.status(200).send({
        statusCode: 200,
        message: "User updated successfully",
        result,
      });
    }
  });
};

export const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const sql = "delete from user where user_id=?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      res.send({ statusCode: 300, message: "something went wrong" });
    } else {
      res.send(result);
    }
  });
};

export const deleteAllUser = (req, res) => {
    const sql = "delete from user ";
    db.query(sql, (err, result) => {
      if (err) {
        res.send({ statusCode: 300, message: "something went wrong" });
      } else {
        res.send(result);
        res.send("Deleted Successfully")
      }
    });
  };
