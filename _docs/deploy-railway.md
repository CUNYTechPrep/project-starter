# Deploying to [Railway.app](https://railway.app/)

1. Create a Starter account using your Github username
   - You get a one-time $5 credit for free and do not have to provide a credit card
2. Verify your account by answering Railways questions
3. Create a **"New Project"**
4. Select **"Deploy from Github repo"**
   - follow instruction to link your project repo to railway
   - select your project repo
5. Click **"Deploy now"**
   - your app will fail, but we will fix it in the next steps
6. Add a PostgreSQL Database to your Railway project
   - close the setting page
   - click the **"+ Create"** button at the top right of the project
   - click **"Database >"**
   - click **"Add PostgreSQL"**
   - After 2 minutes a PostgreSQL Database will be added to your project
7. Click on your project's box to open up it's setting page
8. Click on the `Variables` tab of your project
   - Click on the link in the purple box that says `Looking to connect a database? Add a Variable Reference`
   - Choose `DATABASE_URL` and click `Add`
   - Add any other environment variables your project needs to run
   - Do not add the `PORT` variable (Railway will set this for you)
9. Click on the `Settings` tab of your project and make the following modifications
   - In the Networking section:
     - In **Public Networking**, click `Generate Domain`
     - Enter port `8080`, and click `Generate Domain`
   - In the Build section:
     - Add to **Providers**: `Node`
     - Add to **Custom Build Command**: `cd backend-api && npm install && npm run build`
   - In the Deploy section:
     - Add to **Custom Start Command**: `cd backend-api && npm run start`
   - _make sure you click the checkmark to apply each change_
10. Click on the Deploy button
    - Deployments may take 2-5 minutes

Your app will now be live and auto deployed on new commits. If it's not working you may need to restart the app manually in the Railway UI.

## (_Optional_) App Sleeping

To reduce costs on your app you can configure your app components to sleep after some time of inactivity, this is called [App Sleeping](https://docs.railway.app/reference/app-sleeping) in Railway.

To enable it:

- Open up each of your App components
  - Click on the `Settings` tab
  - In the Deploy section, toggle on `Enable App Sleeping`

> [!Note]
> App Sleeping has to be enabled for each component and service you create.
