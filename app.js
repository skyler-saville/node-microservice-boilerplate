const express = require('express');
const morgan = require('morgan'); // Include morgan for request logging

const configureHelmet = require('./security/helmet');
const settings = require('./config/settings');

const app = express();

// Use configuration settings
const PORT = settings.port;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configureHelmet(app); // Use helmet for enhanced security headers

// Use morgan for request logging
app.use(morgan('dev'));

// Default route
app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

// API Routes
const apiRoutes = require('./routes/apiRoutes');

app.use('/api', apiRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Only start the server if this file is the main module (not required by another file)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
