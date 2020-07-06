// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const MongoClient = require('mongodb').MongoClient

const url = process.env['MONGO_URL']

const client = new MongoClient(url)

// Declare a route
fastify.get('/mongo', (request, reply, next) => {
  client.connect(function(err){
		if (err) {
			request.log.info('Error connecting to mongo', err)
		  return reply.send(err)
		}
		// from here on, error free.
		const db = client.db('cct')
		const collection = db.collection('students')
		collection.find({}).toArray(function (err, data) {
			if (err) {
        request.log.info('Error finding documents', err)
        return reply.send(err)
      }
      reply.send(data)
		})
	})
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
