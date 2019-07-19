# angular-auth0-aside

This repository demonstrates the use of [Auth0](https://auth0.com) with [Angular](https://angular.io) (with the [@angular/cli](https://github.com/angular/angular-cli)) and a sample [RESTHeart](http://www.restheart.com) API with a protected route.

## Dependencies

* [Node.js with npm](http://nodejs.org), Node >= 8, npm >= 5
* [@angular/cli](https://github.com/angular/angular-cli), >= 8

## Auth0 Application Setup

1. Go to your [**Auth0 Dashboard: Applications**](https://manage.auth0.com/#/applications) section and click the "[+ Create Application](https://manage.auth0.com/#/applications/create)" button.
2. Name your new app and select "Single Page Web Applications".
3. In the **Settings** for your new Auth0 app, add `http://localhost:4200/callback` to the **Allowed Callback URLs**.
4. Add `http://localhost:4200` to both the **Allowed Web Origins** and **Allowed Logout URLs**. Click the "Save Changes" button.
5. If you'd like, you can [set up some social connections](https://manage.auth0.com/#/connections/social). You can then enable them for your app in the **Application** options under the **Connections** tab. The example shown in the screenshot above uses username/password database, Facebook, Google, and Twitter.

> **Note:** Set up your own social keys and _do not_ leave social connections set to use Auth0 dev keys or you will encounter issues with token renewal.

## Auth0 API Setup

This app uses RESTHeart API, pls refer to www.restheart.com to know how to launch RESTHeart.

## Installation

Clone this project. From the root directory, run the following commands to install dependencies for the server and client-side:

```
$ npm install
```

1. Open `server/config.js.example` and remove `.example` from the file name. Then replace `[YOUR_AUTH0_DOMAIN]` with your Auth0 domain.
2. Open `src/app/environments/environment.example` and remove `.example` from the file name. Then replace `[YOUR_CLIENT_ID]` and `[YOUR_AUTH0_DOMAIN]` with your Auth0 application's client ID and domain.

## Serving the project

From the root of this project, run:

```bash
$ npm start
```

This will concurrently serve the Angular and API servers.

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub, or Microsoft Account to log in.
