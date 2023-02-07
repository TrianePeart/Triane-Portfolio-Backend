### Back-end setup

It would be best to open a new terminal tab dedicated to running and developing your back-end.

- `cd back-end`
- `touch .env`
- rename document in `package.json`

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

### Back-end Deployment

1. [Render.com Deployment Instructions](https://github.com/9-1-pursuit/guide-deployment/tree/main/render-express-postgres)
1. [Render.com Deployment Video Part 1, Express](https://drive.google.com/file/d/1JefmByjhsh8zoLwzpwdv-Hn9Wg4ezaOB/view?usp=sharing)
1. [Render.com Deployment Video Part 2, PostgreSQL](https://drive.google.com/file/d/1_egu17vjEOjk6Hm94-yPTB2KYDGrISLq/view?usp=sharing)
1. [Snack-A-Log Video-Demo](https://drive.google.com/file/d/1aVnfu7ANdUPbfJhtSb45G2r0JSGtSI2t/view?usp=sharing)
1. [Front-end Instructions](https://github.com/9-1-pursuit/project-snack-a-log-frontend)

