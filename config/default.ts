import 'dotenv/config';



const un = process.env.MONGODB_UN;
const pw = process.env.MONGODB_PW;



export default {
    port: 8080,
    dbUri: `mongodb+srv:${un}:${pw}@cluster0.njwfez1.mongodb.net/?retryWrites=true&w=majority`,
    saltWorkFactor: 10,
    accessTokenTtl: `15m`,
    refreshTokenTtl: '1y',
    publicKey: `-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC9M2dPlWd7swAFHMcOQzq7UvMh
    VXTzj+uUfjIRzXI+e78TzWh34qxEQrOXBKpJaJFkZ1R3w3W0OY9dKUiNEQVmPEBh
    GDCtehXCw/6/FgU/3RDiBSy0dR8ayyCl57NJd9ic7zAZ0uGbASJtLcHb9B+7wUxV
    bnWu7oi70p9xXLzdywIDAQAB
    -----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIICXQIBAAKBgQC9M2dPlWd7swAFHMcOQzq7UvMhVXTzj+uUfjIRzXI+e78TzWh3
    4qxEQrOXBKpJaJFkZ1R3w3W0OY9dKUiNEQVmPEBhGDCtehXCw/6/FgU/3RDiBSy0
    dR8ayyCl57NJd9ic7zAZ0uGbASJtLcHb9B+7wUxVbnWu7oi70p9xXLzdywIDAQAB
    AoGBALgx4iNVhcCk3KEdiiE1jGkwcWkDZG92rtgLH727MLzqBnVF5a3JbQKrmWGt
    9gavmdSQ0GgkT2QdIZiGB47mgkR++uzBT2AO3xijXH+BZkVRQ8R0jOuX/uG7pFaU
    vx7KjAOU1D19hb4Ds7ViHJjCR74JLkfQIT/a2kRpTMe6hjqhAkEA7pTwc0E1v5D8
    fRK4zMdKAP6auB4jXqrc6vo4XPWWBMMVCMhpZsbNggWKep6th57xXZfXXJxTkbMw
    lM3snGHbsQJBAMsDik5rrCtE40jU0ErU8j8TaDiXp/l4kGhUOVZArZCUZZhVXAT5
    bQOGiM7KZoyRWjA7vJ3aDAzSyU9tiOD9/DsCQClhbd8ftVnXpONwptrlygEoJ9+9
    Yncd/ZlH8xS0h+OljnVqhVWNL8HYgi9IbGK0f7qzBmiKuLfxs4BrwxlQo9ECQQC/
    EOXqSIwRbRQ8R46B30je9HTyTklZEY9XoW0VMGop2ICFjlC8ncNrvgKkHPnG8kXf
    f1lVdxJAP2IXzw80MdZhAkA/dfZrIBt3QZUAtKrc0JbMueZtp2ZRAQfn3tL/HYsZ
    60IwbktKBCz7xoJ8vm41QwiAsDPmxIp67trlskamqctB
    -----END RSA PRIVATE KEY-----`
};