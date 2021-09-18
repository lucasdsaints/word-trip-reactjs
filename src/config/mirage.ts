import { createServer, Model } from 'miragejs';
import { continentsMock } from '../mocks/continents';

createServer({
  models: {
    continent: Model,
  },

  routes() {
    this.namespace = 'api'

    this.get('/continents', (schema: any) => {
      return schema.continents.all()
    })
  },

  seeds(server) {
    continentsMock.forEach(continent => {
      server.create('continent', continent);
    });
  },
})