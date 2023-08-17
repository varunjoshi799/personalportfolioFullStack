// NODE_ENV = 'development'
// NODE_ENV = 'production'

const baseURL =
    process.env.NODE_ENV === "production" ? "api/v1" : "http://localhost:3002";

export default baseURL;
