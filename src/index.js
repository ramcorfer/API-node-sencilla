
const fastify = require('fastify')({
    logger:true,
});

const port = process.env.port
fastify.register(require('./v1/welcome'));
fastify.register(require('./v1/bye'));
fastify.register(require('./v1/cities'));
const start = async () => {
    await fastify.listen(port);
    console.log(`servidor escuchando en puerto ${fastify.server.address().port}`);
};

start();




