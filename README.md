# Reenter App

Web application to connect formerly incarcerated individuals to resources and opportunities that will 
## Stack

*API*

- express.js
- sequelize.js

*React client*

- Built using `create-react-app` and configured to work with the api.
- Bootstrap 4.x added to `/client/public/index.html`
- React Router

*Project Structure*

## Dev Setup

Each team member will need to do this on their local machine.

### Database

User: `ctp_user`
Password: `ctp_pass`:

### Running the app

For local development you will need two terminals open, one for the api-backend and another for the react-client.

```bash
# api-backend terminal 1
cp .env.example .env
npm install
npm run dev
```

```bash
# react-client terminal 2
cd client
npm install
npm start
```

- api-backend will launch at: http://localhost:8080
- react-client will launch at: http://localhost:3000

> In production you will only deploy a single app. The react client will build into static files that will be served from the backend.

## Deployment

> Deployed app to https://reenter.herokuapp.com

> This command deploys your master branch. You can change that and deploy a different branch such as: `git push heroku development`

