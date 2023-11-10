// config/settings.js
const settings = {
  // Application settings
  appName: 'YourMicroservice',
  port: process.env.PORT || 3000,

  // Database settings
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || 'your_database',
    // Add more database configuration as needed
  },

  // Other settings
  // ...

  // Security settings
  // ...
};

module.exports = settings;
