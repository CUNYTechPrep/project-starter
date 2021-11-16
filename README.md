# Project Starter
A starter repo for building CUNY Tech Prep projects with React, Express.js, and Sequelize.js

## Stack

*API*

- express.js
- sequelize.js

*React client*

- Built using `create-react-app` and configured to work with the api.
- Bootstrap 4.x added to `/client/public/index.html`
- React Router


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
createdb -h localhost -U ctp_user app2021_development
```

> You will create a DB for each project you start based on this repo. For other projects change `app2021_development` to the new apps database name.

*For more details see the [installing postgres guides](https://github.com/CUNYTechPrep/guides#postgresql)*

### Running the app

For local development you will need two terminals open, one for the api-backend and another for the react-client.

*Clone* this app, then:

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
  + Requires that you have `git` installed

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
