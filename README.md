## Getting Started

Create a top-level folder that will contain both your back-end and front-end applications:

1. Create a directory called `project-snack-a-log`.
1. `cd` into the directory.
1. Fork and clone this repo
2. CD into directory.

### Back-end setup

It would be best to open a new terminal tab dedicated to running and developing your back-end.

- `cd back-end`
- `touch .env`

**.env**

```
PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=
```

- `npm install` - install npm packages listed in `package.json`.
- `npm run db:init` - initialize a new database and create tables.
- `npm run db:seed` - seed the table(s) with some data.
- `nodemon` - confirm that this is running on port 3333.
- Visit http://localhost:3333/Intended-Name/ and make sure you see some data in the form of an array of objects.
- `npm run test` - to run the back-end tests.
## Resources

Use the resources below to deploy your application.


### Back-end Deployment

1. [Render.com Deployment Instructions](https://github.com/9-1-pursuit/guide-deployment/tree/main/render-express-postgres)
1. [Render.com Deployment Video Part 1, Express](https://drive.google.com/file/d/1JefmByjhsh8zoLwzpwdv-Hn9Wg4ezaOB/view?usp=sharing)
