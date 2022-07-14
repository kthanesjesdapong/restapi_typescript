import { object, string, TypeOf } from 'zod';


//Creating the object schema that is going to be passed into our validateResources
export const createUserSchema = object({
    body: object({
        name: string({
            required_error: 'Name is required'
        }),
        password: string({
            required_error: 'Password is required'
        }).min(6, "Password must be 6 character or higher"),
        passwordConfirmation: string({
            required_error: 'Passwords Confirmation is required'
        }),
        email: string({
            required_error: "Email is required"
        }).email('Not a valid Email')
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ['passwordConfirmation']
    })
});

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, "body.passwordConfirmation">;


//Zod provides us a way to check if the password fields and password Confirmation matches,