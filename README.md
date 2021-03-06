# node.js-express-full-stack-react-boilerplate

# Frontend Instructions
Boilerplate I use for front-end React.js TypeScript apps adapted from the following sources:
- https://github.com/AnthonyDelaCruz/docker-jsonplaceholder-react
- https://github.com/bencompton/jest-cucumber/examples
- https://en.wikipedia.org/wiki/Service_layer_pattern

# Backend Instructions

Boilerplate I use for back-end Node.js apps. Compiled and adapted from the following sources:
- https://github.com/leonpahole/nodejs-express-boilerplate
- https://github.com/BretFisher/node-docker-good-defaults
- https://github.com/santiq/bulletproof-nodejs
- https://github.com/RobinBuschmann/sequelize-typescript-example
- https://www.docker.com/blog/how-to-deploy-on-remote-docker-hosts-with-docker-compose/

## Start developing

Run build:

`make build`

Run containers:

`make up`

Migrate:

`make migrate`

Seed:

`make seed`

Check status:

`make ps`

Check logs:

`make logs`

Exec into api:

`make exec`

## Add migration

```
docker-compose exec api npx sequelize-cli migration:create --name add_password_to_users
```

# Build production image

Create `build_and_release.env` (from example file) and fill in your image name and username for Docker hub. Then run `build_and_release.sh`. The script will build image, then prompt for deployment parameters and deploy the project and increment version.

# Deploy to production

Note: you need at least docker-compose version 1.26 for below code to work. If it doesn't work, you can just manually deploy to a server.

Note: you should change `MaxSessions` parameter on your server from 10 to 500 (in `/etc/ssh/sshd_config`).

Use `prod_deploy` to deploy your LOCAL `docker-compose.prod.yml` with your local `env.prod` settings. You can use all of the development make commands (except `exec` and `build`) with prefix `prod_`.

Run containers:

`make prod_up`

Migrate:

`make prod_migate`

Seed:

`make prod_seed`

Check status:

`make prod_ps`

Check logs:

`make prod_logs`

### LICENSE

MIT License,

Copyright (c) 2021 Ryan McKenna

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
