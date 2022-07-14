import { Request, Response } from 'Express';
import { createUser } from '../service/user.service';
import { CreateUserInput } from '../schema/user.schema';
import logger from '../utils/logger';


//Notice how in our params we're passing the CreateUserInput Type
//Within our type we're defining what is expected to come in from CreateUserInput, and telling it to look at the body.
export async function createUserHandler(req: Request<{}, {}, CreateUserInput['body']>, res: Response) {
    try {
        const user = await createUser(req.body);
        return user;
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
}