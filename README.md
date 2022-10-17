# Project Starter

A starter repo for building CUNY Tech Prep projects with React, Express.js, and Sequelize.js

## Stack

_API_

- express.js
- sequelize.js

_React client_

- Built using `create-react-app` and configured to work with the api.
- Bootstrap 5.x added to `/client/public/index.html`
- React Router 6.x

## Development Setup

Each team member will need to do this on their local machine.

### Create a postgres db

Create a user in postgres named `ctp_user` with the password `ctp_pass`:

> This only needs to be done one time on your machine
> You can create additional users if you want to.

```
createuser -P -s -e ctp_user
```

Create a separate db for this project:

```
createdb -h localhost -U ctp_user ctp_appdb_development
```

> You will create a DB for each project you start based on this repo. For other projects change `ctp_appdb_development` to the new apps database name.

_For more details see the [installing postgres guides](https://github.com/CUNYTechPrep/guides#postgresql)_

### Running the app

For local development you will need two terminals open, one for the api-backend and another for the react-client.

_Clone_ this app, then:

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

### Setting up Heroku

1. Create a Heroku account (_if you don't have one_)
2. Install the [heroku cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) (_if you don't already have it_)

- Requires that you have `git` installed

```bash
# login with the cli tool
heroku login
```

### Create a Heroku project

Next, `cd` into this project directory and create a project:

```bash
# replace `cool-appname` with your preferred app name
heroku create cool-appname

# add a free postgres database to your heroku project
heroku addons:create heroku-postgresql:hobby-dev
```

> This will make your app accessible at https://cool-appname.herokuapp.com (_if the name is available_).

> You only need to do this once per app

### Add Environment Variables

Any environment variables your app needs will be available through your heroku project's settings page.

> NOTE: _Heroku calls them **Config Vars**_

- Go to the dashboard page here: https://dashboard.heroku.com/apps
- Click on the Settings tab
- Click `Reveal Config Vars`
- Add any environment variables you have in your `.env` file

### Deploying the app

Whenever you want to update the deployed app run this command.

```bash
git push heroku main
```

> This command deploys your main branch. You can change that and deploy a different branch such as: `git push heroku development`

## Project Structure

<pre>
.
├── README.md
├── <strong>api</strong>
│   ├── app.js
│   ├── <strong>config</strong>
│   │   └── config.json
│   ├── <strong>controllers</strong>
│   │   ├── appConfig.js
│   │   ├── index.js
│   │   └── posts.js
│   └── <strong>models</strong>
│       ├── index.js
│       └── post.js
├── <strong>client</strong>
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── <strong>public</strong>
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── <strong>src</strong>
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── <strong>components</strong>
│       │   ├── Loading.js
│       │   └── Post.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── <strong>pages</strong>
│       │   ├── AboutUsPage.js
│       │   ├── PostFormPage.js
│       │   ├── PostsListPage.js
│       │   └── ShowPostPage.js
│       └── serviceWorker.js
├── package-lock.json
└── package.json
</pre>
