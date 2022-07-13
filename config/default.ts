import 'dotenv/config';



const un = process.env.MONGODB_UN;
const pw = process.env.MONGODB_PW;



export default {
    port: 8080,
    dbUri: `mongodb+srv:${un}:${pw}@cluster0.njwfez1.mongodb.net/?retryWrites=true&w=majority`
};