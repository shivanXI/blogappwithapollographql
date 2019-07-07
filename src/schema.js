const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

const typeDefs = `
  type Blog {
    description: String!
    title: String!
    author: String!
    summary: String!
    id: ID!
  }
  type Query {
    blogs: [Blog]!
    searchBlogs(author: String!): [Blog] 
    createBlog(title: String!, description: String!, summary: String!, author: String!): [Blog]!
  }

`;

/* Test data */
blogs = [
    { id: 1, author: "Vicky", title: 'Introduction to APOLLO GRAPHQL', description:'xyz',summary:'abc'},
    { id: 2, author: "Mukul", title: 'Welcome to SERVERLESS', description:'xyz',summary:'abc'},
    { id: 3, author: "Vinay", title: 'Advanced AWS LAMBDA',description:'xyz',summary:'abc'},
    { id: 4, author: "Suresh", title: 'GRAPHCOOL is Cool',description:'xyz',summary:'abc'},
];


const resolvers = {
  Query: {
    blogs: () => blogs,
    searchBlogs: async (_, { enteredAuthor },{ dataSources }) => {
        const { filteredBlogs } = await dataSources.blogAPI.getBlogByAuthor({ author: enteredAuthor})
        return filteredBlogs;
    },
    createBlog: async (_, { intitle, indescription, insummary, inauthor },{ dataSources }) => {
        const { afterInsertion } = await dataSources.blogAPI.createNewBlog({ title:intitle, description:indescription, summary:insummary, author:inauthor })
        return afterInsertion;
    },
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});