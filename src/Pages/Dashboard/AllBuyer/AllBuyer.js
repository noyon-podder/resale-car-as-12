import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";

const AllBuyer = () => {

  const { data: buyerData, isLoading, refetch} = useQuery({
    queryKey: ["buyerData"],
    queryFn: async () => {
      const res = await fetch("https://resale-server-two.vercel.app/buyer");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }
 
  const handleDelete = id => {
    fetch(`https://resale-server-two.vercel.app/buyer-delete/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
      if(data.deletedCount > 0){
        refetch()
        toast.success('Delete Successfully')
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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {buyerData.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                
                <td>
                  <button className="btn btn-xs btn-error" onClick={() => handleDelete(buyer._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyer;
