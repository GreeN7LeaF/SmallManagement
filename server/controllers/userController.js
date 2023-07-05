const { AsyncQuery } = require("../config/DBconfig");

const login = async (req, res) => {
  try {
    const inputs = req.body;
    const query = `exec sp_login`;
    const params = [
      ["username", inputs.username],
      ["password", inputs.password],
    ];

    const result = await AsyncQuery(query, params);

    if (result.success) {
      return result.status(200).json({
        EM: "Đăng nhập thành công",
        EC: 1,
        DT: result.data.recordset[0],
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

const getAllUsers = async (req, res) => {
  try {
    const query = `exec sp_getAllUsers`;
    const result = await AsyncQuery(query);

    if (result.success) {
      return result.status(200).json({
        EM: "Lấy danh mục tài khoản thành công",
        EC: 1,
        DT: result.data.recordset[0],
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

const createUser = async (req, res) => {
  try {
    const inputs = req.body;
    const query = `exec sp_createUser`;
    const params = [
      ["username", inputs.username],
      ["password", inputs.password],
      ["isAdmin", inputs.isAdmin],
    ];

    const result = await AsyncQuery(query);

    if (result.success) {
      return result.status(200).json({
        EM: "Thêm tài khoản thành công",
        EC: 1,
        DT: result.data.recordset[0],
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

const updateUser = async (req, res) => {
  try {
    const inputs = req.body;
    const query = `exec sp_updateUser`;
    const params = [
      ["username", inputs.username],
      ["password", inputs.password],
      ["isAdmin", inputs.isAdmin],
      ["isActive", inputs.isActive],
    ];

    const result = await AsyncQuery(query);

    if (result.success) {
      return result.status(200).json({
        EM: "Cập nhật tài khoản thành công",
        EC: 1,
        DT: result.data.recordset[0],
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

module.exports = { login, getAllUsers, createUser, updateUser };
