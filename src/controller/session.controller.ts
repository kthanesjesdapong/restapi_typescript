import { Request, Response } from 'Express';
import { validatePassword } from '../service/user.service';
import { createSession } from '../service/session.service';



export async function createUserSessionHandler(req: Request, res: Response) {
    //Validate the User's password

    const user = await validatePassword(req.body);

    if (!user) {
        return res.status(401).send("Invalid email or password");
    }

    //Create a User session

    const session = createSession(user._id, req.get('user-agent') || '');

    //Create an Access token

    //Create a Refresh token

    //Return Access && Refresh tokens
}