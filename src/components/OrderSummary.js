import { useNavigate } from "react-router-dom" 

const OrderSummary = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>Orderd Confirmed!</div>
            <button onClick={() => navigate(-1, {replace: true})}>go back</button>
        </>
    )
}

export default OrderSummary