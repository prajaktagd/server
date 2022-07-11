const { startServer } = require('./src/server/server.js');
const { createInitiator, createRouter } = require('./src/server/router.js');
const { injectBodyParams } = require('./src/app/injectBodyParams.js');
const { injectCookies } = require('./src/app/injectCookies.js');
const { injectSession } = require('./src/app/injectSession.js');
const { methodNotSupportedHandler } = require('./src/app/methodNotSupportedHandler.js');
const { notFoundHandler } = require('./src/app/notFoundHandler.js');
const { serveStaticFrom } = require('./src/app/serveStatic.js');

module.exports = {
  startServer, createInitiator, createRouter, injectBodyParams, injectCookies,
  injectSession, methodNotSupportedHandler, notFoundHandler,
  serveStaticFrom
};
