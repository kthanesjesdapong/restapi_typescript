import { Request, Response } from 'express';
import { CreateProductInput, UpdateProductInput } from '../schema/product.schema';
import { createProduct, deleteProduct, findAndUpdateProduct, findProduct } from '../service/product.service';
import logger from '../utils/logger';


//We've defined the types in our schemas and now we can just pass them into our params
export async function createProductHandler(req: Request<{}, {}, CreateProductInput['body']>, res: Response) {

    //Fetching userId
    //Destructing and aliasing
    const { _id: userId } = res.locals.user;

    const { body } = req;

    try {
        //createProduct takes in Title,Description,Price, and Image, 
        //And we'll have a product associated with the user to log to their cart.
        const product = await createProduct({ ...body, user: userId });
        return res.send(product);
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
}

export async function getProductHandler(req: Request, res: Response) {

    const { productId } = req.params;
    const product = await findProduct({ productId });

    //if the product doesn't exist, then we send our 404
    if (!product) res.sendStatus(404);

    //Send our product
    return res.send(product);
}
export async function updateProductHandler(req: Request<UpdateProductInput['params']>, res: Response) {
    //Fetching userId
    //Destructing and aliasing
    const { _id: userId } = res.locals.user;

    const productId = req.params.productId;
    const update = req.body;

    const product = await findProduct({ productId });

    //If the product doesnt exist
    if (!product) {
        return res.sendStatus(404);
    }

    //If the user creating the product isnt the one updating it, send a forbidden
    if (product.user !== userId) {
        return res.sendStatus(403);
    }

    const updatedProduct = await findAndUpdateProduct({ productId }, update, { new: true });

    return res.send(updatedProduct);
}


export async function deleteProducthandler(req: Request, res: Response) {
    //Fetching userId
    //Destructing and aliasing
    const { _id: userId } = res.locals.user;

    const productId = req.params.productId;

    const product = await findProduct({ productId });

    //If the product doesnt exist
    if (!product) {
        return res.sendStatus(404);
    }

    //If the user creating the product isnt the one deleting it, send a forbidden
    if (product.user !== userId) {
        return res.sendStatus(403);
    }

    await deleteProduct({ productId });

    return res.sendStatus(200);
}