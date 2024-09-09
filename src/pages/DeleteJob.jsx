import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteJob = async () => {
      const response = await fetch(
        `https://database2-ocx4.onrender.com/jobs/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
    };

    deleteJob();

    return navigate("/jobs");
  }, []);

  return (
    <>
      <div>Deleting Job......</div>
    </>
  );
};

export default DeleteJob;
