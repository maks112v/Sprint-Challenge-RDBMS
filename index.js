const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./helpers/projectRouter')
const actionRouter = require('./helpers/actionRouter')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRouter);

server.use('/api/actions', actionRouter);

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);