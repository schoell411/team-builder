import React, {useState} from 'react';
import data from "./data";
import TeamMemberForm, {addTeamMember} from "./TeamMemberForm";
import TeamMembers from "./TeamMembers";
import './App.css';


function App() {
  const [teamMembers, setTeamMembers] = useState(data)

  const addNewTeamMember = teamMember => {
    setTeamMembers([...teamMembers,teamMember])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
      </header>
      <TeamMemberForm addNewTeamMember={addNewTeamMember} />
      <TeamMembers teamList={teamMembers}/>

    </div>
  );
}

export default App;
