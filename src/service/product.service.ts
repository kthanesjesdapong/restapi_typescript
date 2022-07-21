import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { omit } from 'lodash';
import UserModel, { User } from '../models/user.model';
import ProductModel, { Product } from '../models/product.model';


export async function createProduct(input: DocumentDefinition<Omit<Product, 'createdAt' | 'updatedAt'>>) {

    return ProductModel.create(input);
}

export async function findProduct(query: FilterQuery<Product>, options: QueryOptions = { lean: true }) {
    return ProductModel.findOne(query, {}, options);
}

export async function findAndUpdateProduct(query: FilterQuery<Product>, update: UpdateQuery<Product>, options: QueryOptions) {
    return ProductModel.findOneAndUpdate(query, update, options);
}

export async function deleteProduct(query: FilterQuery<Product>) {
    return ProductModel.deleteOne(query);
}