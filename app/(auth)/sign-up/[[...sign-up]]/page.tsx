import {SignUp} from "@clerk/nextjs";

const page = () => {
    return (
        <div className={"bg-primary-700 flex justify-center items-center w-full h-screen"}>
            <SignUp />
        </div>
    )
}

export default page;