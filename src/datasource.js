//TODO:

/****
 * Validation for entries for search of blog basically happy case scenerio is handelled but search in likely scenerio
 * for example if user enters only "mu" for searching blogs written by Mr. Mukul than our search have to return all blogs
 * having author name start with "mu"i.e. like search is left to implement.[Method: getBlogByAuthor()]
*/

/****
 * Integration with any DB is required; Temporarily i have used test data everywhere.(Array Of Objects)
 */

/***
 * Creation is normal insertion till now but can introduce upsert functionality i.e. if any blog is present of same title
 * than update it instead of inserting it again [Method: createNewBlog()]
 */


/* Test data */
var blogs = [
    { id: 1, author: "Vicky", title: 'Introduction to APOLLO GRAPHQL', description:'xyz',summary:'abc'},
    { id: 2, author: "Mukul", title: 'Welcome to SERVERLESS', description:'xyz',summary:'abc'},
    { id: 3, author: "Vinay", title: 'Advanced AWS LAMBDA',description:'xyz',summary:'abc'},
    { id: 4, author: "Suresh", title: 'GRAPHCOOL is Cool',description:'xyz',summary:'abc'},
];


//Blog API class containing methods for search and insertion of single blog
class blogAPI {
    constructor() {
    }

    //Method for searching single blog with respect to entered author
    async getBlogByAuthor({ author }){
        return new Promise(async (resolve, reject) => {
            var allowedBlogs = []
            allowedBlogs.push(blogs.map(function(value) {
                if(value.author == author){
                    return value;
                }else{
                    return {};
                }
            }))
          resolve(allowedBlogs);
        });
    }

    //Create new blog method
    async createNewBlog({ title, description, summary, author }){
        return new Promise(async (resolve, reject) => {
            blogs.push({author:author,title:title,description:description,summary:summary})
            resolve(blogs);
        });
    }
  }

  module.exports = blogAPI;