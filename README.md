# Build A Storefront Backend

This is a Storefront Backend that contains a bunch of APIs that simulate an online store.

# Required Package Manager
npm

# Dependencies
* node
* Express
* Jasmine
* Bcrypt
* dotenv
* pg
* jsonwebtoken
* supertest
* tsc-watch
* typescript

# Scripts
* "build": "npx tsc",
* "prettier": "prettier .prettierrc.json --write src/**/*.ts",
* "lint": "eslint   src/**/*.ts",
* "jasmine": "jasmine",
* "db_test": "npm run build && npm run jasmine",
* "start": "nodemon src/index.ts",
* "test": "set ENV=test&& db-migrate --env test up && npm run db_test && db-migrate --env test reset",
* "watch": "tsc-watch --esModuleInterop src/index.ts --outDir ./build --onSuccess  \"node ./build/index.js\"",
* "tsc": "tsc"

# Setup Database
* 1- Open your postgres Terminal with the Root User
* 2- Run `CREATE USER customer WITH PASSWORD '1261';`
* 3- Run `CREATE DATABASE storefront;`
* 4- Run `CREATE DATABASE storefront_test;`
* 5- Run `\c storefront`
* 6- Run `GRANT ALL PRIVILEGES ON DATABASE storefront TO customer;`
* 7- Run `\c storefront_test`
* 8- Run `GRANT ALL PRIVILEGES ON DATABASE storefront_test TO customer;`

# Executing the Project
* 1- `db-migrate up`
* 2- `npm run watch`

## Info to run the APIs are available in the REQUIRMENTS file
[REQUIRMENTS.md](REQUIRMENTS.md)

# Testing the project
* 1- `npm run test`

# Sensitive Information
All the Database connections and Passwords are stored in the .env file which is not uploaded with the project, therefore, you will need to create it

## Contents of the .env file
* POSTGRES_HOST=127.0.0.1
* POSTGRES_DB=storefront
* POSTGRES_TEST_DB=storefront_test
* POSTGRES_USER=customer
* POSTGRES_PASSWORD=1261
* ENV=dev
* BCRYPT_PASSWORD=noOneKnows
* SALT_ROUNDS=10
* pepper=WinterIsComing
* Token_Secret=WinterIsHere
