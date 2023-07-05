import React from "react"

function ProfileForm() {
  return (
    <div className="Profile-form">
      <form>
        <div>
          <label for="profile-firstname">First Name : </label>
          <input
            name="username"
            id="profile-firstname"
            value={"first name"}
            disabled
          ></input>
        </div>
        <div>
          <label for="profile-lastname">Last Name : </label>
          <input
            name="username"
            id="profile-lastname"
            value={"last name"}
            disabled
          ></input>
        </div>
        <div>
          <label for="profile-username">User Name : </label>
          <input
            name="username"
            id="profile-username"
            value={"username"}
            disabled
          ></input>
        </div>
        <div>
          <label for="profile-email">Email : </label>
          <input
            name="username"
            id="profile-email"
            value={"email"}
            disabled
          ></input>
        </div>
      </form>
    </div>
  )
}

export default ProfileForm
