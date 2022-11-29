import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";

const ReportProduct = () => {

  const { data: reportProducts, isLoading, refetch} = useQuery({
    queryKey: ["reportProducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/report-item");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }
 
  const handleDelete = id => {
    fetch(`http://localhost:5000/report-item/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount){
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
              <th>Product Name</th>
              <th>Seller Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {reportProducts.map((report, i) => (
              <tr key={report._id}>
                <th>{i + 1}</th>
                <td>{report.name}</td>
                <td>{report.sellerName}</td>
                
                <td>
                  <button className="btn btn-xs btn-error" onClick={() => handleDelete(report._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportProduct;
