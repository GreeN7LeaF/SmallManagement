const { AsyncQuery } = require("../config/DBconfig");

const getAllProType = async (req, res) => {
  try {
    const query = `exec sp_getAllProType`;
    const result = await AsyncQuery(query);

    if (result.success) {
      return res.status(200).json({
        EM: "Lấy danh mục loại sản phẩm thành công",
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

module.exports = { getAllProType };
