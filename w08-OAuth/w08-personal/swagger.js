/* eslint-disable node/no-unpublished-require */
const swaggerAutogen = require('swagger-autogen')();
const dotenv = require('dotenv');
dotenv.config();

const isLocalHost = false;
const PORT = process.env.PORT || 8080;

// eslint-disable-next-line no-console
console.log(`Is localhost: ${isLocalHost}`);

const HOSTING = isLocalHost ? `localhost:${PORT}` : 'w08-personal-assignment-swagger.onrender.com';
const SCHEMES = isLocalHost ? ['http', 'https'] : ['https', 'http'];

const docsDefinition = {
  info: {
    title: 'Content Management Systes API (CMS)',
    version: '1.0.0',
    description:
      'The CMS API is designed to facilitate content management operations for a web-based application. It provides endpoints to manage articles, allowing users to retrieve a list of articles and create new articles. The API is defined using the OpenAPI Specification (OAS), making it easy to understand and integrate into various applications.'
  },
  contact: {
    name: 'Carlos Mercado',
    email: 'carlos.washington.mercado@gmail.com'
  },
  license: {
    name: 'Your License',
    url: 'https://en.wikipedia.org/wiki/MIT_License'
  },
  host: HOSTING,
  schemes: SCHEMES,
  securityDefinitions: {
    api_key: {
      type: 'apiKey',
      name: 'api_key',
      in: 'header'
    }
  },
  tags: [
    {
      name: 'Articles',
      description: 'Endpoints related to managing articles'
    }
  ],
  externalDocs: {
    description: 'CSE341 - Lesson 8: OAuth',
    url: 'https://cse341.netlify.app/lesson8'
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server'
    }
  ],
  definitions: {
    Author: {
      author_name: 'Micheline Nerne',
      author_email: 'mnerne1@amazon.com',
      author_image: 'http://dummyimage.com/776x665.png/dddddd/000000'
    },
    Post: {
      title: 'Duis at velit eu est congue elementum.',
      subtitle: 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
      content:
        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      cover: 'http://dummyimage.com/1588x568.png/ff4444/ffffff',
      author_name: 'Karita Carver',
      tag_name: 'Violet',
      published_on: '30/06/2023'
    }
  }
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, docsDefinition);

// OPTIONALLY
// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });

/* READINGS */
/**
 * Swagger 2.0 - https://www.npmjs.com/package/swagger-autogen/v/2.13.1#swagger-20
 * OAuth 2.0 configuration - https://swagger.io/docs/open-source-tools/swagger-ui/usage/oauth2/
 * https://swagger.io/docs/open-source-tools/swagger-ui/usage/oauth2/
 */
