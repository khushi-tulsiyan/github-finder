import React from "react";

const User = ({ user }) => {
    return (
        <div>
            { user ? (
                <div>
                    <img src = {user.avatar_url} alt = {user.login} width="100"/>
                    <h2> {user.login}</h2>
                    <p>{user.bio}</p>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                    </div> 
            ) : (
                <p>No User Found</p>
            )}
        </div>

    );
};

export default User;