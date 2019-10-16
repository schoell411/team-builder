import React, {useState} from 'react';
import data from "./data";
import TeamMemberForm from "./TeamMemberForm";
import TeamMembers from "./TeamMembers";
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState(data)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
      </header>
      <TeamMemberForm />
      <TeamMembers teamList={teamMembers}/>

    </div>
  );
}

export default App;
