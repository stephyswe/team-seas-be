# Deployment to Heroku
* https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-heroku

Procfile:
* web: npm run start:prod
* release: npx prisma migrate deploy
* move ts-node to dependencies
* package.json: "start:prod": "node dist/src/main",
// src because of prisma
```
main.ts: await app.listen(process.env.PORT || 3500);
app.module.ts
GraphQLModule.forRoot<ApolloDriverConfig>({
      playground: false,
      introspection: true,
      cache: 'bounded',
}),
```
### Heroku Initial
* heroku login
* heroku git:clone -a app_name
* cd app_name
* git push heroku main

### Heroku Command
* heroku logs --tail

### Seed data
* heroku run npx prisma db push
* heroku run npx prisma db seed

### Start docker just to get migrations working
* docker-compose up -d
* npx prisma migrate dev --name init
* docker-compose down
* heroku run npx prisma migrate