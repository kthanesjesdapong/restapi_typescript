import jwt from 'jsonwebtoken';
import config from 'config';


const privateKey = config.get<string>('privateKey');
const publicKey = config.get<string>('publicKey');

//sign jwt with PRIVATE key
export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {

    //We're using our privateKey to sign the payload
    //We want to provide an algorithmn options
    return jwt.sign(object, privateKey, {
        ...(options && options),
        algorithm: 'RS256'
    });
}

//verify jwt with PUBLIC key
export function verifyJwt(token: string, keyName: 'acesssTokenPublicKey' | 'refreshTokenPublicKey') {

    try {
        const decoded = jwt.verify(token, publicKey);
        return {
            valid: true,
            expired: false,
            decoded
        };
    } catch (e: any) {
        return {
            valid: false,
            expired: e.message === 'jwt expired',
            decoded: null
        };
    }
}