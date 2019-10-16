import React, {useState} from "react";
import ReactDOM from "react-dom";

const TeamMembers = props => {
    return (
        <div className="teamMemberList">
            {props.teamList.map((person, index) => {
                return (
                    <div className="teamMemberCard" key={index}>
                        <h2>{teamList.name}</h2>
                        <p>{teamList.role}</p>
                        <p>{teamList.email}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default TeamMembers;