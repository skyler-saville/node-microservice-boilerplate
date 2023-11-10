// controllers/apiController.js
const apiController = {};

apiController.getWelcomeMessage = (req, res) => {
  res.json({ message: 'Welcome to your API!' });
};

// Add more controller methods as needed

module.exports = apiController;
