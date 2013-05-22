# flatiron-restful-express

The purpose of this `flatiron` plugin is to integrate `restful` with `express`
embedded in a `flatiron` application.

## Install

    npm install flatiron-restful-express

## Usage

The plugin installs a tiny middleware which acts like the `static` provided by
`express`.  It serves all resources provided in `app.resources` and goes on to
the next middleware if a resource cannot be routed.

```js
var flatiron = require('flatiron'),
    restfulExpress = require('flatiron-restful-express'),
    app = flatiron.app;
app.use(flatiron.plugins.resourceful);
app.resources.User = app.define('user');

/* Serve user as restful resource. */

app.use(restfulExpress);
...
```
