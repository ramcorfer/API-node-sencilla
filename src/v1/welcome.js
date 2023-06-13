async function routes (fastify, options) {
    fastify.get('/v1/welcome', async (request, reply) => {
        return { saludo: 'Hola María' }
    })
}

module.exports = routes
