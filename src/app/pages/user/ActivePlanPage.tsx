import { useAuth } from "../../modules/auth"

const ActivePlanPage = () => {
    const { currentUser } = useAuth();
    console.log('----currentUser---', currentUser);
    return (
        <div className="container">
            <div>First name : {currentUser?.first_name}</div>
            <div>Last name : {currentUser?.last_name}</div>
            <div>Email : {currentUser?.email}</div>
        </div>
    )
}

export { ActivePlanPage }