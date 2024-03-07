import {connectToDatabase} from "@/lib/database";
import User from "@/lib/database/schemas/user.schema";

type CreateUserProps = {
    email: string;
    fullName: string;
    clerkId: string;
}
export const createUser = async ({email, fullName, clerkId}: CreateUserProps) => {
    try {
        await connectToDatabase();

        const newUser = await User.create({email, fullName, clerkId})

        if (!newUser) {
            throw new Error("Failed to create user")
        }
        return JSON.parse(JSON.stringify(newUser));

    } catch (e) {
        console.error(e);
        throw new Error("Failed to connect to database");
    }
}