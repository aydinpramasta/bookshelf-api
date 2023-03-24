const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost',
    port: 9000,
  });

  server.route(routes);

  await server.start();

  process.stdout.write(`Server berjalan di ${server.info.uri}\n`);
};

init();
