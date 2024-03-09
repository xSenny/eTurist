import {connectToDatabase} from "@/lib/database";
import User from "@/lib/database/schemas/user.schema";
import {revalidatePath} from "next/cache";

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

type UpdateUserProps = {
    clerkId: string;
    user: {
        email?: string;
        fullName?: string;
    }
}

export const updateUser = async ({clerkId, user}: UpdateUserProps) => {
    try {
        await connectToDatabase();

        const updatedUser = await User.findOneAndUpdate({clerkId}, user, {new: true});

        if (!updatedUser) {
            throw new Error("Failed to update user")
        }

        return JSON.parse(JSON.stringify(updatedUser));

    }catch (e) {
        console.error(e);
        throw new Error("Failed to connect to database");
    }
}

export async function deleteUser(clerkId: string) {
    try {
        await connectToDatabase()

        // Find user to delete
        const userToDelete = await User.findOne({ clerkId })

        if (!userToDelete) {
            throw new Error('User not found')
        }

        // Unlink relationships
        // await Promise.all([
        //     // Update the 'events' collection to remove references to the user
        //     Event.updateMany(
        //         { _id: { $in: userToDelete.events } },
        //         { $pull: { organizer: userToDelete._id } }
        //     ),
        //
        //     // Update the 'orders' collection to remove references to the user
        //     Order.updateMany({ _id: { $in: userToDelete.orders } }, { $unset: { buyer: 1 } }),
        // ])

        // Delete user
        const deletedUser = await User.findByIdAndDelete(userToDelete._id)
        revalidatePath('/')

        return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
    } catch (error) {
        throw new Error('Failed to delete user')
    }
}