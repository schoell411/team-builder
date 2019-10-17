import React, {useState} from "react";
import ReactDOM from "react-dom";

const TeamMembers = props => {
    return (
        <div className="teamMemberList">
            {props.teamList.map((person, index) => {
                return (
                    <div className="teamMemberCard" key={index}>
                        <h2>{person.name}</h2>
                        <p>{person.role}</p>
                        <p>{person.email}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default TeamMembers;