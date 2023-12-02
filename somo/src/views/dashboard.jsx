
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
    <div className="dashboard-container">
      <h2>WELCOME TO THE ISOMO INITIATIVE</h2>
      <br></br>
        <div>
          <img src="https://blog.shi.com/wp-content/uploads/2021/02/education-technology-trends-scaled.jpg" alt="Dashboard Image" className="dashboard-image"/>
          <p className="dashboard-description"> Access education in the easiest way. Navigate to courses and see the available courses.</p>
          </div>
          <div className="vision-mission">
            <h3> Vision and Mission</h3>
            <br></br>
            <img src="https://profuturo.education/wp-content/uploads/2021/05/shutterstock_1136105582-scaled.jpg" alt="image" className="dashboard-image2"></img>
            <p className="dashboard-description2">Our mission is to reduce lack of access of education on the continent by the use of technology</p>
          </div>
    
      <footer className="dashboard-footer">
        <p> 2023 SOMO. All rights reserved. Contact us at info@somo.com</p>
      </footer>
    </div>
  );
      }
