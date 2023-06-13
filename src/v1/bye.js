async function routes (fastify, options) {
    fastify.get('/v1/bye', async (request, reply) => {
        return { message: 'Adiós, muchas gracias' };
    })

    fastify.post('/v1/bye', async (request, reply) => {
        const nombre = {
            name: request.body.name
        }
        return { message: `Adiós, ${nombre.name} muchas gracias `};
    })
}

module.exports = routes
