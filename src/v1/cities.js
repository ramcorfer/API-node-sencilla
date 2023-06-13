async function routes (fastify, options) {
    const cities = [
        { id:1, name: 'Sevilla', provincia: 'Sevilla', comunidad: 'Andalucía', pais: 'España' },
        { id:2, name: 'Jerez', provincia: 'Cádiz', comunidad: 'Andalucía', pais: 'España' },
        { id:3, name: 'Granada', provincia: 'Granada', comunidad: 'Andalucía', pais: 'España' }
    ]
    fastify.get('/v1/cities', async (request, reply) => {
        reply.send(cities);
    })

    fastify.get('/v1/cities/:id', async (request, reply) => {
        const city = cities.find(c => c.id === parseInt(request.params.id));
        if(!city) return reply.status(404).send('Ciudad no encontrada');
        else reply.send(city);
    })

    fastify.post('/v1/cities', async (request, reply) => {
        const city = {
            id:cities.length +1,
            name: request.body.name,
            provincia: request.body.provincia,
            comunidad: request.body.comunidad,
            pais: request.body.pais
        }
        cities.push(city);
        reply.send(city);
        return { message: `Ciudad ${city.name} creada`};
    })

    fastify.put('/v1/cities/:id', async  (request, reply) => {
        const city = cities.find( c => c.id === parseInt(request.params.id));
        if(!city) return reply.status(404).send('Ciudad no encontrada');

        city.name = request.body.name;
        city.provincia = request.body.provincia;
        city.comunidad = request.body.comunidad;
        city.pais = request.body.pais;

        reply.send(city);
    })


    fastify.delete('/v1/cities/:id', async  (request, reply) => {
        const city = cities.find( c => c.id === parseInt(request.params.id));
        if(!city) return reply.status(404).send('Ciudad no encontrada');

        const index = cities.indexOf(city);
        cities.splice(index,1);
        reply.send(city);
    })
}

module.exports = routes
