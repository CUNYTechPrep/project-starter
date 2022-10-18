# React client

The code in this directory was initialized with [create-react-app](https://create-react-app.dev/) and uses [react-router 6](https://reactrouter.com/en/main) and [Bootstrap 5.x](https://getbootstrap.com/docs/5.2/getting-started/introduction/).

## Running the client

> make sure you're in the `/client` folder when running the following commands

```
npm install
npm start
```

## Installing libraries

You can install any react library you want to use in this project. The dependencies in this client are independent of the dependencies of your API backend.

## Making call to your API backend

This client runs on port `3000` by default and the API server should be configured to run on port `8080`.

The create-react-app proxy has been **pre-configured** for these ports, meaning in your code you can make API calls without having to hardcode the port number. For example:

```js
fetch('/api/users/42', { ... })
```

> Note: you should **NOT** hardcode the domain `http://localhost/` in your API calls. If you were to do this, the calls will fail once the app is deployed.
