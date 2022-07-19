import 'dotenv/config';



const un = process.env.MONGODB_UN;
const pw = process.env.MONGODB_PW;



export default {
    port: 8080,
    dbUri: `mongodb+srv:${un}:${pw}@cluster0.njwfez1.mongodb.net/?retryWrites=true&w=majority`,
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey: `-----BEGIN PUBLIC KEY-----
    MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALjdeZ1Tq/olQPCW7a5RjHD9+DOUv3FUi0sNxt2Hz1UkwLWxj4dmAIefOWCJr9KLZaMiZ6WTEs4gzcY2MD0CCLsCAwEAAQ==
-----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIIBOwIBAAJBALjdeZ1Tq/olQPCW7a5RjHD9+DOUv3FUi0sNxt2Hz1UkwLWxj4dmAIefOWCJr9KLZaMiZ6WTEs4gzcY2MD0CCLsCAwEAAQJBAJYA0D/CtxeAxxLxxObfsO+2hIGGP1l8WpKKGUWEf837ZO9g7bW5cfOaxGuzlGlp0NjojWdf7L+hHtTRIolKZhECIQDmNaUquenELOY4eSbToyUMSnzGdPuwaLGhb3uiHkELfQIhAM2TXOhnvX8GBXWuG+QpejrLAwKxfqsoUOtvu6CB9OqXAiEAzX2tRYpWhOqfRmG+qsPCWkpTPsNFt558kOH2tivTW/ECIGhYYTMx3PSJqOHHoy6XgwwumXOXhlT4HMK0LwdUj203AiBMNXYoS6PHgWpYDDS+JcxSSN/lhX8fiQh4SvWrwNtasw==
-----END RSA PRIVATE KEY-----`
};