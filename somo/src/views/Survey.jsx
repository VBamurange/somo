import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import axiosClient from "../axios";
import { useStateContext } from "../contexts/ContextProvider";
import TButton from "../core/TButton";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";


export default function Surveys() {
  const { showToast } = useStateContext();
  const [surveys, setSurveys] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(false);

  const onDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this survey?")) {
        showToast('The survey was deleted');
      
    }
  };

  const onPageClick = (link) => {
    getSurveys(link.url);
  };
const youtubeLink = ''
  const getSurveys = (url) => {
    url = url || "/survey";
    setLoading(true);
    axiosClient.get(url).then(({ data }) => {
      setSurveys(data.data);
      setMeta(data.meta);
      setLoading(false);
    });
  };

  useEffect(() => {
    const dummySurveys = [
      {id: 1, title: ' ENGLISH I', description: 'Description for Course 1', youtubeLink: 'https://www.youtube.com/watch?v=QXVzmzhxWWc'},
      {id: 2, title: 'AFRICAN HISTORY', description: 'Description for Course 2', youtubeLink: 'https://www.youtube.com/watch?v=TBf3pA3L1OQ'},
      {id: 3, title: 'BASICS OF BUSINESS', description: 'Description for Course 3', youtubeLink: 'https://www.youtube.com/watch?v=69dLyztc-As'},
      {id: 4, title: 'CREATIVITY, INNOVATION AND ENTREPRENEURSHIP', description: 'Description for Course 4', youtubeLink: 'https://www.youtube.com/watch?v=bPMyUQoGJms'},
    ];

    setSurveys(dummySurveys);
    setLoading(false);
  }, []);

  return (
    <div>
      {loading && <div className="user-details">Loading...</div>}
      {!loading && (
        <div>
          {surveys.length === 0 && (
            <div className="py-8 text-center text-gray-700">
              Courses Available 
            </div>
          )}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {surveys.map((survey) => (
              <div key={survey.id} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-x1">{survey.title}</h3>
                <p className="text-gray">{survey.description}</p>
                <div className="aspect-w">
                  <ReactPlayer
                  url={survey.youtubeLink}
                  width="100%"
                  height="400px"
                  controls={true}
                  />
          </div> 
          </div>
          ))}
          </div>
          {surveys.length > 0 && <Link meta={meta} onPageClick={onPageClick} />}
          <footer className="mt-8">
            <p>2023 SOMO.All rights reserved. Contact us at info@somo.com</p>
          </footer>
        </div>
      )}
    </div>
  );
            };
