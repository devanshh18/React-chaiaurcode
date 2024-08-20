import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <img
          src={data.avatar_url}
          alt={`profile picture`}
          className="w-32 h-32 rounded-full mx-auto"
        />
        <div className="flex justify-center mt-6">
          <div className="mx-6">
            <p className="text-2xl font-semibold">{data.followers}</p>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="mx-6">
            <p className="text-2xl font-semibold">{data.following}</p>
            <p className="text-gray-500">Following</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
