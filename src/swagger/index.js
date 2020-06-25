// Swagger set up
import path from 'path';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Barefoot Nomad',
      version: '1.0.0',
      description:
        "Barefoot Nomad is an application that will enable its Company Nomads' book their international travel and accommodation globally, easily and conveniently across all the locations/centers where the company has its operation.",
      license: {
        name: 'MIT',
        url: 'https://github.com/andela/blackninjas-backend'
      },
      contact: {
        name: 'Barefoot-nomad',
        url: 'https://github.com/andela/blackninjas-backend',
        email: 'info@barefootnomad.com'
      }
    },
    basePath: '/api/v1',
    servers: [
      {
        url: `${process.env.BASE_URL}/api/v1`,
      }
    ]
  },
  apis: [
    // all swagger api files will included here like below example
    //   this is an example of how to include file : path.resolve(__dirname,'./Users.js'),
    path.resolve(__dirname, '../routes/user.route.js'),
    path.resolve(__dirname, '../routes/trip.route.js'),
    path.resolve(__dirname, '../routes/user.settings.route.js'),
    path.resolve(__dirname, '../routes/comment.routes.js'),
    path.resolve(__dirname, '../routes/search.route.js'),
    path.resolve(__dirname, '../routes/locations.route.js'),
    path.resolve(__dirname, '../routes/notification.route.js'),
    path.resolve(__dirname, '../routes/accommodation.route.js'),
    path.resolve(__dirname, '../routes/trip.statistics.route.js'),
    path.resolve(__dirname, '../routes/user-management.route.js')
  ]
};
export default options;
