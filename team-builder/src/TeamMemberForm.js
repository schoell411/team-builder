import React from "react";

const TeamMemberForm = props => {
    const [teamMember, setTeamMember] = useState({
        name: "", role: "", email: ""
    });
    const changeHandler = event => {
        setTeamMember({...teamMember, [event.target.name]:event.target.value})
    }
    return (
        <form>
            <input
                name="name"
                id="name"
                placeholder="name"
            />
            <input
                name="role"
                id="role"
                placeholder="role"
            />
            <input
                name="email"
                id="email"
                placeholder="email"
            />

        </form>
    )
}

export default TeamMemberForm;