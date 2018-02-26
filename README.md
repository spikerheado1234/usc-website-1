# USC Website v2.0

---

## Development Guide

### Setup

1. Clone the repo: `git clone git@github.com:usdevs/usc-website.git`
1. Install all necessary components by running `npm install`
1. If you're looking to generate/modify models, install sequelize-cli `npm install -g sequelize-cli`

### Organization

The entry point is app.js, which requires the necessary modules and middleware for express. You probably won't be modifying this much

Static assets go in `public`, which will be accessible from the root URL. For instance, `/public/images/favicon.png` will be accessible at `http://thewebsite.com/images/favicon.png`.

The routing happens in `routes/index.js`, and from there spreads out to the individual modules. You'll notice that the routes are set up as functions to take in a db parameter: this is to allow all the controllers to use a single database connection instead of re-initializing them in each controller.

Views live in /views, and can be rendered using `res.render('viewname', {locals})`. See how the index page is rendered in `routes/index.js`.

Models live in `models/*`. They're imported automatically, just make sure that model.exports points to the model object.

### Deployment Guide

I'll get to this later

* Webpack
* Gulp tasks
* Hosting
