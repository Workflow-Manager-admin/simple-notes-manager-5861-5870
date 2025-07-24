const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Express API',
      version: '1.0.0',
      description: 'A simple Express API documented with Swagger',
    },
    components: {
      schemas: {
        Note: {
          type: 'object',
          properties: {
            id:       { type: 'integer', example: 1 },
            title:    { type: 'string',  example: 'Shopping List' },
            content:  { type: 'string',  example: 'Eggs, Milk, Bread' },
            createdAt:{ type: 'string',  format: 'date-time', example: '2024-06-17T00:00:00.000Z' },
            updatedAt:{ type: 'string',  format: 'date-time', example: '2024-06-17T00:01:00.000Z' },
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
