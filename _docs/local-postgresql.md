# Setting up PostgreSQL locally

The goals of this guide are to help you:

- Install PostgreSQL
- Create a ROLE/USER with a PASSWORD
- Create a DATABASE
- Get your database URL connection string

## Install PostgreSQL

Check if you already have PostgreSQL installed. You can try one of the following:

- run the command `which psql`
- check if it's listed in your computers Applications

If you need to install PostgreSQL see the [installing PostgreSQL guides](https://github.com/CUNYTechPrep/guides#postgresql)

## Create a PostgreSQL user and database

For this project-starter template you can use any values for the username, password, and database name. The rest of this guide will assume the following values were chosen:

- PostgreSQL User/Role
  - name: `ctp_user`
  - password: `ctp_pass`
- PostgreSQL Database
  - name: `ctp_appdb_development`

> [!IMPORTANT]
> Whatever values you choose, save them or you will lose access to your database data and will have to create a new one.

### For Windows/pgAdmin users

If you are on Windows or installed **pgAdmin** follow our [pgAdmin guide](https://github.com/CUNYTechPrep/guides/blob/master/pgAdmin-create-user-db.md) to create a user in PostgreSQL named `ctp_user` with the password `ctp_pass` and a database named `ctp_appdb_development`.

### For Mac/Linux users

Create a user in PostgreSQL named `ctp_user` with the password `ctp_pass`:

```
createuser -P -s -e ctp_user
```

Create a new db for this project:

```
createdb -h localhost -U ctp_user ctp_appdb_development
```

> You will create a DB for each project you start based on this repo. For other projects change `ctp_appdb_development` to the new apps database name.

## Getting your database URL connection string

The database connection string takes the general form of:

```
postgresql://[YOUR-USERNAME]:[YOUR-PASSWORD]@[HOSTNAME]:5432/[DBNAME]
```

For the local DB setup described above, your string would be:

```
postgresql://ctp_user:ctp_pass@localhost:5432/ctp_appdb_development?sslmode=disable
```

> [!CAUTION]
> the `?sslmode=disable` option should only be used for local development and _should NOT be used in a deployed/production setting_. For more info see the [SSL Mode documentation](https://www.postgresql.org/docs/14/libpq-ssl.html#LIBPQ-SSL-PROTECTION).
