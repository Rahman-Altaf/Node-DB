const user = [];

module.exports = {
  create: (req, res) => {
    try {
      return res.send({
        response: "create user api",
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getAll: (req, res) => {
    try {
      return res.send({
        response: "create all user",
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
//

