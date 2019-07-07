'use strict';
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-lambda');
const schema = require('./schema');
const blogSource = require('./datasource');
const server = new ApolloServer({schema, dataSources: () => ({
  blogAPI: new blogSource()
})}); 

//Function for listing all blogs
exports.listBlogs = server.createHandler((event, context) => {
  const headers = event.headers;
  const functionName = context.functionName;
   return {
       schema: schema,
       context: {
           headers,
           functionName,
           event,
           context
       }
   };
});

//Function for searching blog/s with respect to specific author
exports.searchBlogs =  cors(server.createHandler((event, context) => {
  const headers = event.headers;
  const functionName = context.functionName;
   return {
       schema: schema,
       context: {
           headers,
           functionName,
           event,
           context
       }
   };
}));

//Function for Creating new Blog
exports.createBlog = cors(server.createHandler((event, context) => {
  const headers = event.headers;
  const functionName = context.functionName;
   return {
       schema: schema,
       context: {
           headers,
           functionName,
           event,
           context
       }
   };
}));
