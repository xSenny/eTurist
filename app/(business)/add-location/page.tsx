import LocationForm from "@/components/shared/LocationForm";
import {auth} from "@clerk/nextjs";

const AddLocation = () => {

    const {sessionClaims} = auth();
    //get the user id from the session
    const userId = sessionClaims?.userId as string;
    console.log(userId);
    return (
        <LocationForm type={"Add"} userId={userId}/>
    )
}

export default AddLocation;