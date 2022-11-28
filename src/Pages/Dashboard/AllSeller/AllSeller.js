import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";

const AllSeller = () => {
  // const [sellerData, setSellerData] = useState({});

  const { data: sellerData, isLoading, refetch } = useQuery({
    queryKey: ["sellerData"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/seller");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }
  const handleSellerVerify = seller => {
    fetch(`http://localhost:5000/verify/${seller?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({verification: true})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            toast.success('Seller Verified')
            refetch()
        }
    })
  }

  const handleDelete = id => {
    fetch(`http://localhost:5000/seller-delete/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
            toast.success('Delete Successfully')
            refetch()
        }
    })
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Verified</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sellerData.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                 {
                    !seller.verification ?  <button className="btn btn-xs btn-info" onClick={() => handleSellerVerify(seller)}>Verify</button> :
                    <span className="text-green-600 text-xl font-semibold">verified</span>
                 }
                </td>
                <td>
                  <button className="btn btn-xs btn-error" onClick={() => handleDelete(seller._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
