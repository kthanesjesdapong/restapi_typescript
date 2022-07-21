import { object, number, string, TypeOf } from 'zod';

//Defining what our payload will look like
const payLoad = {
    body: object({
        title: string({
            required_error: "Title is required"
        }),
        description: string(
            {
                required_error: "Description is required"
            }
        ).min(120, 'Description must be 120 characters or more.'),
        price: number(
            {
                required_error: "Price is required"
            }
        ),
        image: string(
            {
                required_error: "Image is required"
            }
        )
    })
};

//Defining what our params will look like
const params = {
    params: object({
        productId: string({
            required_error: "productId is required"
        })
    })
};



//spreading our payload || params for schema
export const createProductSchema = object({
    ...payLoad,
});

export const updateProductSchema = object({
    ...payLoad,
    ...params
});

export const deleteProductSchema = object({
    ...params
});

export const getProductSchema = object({
    ...params
});


//Defining the type with the schema defined earlier.
export type createProductInput = TypeOf<typeof createProductSchema>;
export type updateProductSchema = TypeOf<typeof updateProductSchema>;
export type deleteProductSchema = TypeOf<typeof deleteProductSchema>;
export type getProductSchema = TypeOf<typeof getProductSchema>;



