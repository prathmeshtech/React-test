import React, { useState } from "react";

const FormHandeling = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const [users, setUsers] = useState([]);

  const submitUser = (evnt) => {
      evnt.preventDefault();
    const newEntry = { fname: fname, lname: lname };

    setUsers([...users, newEntry]);
    console.log(users);
  };
  return (
    
    <div style={{ padding: "20px 20px", margin: "10px 0" }}>
      <h4>The React Test</h4>
      <form action="" onSubmit={submitUser}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            id="fname"
            autoComplete="off"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            id="lname"
            autoComplete="off"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <button variant="contained" type="submit">
          Submit
        </button>

        <div>
      {
        users.map((curr)=>{
          return (
            <div>
              {curr.fname}
              <span> {curr.lname}</span>
            </div>
          )
        })
      }
    </div>
      </form>
    </div>
  );
};

export default FormHandeling;
