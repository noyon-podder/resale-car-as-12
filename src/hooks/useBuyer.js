import { useEffect, useState } from "react";

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(email){
            fetch(`http://localhost:5000/dashboard/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsBuyer(data.isBuyer)
                setIsLoading(false)
            })
        }
    } , [email])
    return [isBuyer, isLoading]
}
export default useBuyer;