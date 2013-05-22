/**
 * Plugin to use the restful flatiron plugin with express.
 */

/*! Module dependencies. */

var restful = require('restful');

/*! Module exports. */

exports.name = 'restful';
exports.attach = attach;

/**
 * Attaches the restful router as middleware to the installed express router.
 * The router is setup to route to route the resources in `app.resources`.
 */

function attach(options) {
  var app = this,
      resources = [],
      router;
  for (var resource in this.resources) {
    resources.push(this.resources[resource]);
  }
  router = restful.createRouter(resources);

  /*! Make sure that the express plugin is loaded.  If not load it. */

  if (!app.plugins.express) app.use(require('flatiron-express'));
  app.use(createMiddleware(router));
}

/**
 * Generates a middleware that wraps the given resourceful router.
 *
 * @param {Object} router The router to use.
 *
 * @api private
 */

function createMiddleware(router) {
  return function middleware(req, res, next) {

    /*! Simply pipe the params to the router and go to next middleware on
     * failure. */

    router.dispatch(req, res, function (err) {
      if (err) return next();
    });
  };
}
