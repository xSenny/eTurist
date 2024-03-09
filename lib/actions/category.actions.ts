'use server'
import {connectToDatabase} from "@/lib/database";
import Category from "@/lib/database/schemas/category.schema";

export const createCategory = async({name, clerkID}: {name: string, clerkID: string}) => {
    try {
        console.log('Creating category')
        await connectToDatabase();
        const newCategory = await Category.create({name, creator: clerkID});
        if (!newCategory) {
            throw new Error("Could not create category");
        }
        return JSON.parse(JSON.stringify(newCategory));
    } catch (e) {
        console.log(e);
        throw new Error("Could not connect to database");
    }
}

export const getAllCategories = async() => {
    try {
        await connectToDatabase();
        const categories = await Category.find();
        if (!categories) {
            throw new Error("Could not find categories");
        }
        return JSON.parse(JSON.stringify(categories));
    } catch (e) {
        console.log(e);
        throw new Error("Could not connect to database");
    }
}