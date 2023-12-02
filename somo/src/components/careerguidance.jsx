import React, { useState } from "react";
import ReactPlayer from "react-player";

const CareerGuidance = () => {
    const successfulPeople = [
        {
            id: 1,
            name: "Steve Jobs",
            industry: "TECHNOLOGY",
            videoLink: "https://www.youtube.com/watch?v=Tuw8hxrFBH8",

        },
        
        {
            id: 2,
            name: " Fred Swaniker",
            industry: "BUSINESS",
            videoLink: "https://www.youtube.com/watch?v=wa5Dt2busNA",
        },
    ];
    const [selectedPerson, setSelectedPerson] = useState(null);

    const handlePersonClick = (person) => {
        setSelectedPerson(person);
    };

    return (
        <div>
            <h1 className="text-3x">Career Guidance</h1>
            <br></br>
            <div className="temptation">
                {successfulPeople.map((person) => (
                    <div 
                    key={person.id}
                    onClick={() => handlePersonClick(person)}>
                     <h3 className="text-x1">{person.name}</h3>
                     <p className="text-x4">{person.industry}</p>
                     <ReactPlayer
                     url={person.videoLink}
                     width="100%"
                     height="400px"
                     controls={true}
                     className="mb-2"
                     />
                    </div> 
                ))}
            </div>
            {selectedPerson && (
                <div className="mt-8">
                 <h2 className="text-2x1">{selectedPerson.name}</h2>
                 <p className="text-gray-700">
                    {selectedPerson.name} shares insights about their journey in the {selectedPerson.industry} industry.
                </p>
                <p className="trusted"> Watch the video below for valuable career guidance:
                </p>
                <ReactPlayer
                  url={selectedPerson.videoLink}
                  width="100%"
                  height="400px"
                  controls={true}
                  className="approved"
                />
            </div>    

          )}
        </div>
    );
};

export default CareerGuidance;