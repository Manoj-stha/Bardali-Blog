import db from "../db.js";
import jwt from "jsonwebtoken";
export const Login = (req, res) => {
  const { email, password } = req.body;
  const sql = "select * from user where email=?";

  db.query(sql, email, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (data.length == 0) {
        res.status(300).send("Invalid email!!");
      } else {
        // console.log(data);
        // const user=data[0];

        bcrypt.compare(password, data[0].password, (err, result) => {
          if (result) {
            console.log(data[0]);
            const { password, isAdmin, ...others } = data[0];
            const token = jwt.sign(
              { id: data[0].id, isAdmin: data[0].isAdmin },
              process.env.JWT
            );
          }
        });
        // const {password, isAdmin,...others}=data[0];
        // const token ={id:data[0].id, isAdmin:data[0].isAdmin, process.env.JWT}
        res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)

          .json({ details: others, isAdmin });
      }
    }
  });
};
