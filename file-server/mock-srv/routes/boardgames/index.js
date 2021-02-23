'use strict'
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return [
      {
        id: 'C1',
        name: 'Uno',
        rrp: '9.99',
        info: 'Best card-game ever.',
      },
      {
        id: 'C2',
        name: 'Carcasonne',
        rrp: '43.33',
        info: 'Castle-building tile game.',
      },
      {
        id: 'C3',
        name: 'Monopoly',
        rrp: '33.23',
        info: 'Best worst game.',
      },
    ]
  })
}
