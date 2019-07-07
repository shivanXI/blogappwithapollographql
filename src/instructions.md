COMMANDS

#Setup
npm i

#For Listing All Blogs
serverless invoke local --function listBlogs --data '{"httpMethod": "POST", "body": "{\"query\":\"{blogs{title description summary author}}\"}"}'

#For Searching Blog with respect to entered author
serverless invoke local --function searchBlogs --data '{"httpMethod": "POST", "body": "{\"query\":\"{blogs{"author":"Mukul"}}\"}"}'






