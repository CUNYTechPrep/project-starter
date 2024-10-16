# CTP Project Starter

> [!CAUTION]
> This repo is actively being updated as of October 13, 2024. You can begin using and cloning the repo once this message is removed.

A full stack web application starter template for building projects with React, Express.js, and Sequelize.js

**Current version:** 4.0.0 (Oct 2024)

## Stack

> [!NOTE]
> This project starter requires Node.js v20 (LTS) or newer to work properly. The project makes use of features not available in older versions such as ECMAScript/JavaScript modules ([ESM](https://nodejs.org/docs/latest-v20.x/api/esm.html)), node [watch mode](https://nodejs.org/docs/latest-v20.x/api/cli.html#--watch), and node [env-file support](https://nodejs.org/docs/latest-v20.x/api/cli.html#--env-fileconfig).
>
> LTS ([long-term support](https://nodejs.org/en/about/previous-releases#nodejs-releases)) versions (v20, v22) of Node.js are recommended for use with this starter.

_Backend API_

- express.js (v4.21.1)
- sequelize.js (v6.37.3)
- PostgreSQL (v14+ recommended or use https://supabase.com/)

_Frontend React Web Client_

- Based on `vite`
  - pre-configured to work with the backend-api
- Bootstrap (v5)
  - added to `/frontend-client/index.html` (_optional_ can be removed)
- React Router (v6.26.1)

## Development Setup

Each team member will need to do this on their local machine and will need their own separate database.

### Setup a PostgreSQL database

You have two options:

- **Option 1** (_RECOMMENDED_) - Use a hosted database
  - Sign up to https://supabase.com/ and get a _FREE_ PostgreSQL database
- **Option 2** (_ADVANCED_) - Install PostgreSQL locally
  - Check if you have PostgreSQL installed
    - ✅ versions 12-14 should work
    - 🚫 version 15+ has not been tested but will likely work
  - Follow the [instructions for locally setting up a PostgreSQL database](./_docs/local-postgresql.md)

Save your databases URI connection string for the next steps. It will looks something like this:

`postgresql://[YOUR-USERNAME]:[YOUR-PASSWORD]@[HOSTNAME]:5432/[DBNAME]`

### Running the app locally

> [!IMPORTANT]
> For local development you will need two terminals open, one for the backend-api and another for the frontend-client.

_Clone_ this app, then:

```bash
# backend-api terminal 1
cd backend-api
cp .env.example .env
# in the .env file update the DATABASE_URL env var with your PostgreSQL connection string
npm install
npm run dev
```

```bash
# frontend-client terminal 2
cd frontend-client
npm install
npm run dev
```

- backend-api will launch at: http://localhost:8080
- frontend-client will launch at: http://localhost:5173

> [!NOTE]
> In production you will only deploy a single app. The React client will build into static files that will be served from the backend. The project has already been configured for this, but you are free to also deploy the backend and frontend separately if you wish.

## Deployment

The following are hosting options that have a free tier for deploying apps based on this project-starter. Each option has it's pro's and con's.

Students can also get education credits for using Heroku through the [GitHub Student Developer Pack](https://education.github.com/pack)

### Hosting on [Render.com](https://render.com/) (_recommended_)

1. Create an account by clicking the **Get Started** button

- It's recommended to Sign up using your **Github** account for easy linking to project repos.
- The **Individual** account type does NOT require a credit card

2. Navigate to the [Dashboard](https://dashboard.render.com/)
3. Create a PostgreSQL Database

- Click the **New +** button at the top of the page
- Select **PostgreSQL** from the drop down menu
- Provide a **Name** for your projects database
- Choose a **Region** closest to you or your users.
- Choose **Instance Type**: Free
- You can leave the optional settings empty
- Click on the **Create Database** button
- Your database will be ready to use in 1-5 minutes.
- Once the database is active, make note of where to get the Connection details, such as "**Internal Database URL**" and "**External Database URL**"

4. Create a Web Service

- Click the **New +** button at the top of the page
- Select **Web Service** from the drop down menu
- Click on the **"Build and deploy from a Git repository"** option and click **Next**
- Connect to your project's repository on Github
- Provide a **Name** for your projects web app
- Choose the same **Region** as you chose for your database (_important for db connectivity_)
- Choose the **Branch** with the code you want to deploy (usually `main`)
- Set **Root Directory**: `backend-api`
- Choose **Runtime**: Node
- Set **Build Command**: `npm install && npm run build`
- Set **Start Command**: `npm start`
- Choose **Instance Type**: `Free`
- Expand the **Advanced** options
- Add **Environment Variables**
  - key: `SESSION_SECRET` = value: click on the **Generate** button
  - key: `DATABASE_URL` = value: copy the "**Internal Database URL**" from your step 3.
  * Do NOT add the `PORT` variable (Render will set this for you)
- Click the "**Create Web Service**" button
- Your application will be live in 1-5 minutes

### Hosting on [Railway.app](https://railway.app/)

1. Create a Starter account using your Github username
   - You get $5 in credit a month for free and do not have to provide a credit card
2. Verify your account by answering Railways questions
3. Create a **"New Project"**
4. Select **"Deploy from Github repo"**
   - follow instruction to link your project repo to railway
5. Click **"Deploy now"**
   - your app will fail, but we will fix it in the next steps
6. Add a PostgreSQL Database to your Railway project
   - click the **"+ New"** button at the top right of the project
   - click **"Database >"**
   - click **"Add PostgreSQL"**
   - to add a PostgreSQL Database to your project
7. Add environment variables if you need any
   - Do not add the `PORT` variable (Railway will set this for you)

Your app will now be live and auto deployed on new commits. If it's not working you may need to restart the app manually in the Railway UI.

### Hosting on Heroku (no longer free)

> NOTE: Heroku is no longer free, but these instructions still work. We recommend getting started with render.com or railway.app

1. Create a Heroku account (_if you don't have one_)
2. Install the [heroku cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) (_if you don't already have it_)

- Requires that you have `git` installed

```bash
# login with the cli tool
heroku login
```

#### Create a Heroku project

Next, `cd` into this project directory and create a project:

```bash
# replace `cool-appname` with your preferred app name
heroku create cool-appname

# add a free PostgreSQL database to your heroku project
heroku addons:create heroku-postgresql:hobby-dev
```

> This will make your app accessible at https://cool-appname.herokuapp.com (_if the name is available_).

> You only need to do this once per app

#### Add Environment Variables

Any environment variables your app needs will be available through your heroku project's settings page.

> NOTE: _Heroku calls them **Config Vars**_

- Go to the dashboard page here: https://dashboard.heroku.com/apps
- Click on the Settings tab
- Click `Reveal Config Vars`
- Add any environment variables you have in your `.env` file

#### Deploying the app

Whenever you want to update the deployed app run this command.

```bash
git push heroku main
```

> This command deploys your main branch. You can change that and deploy a different branch such as: `git push heroku development`
