import { useState } from "react";

export default function Forms(){
    // const [fullName, setfullName] = useState("");
    // const[username, setUsername] = useState("");
    // const handleChangeFullname = (event)=>{
    //     setfullName(event.target.value);
    // }

    // const handleOnchangeUsername = (event)=>{
    //     setUsername(event.target.value);
    // }

    const[formData, setformData] = useState({
        fullName : "",
        username : ""
    });

    const handleFormData = (event) => {
    const { name, value } = event.target;
    setformData((prevData) => ({
      ...prevData,          // keep old values
      [name]: value,        // update the changed field
    }));
  };

  let handleSubmit = (event)=>{
      event.preventDefault();
      console.log(formData);
      setformData({
        fullName : "",
        username : ""
      });
  }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name </label>
            <input type="text"placeholder="Enter your name" value={formData.fullName} id="fullname" name = "fullName"onChange={handleFormData} />
            <br />
            <br />
            

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Enter username " id="username" value={formData.username} name="username" onChange={handleFormData}/>
            <br />
            <button>Submit</button>
        </form>
    );
}