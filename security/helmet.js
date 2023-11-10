// security/helmet.js
const helmet = require('helmet');

module.exports = function configureHelmet(app) {
  // Helmet middleware for enhanced security headers
  app.use(helmet());

  // Customize additional security headers if needed
  // For example:
  // app.use(helmet.contentSecurityPolicy({ directives: { defaultSrc: ["'self'"] } }));

  // You can add more helmet middleware configurations as necessary

  // HSTS (HTTP Strict Transport Security) Configuration
  app.use(
    helmet.hsts({
      maxAge: 31536000, // 1 year in seconds
      includeSubDomains: true,
      preload: true,
    }),
  );

  // Content Security Policy (CSP) header configuration
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        // Specify your CSP directives here
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        // Add more directives as needed
      },
    }),
  );

  // Referrer-Policy header configuration
  app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
};
