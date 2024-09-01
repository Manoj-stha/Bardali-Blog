import db from "../db.js";

export const createBlog = (req, res) => {
  console.log(req.file);
  const blog_img = req.file.filename;
  const { title, description, user_id , published_at} = req.body;
  const created_at = new Date().toISOString().split("T")[0];
  const sql =
    "insert into blog(title, description, blog_img, user_id, created_at, published_at) values (?,?,?,?,?,?)";
  const values = [title, description, blog_img, user_id, created_at, published_at];

  db.query(sql, values, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ statusCode: 200, message: "succesfully added!!" });
    }
  });
};

export const getAllBlog = (req, res) => {
  const sql = "select * from blog";
  db.query(sql, (err, data) => {
    if (err) {
      res.send({ statusCode: 300, message: "Something gone wrong" });
    } else {
      if (data.length === 0) {
        res.send({ statusCode: 300, message: "blog is not available" });
      } else {
        res.send(data);
      }
    }
  });
};

export const getSingleBlog = (req, res) => {
  const id = parseInt(req.params.id);
  const sql = "SELECT * FROM blog WHERE user_id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};

export const updateBlogs = (req, res) => {
  const { f_name, l_name, address, email, password, phone, gender, dob } =
    req.body;
  const updated_at = new Date().toISOString().split("T")[0];
  const id = parseInt(req.params.id); // Parse the ID from the URL params
  const sql =
    "UPDATE blog SET title=?, description=?, user_id=?, created_at=?, updated_at=?, published_at=? WHERE blog_id=?";
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
        message: "blog updated successfully",
        result,
      });
    }
  });
};

export const deleteBlog = (req, res) => {
  const id = parseInt(req.params.id);
  const sql = "delete from blog where user_id=?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      res.send({ statusCode: 300, message: "something went wrong" });
    } else {
      res.send(result);
    }
  });
};


export const deleteAllBlog = (req, res) => {
    const sql = "delete from blog ";
    db.query(sql, (err, result) => {
      if (err) {
        res.send({ statusCode: 300, message: "something went wrong" });
      } else {
        res.send(result);
        res.send("Deleted Successfully")
      }
    });
  };
