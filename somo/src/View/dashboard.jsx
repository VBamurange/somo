
import { useEffect, useState } from "react";
import axiosClient from "../axios.jsx";


export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`/dashboard`)
      .then((res) => {
        setLoading(false);
        setData(res.data);
        return res;
      })
      .catch((error) => {
        setLoading(false);
        return error;
      });
  },);

  return (
   <div>
    <h1>Welcome to SOMO where education becomes a reality</h1>
    
      <img src="https://blog.shi.com/wp-content/uploads/2021/02/education-technology-trends-scaled.jpg" alt="image"></img>
      <p> Learn all you can in the simplest way possible with Somo. Navigate to courses to enrollment in our extraordinary courses today!</p>
    
   </div>
  );
}
