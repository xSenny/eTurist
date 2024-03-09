import {auth, currentUser, SignedIn} from "@clerk/nextjs";
import NavBar from "@/components/shared/NavBar";

const page = () => {

    const user = currentUser()

    return (
        <div className={"min-h-[100vh] bg-dotted-pattern"}>

        </div>
    )

}

export default page;