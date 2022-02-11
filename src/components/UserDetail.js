import { useParams } from "react-router-dom"

const UserDetail = () => {
    const params = useParams()
    const userId = params.userId
    return (
        <div>Users details {userId} </div>
    )
}

export default UserDetail