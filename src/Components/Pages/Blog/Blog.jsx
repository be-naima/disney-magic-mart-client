import { Helmet } from "react-helmet";

const Blog = () => {
    return (
        <div className="md:w-9/12 md:mx-auto mx-2 ">
            <Helmet>
                <title>DisneyMagicMart | Blogs</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-20">
               
                <div className="card bg-base-100 shadow-xl bg-purple-200">
                  
                    <div className="card-body">
                        <h2 className="card-title text-purple-800 mb-2">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p><span className="font-bold">Access Token: </span>Access tokens are used to authenticate and authorize a user's access to an application. The client sends the access token with each request to the server, allowing the server to verify the user's identity and grant access to the requested resources. <br /> <br></br>
                        <span className="font-bold">Refresh Token: </span> Refresh tokens are used to obtain new access tokens after the previous one has expired. When an access token expires, the client sends the refresh token to the server to request a new access token. <br /><br></br>
                        Both tokens should be stored securely on the server-side.
                        </p>
                       
                    </div>
                   
                   
                </div>
                <div className="card bg-base-100 shadow-xl bg-sky-200">
                  
                    <div className="card-body">
                        <h2 className="card-title text-purple-800 mb-2">2. Compare SQL and NoSQL databases.</h2>
                        <p>SQL databases are relational databases that use tables to store data, with each table having a predefined schema. NoSQL databases are non-relational databases that do not use tables to store data, and do not have a predefined schema. <br /><br /> SQL databases are better suited for complex queries and transactions, while NoSQL databases are better suited for handling large amounts of unstructured or semi-structured data. <br /><br /> SQL databases are more rigid and require a fixed schema, while NoSQL databases are more flexible and allow for dynamic schema changes.
                        </p>
                       
                    </div>
                   
                   
                </div>
                <div className="card bg-base-100 shadow-xl bg-yellow-100">
                  
                    <div className="card-body">
                        <h2 className="card-title text-purple-800 mb-2">What is express js & Nest JS?</h2>
                        <p><span className="font-bold">Express.js: </span>Express.js is a popular Node.js web framework that simplifies the process of building web applications. It provides a set of features for handling HTTP requests, routing, middleware, and templating.. <br /> <br></br>
                        <span className="font-bold">NestJs: </span> NestJS is a progressive Node.js web framework that is built on top of Express.js. It provides a modular architecture and a set of powerful features for building scalable and maintainable server-side applications. NestJS leverages modern JavaScript features and design patterns to provide a robust and flexible development experience.. <br /><br></br>
                       
                        </p>
                       
                    </div>
                   
                   
                </div>
                <div className="card bg-base-100 shadow-xl bg-pink-200">
                  
                    <div className="card-body">
                        <h2 className="card-title text-purple-800 mb-2">What is MongoDB aggregate and how does it work?</h2>
                        <p>MongoDB Aggregation is a way to perform data analysis on MongoDB collections. It provides a set of tools for processing and transforming data with features such as filtering, grouping, sorting, and calculating aggregate values. The Aggregation Framework consists of several stages that perform specific operations on the input data and pass the output to the next stage. This can be used to create complex data pipelines that can handle large volumes of data and perform sophisticated analysis. It's useful for applications that require real-time analytics and reporting, such as business intelligence and data warehousing systems.
                        </p>
                       
                    </div>
                   
                   
                </div>
              
            </div>
        </div>
    );
};

export default Blog;