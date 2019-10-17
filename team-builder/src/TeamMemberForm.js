import React, {useState} from "react";

const TeamMemberForm = props => {
    const [teamMember, setTeamMember] = useState({
        name: "", role: "", email: ""
    });
    const changeHandler = event => {
        setTeamMember({...teamMember, [event.target.name]:event.target.value})
    }
    const submitForm = event => {
        event.preventDefault();
        props.addNewTeamMember(teamMember);
        setTeamMember({name: "", role: "", email: ""})
    }
    return (
        <form onSubmit={submitForm}>
            <input
                name="name"
                id="name"
                placeholder="Name"
                onChange={changeHandler}
                value={teamMember.name}
            />
            <input
                name="role"
                id="role"
                placeholder="role"
                onChange={changeHandler}
                value={teamMember.role}
            />
            <input
                name="email"
                id="email"
                placeholder="email"
                onChange={changeHandler}
                value={teamMember.email}
            />
            <button type="submit">Submit New Team Member</button>
        </form>
    )
}

export default TeamMemberForm;