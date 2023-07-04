import React from "react"

function ProfileForm() {
  return (
    <div>
      <form>
        <div>
          <label for="profile-firstname">First Name</label>
          <input
            name="username"
            id="profile-firstname"
            value={"username"}
            disabled
          ></input>
        </div>
        <div>
          <label for="profile-lastname">First Name</label>
          <input
            name="username"
            id="profile-lastname"
            value={"username"}
            disabled
          ></input>
        </div>
        <div>
          <label for="profile-username">First Name</label>
          <input
            name="username"
            id="profile-username"
            value={"username"}
            disabled
          ></input>
        </div>
        <div>
          <label for="profile-email">First Name</label>
          <input
            name="username"
            id="profile-email"
            value={"username"}
            disabled
          ></input>
        </div>
      </form>
    </div>
  )
}

export default ProfileForm
