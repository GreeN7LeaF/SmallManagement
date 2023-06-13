const { AsyncQuery } = require("../config/DBconfig");

const getAllProduct = async (req, res) => {
  try {
    const query = `exec sp_getAllProduct`;
    const result = await AsyncQuery(query);

    if (result.success) {
      return res.status(200).json({
        EM: "Lấy danh mục sản phẩm thành công",
        EC: 1,
        DT: result.data,
      });
    } else {
      return res.status(400).json({
        EM: result.data,
        EC: -1,
        DT: [],
      });
    }
  } catch (error) {
    return res.status(400).json({
      EM: error.message,
      EC: -2,
      DT: [],
    });
  }
};

const getProductByID = async (req, res) => {
  try {
    let id = req.params.id;
    const query = `exec sp_getProductByID`;
    const params = [["ID", id]];
    const result = await AsyncQuery(query, params);

    if (result.success) {
      return res.status(200).json({
        EM: "Lấy sản phẩm với ID thành công",
        EC: 1,
        DT: result.data,
      });
    } else {
      return res.status(400).json({
        EM: result.data,
        EC: -1,
        DT: [],
      });
    }
  } catch (error) {
    return res.status(400).json({
      EM: error.message,
      EC: -2,
      DT: [],
    });
  }
};

const addProduct = async (req, res) => {
  try {
    let inputs = req.body;
    const query = `exec sp_addProduct`;
    const params = [
      ["name", inputs.name],
      ["type", inputs.type],
      ["cost", inputs.cost],
      ["price", inputs.price],
    ];
    const result = await AsyncQuery(query, params);
    console.log(result);

    if (result.success) {
      return res.status(200).json({
        EM: "Thêm sản phẩm thành công",
        EC: 1,
        DT: result.data,
      });
    } else {
      return res.status(400).json({
        EM: result.data,
        EC: -1,
        DT: [],
      });
    }
  } catch (error) {
    return res.status(400).json({
      EM: error.message,
      EC: -2,
      DT: [],
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    let inputs = req.body;
    let id = req.params.id;
    const query = `exec sp_updateProduct`;
    const params = [
      ["id", id],
      ["name", inputs.name],
      ["type", inputs.type],
      ["cost", inputs.cost],
      ["price", inputs.price],
      ["status", inputs.status],
    ];
    const result = await AsyncQuery(query, params);

    if (result.success) {
      return res.status(200).json({
        EM: "Cập nhật sản phẩm thành công",
        EC: 1,
        DT: result.data,
      });
    } else {
      return res.status(400).json({
        EM: result.data,
        EC: -1,
        DT: [],
      });
    }
  } catch (error) {
    return res.status(400).json({
      EM: error.message,
      EC: -2,
      DT: [],
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    let id = req.params.id;
    const query = `exec sp_deleteProduct`;
    const params = [["id", id]];
    const result = await AsyncQuery(query, params);

    if (result.success) {
      return res.status(200).json({
        EM: "Xóa sản phẩm thành công",
        EC: 1,
        DT: result.data,
      });
    } else {
      return res.status(400).json({
        EM: result.data,
        EC: -1,
        DT: [],
      });
    }
  } catch (error) {
    return res.status(400).json({
      EM: error.message,
      EC: -2,
      DT: [],
    });
  }
};

module.exports = {
  getAllProduct,
  getProductByID,
  addProduct,
  updateProduct,
  deleteProduct,
};
