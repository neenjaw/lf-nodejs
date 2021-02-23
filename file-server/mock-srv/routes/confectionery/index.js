'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (req, res) {
    return [
      {
        id: 'B1',
        name: 'Chocolate Bar',
        rrp: '22.40',
        info: 'Delicious overpriced chocolate.',
      },
    ]
  })
}
