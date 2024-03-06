import {SignIn} from "@clerk/nextjs";

const SignInPage = () => {
    return (
        <div className={"bg-primary-700 flex justify-center items-center w-full h-screen"}>
            <SignIn />
        </div>
    )
}

export default SignInPage;