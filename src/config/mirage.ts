import { belongsTo, createServer, hasMany, Model } from 'miragejs';
import { continentsMock } from '../mocks/continents';
import { citiesMock } from '../mocks/cities';

export function makeServer({ enviroment = 'test' } = {} ) {
  const server = createServer({
    models: {
      continent: Model.extend({
        cities: hasMany('city')
      }),
      city: Model.extend({
        continent: belongsTo('continent')
      })
    },
  
    routes() {
      this.namespace = 'api';
  
      this.get('/continents', (schema: any) => {
        return schema.continents.all()
      });
  
      this.get('/continents/:id', (schema: any, request: any) => {
        const continentId = request.params.id;
  
        const continent = schema.continents.findBy({ id: continentId });
        console.log('lucas', continent)
        const plus50cities: any[] = [];
        continent.attrs.cityIds.forEach((cityId: string) => {
          const city = schema.cities.findBy({ id: cityId });
          plus50cities.push(city.attrs);
        });
        continent.attrs.plus50cities = plus50cities;
        return continent;
      });

      this.namespace = '';
      this.passthrough();
    },
  
    seeds(server) {
      const continentMap: any = {};
      continentsMock.forEach(continent => {
        continentMap[continent.id] = server.create('continent', continent);
      });
      citiesMock.forEach(city => {
        const newCity = server.create('city', city);
        continentMap[city.continentId]?.cities.add(newCity);
      });
    },
  });
  return server;
}