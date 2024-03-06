import {auth, currentUser, SignedIn} from "@clerk/nextjs";

const page = () => {

    const user = currentUser()

    return (
        <div>

        </div>
    )

}

export default page;