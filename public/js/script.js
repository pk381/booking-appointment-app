let appointments = document.getElementById("appoinments");

let details = document.querySelectorAll("input");


document.getElementById("btn").addEventListener("click",async (e) => {

  e.preventDefault();

  let obj = {
    email: details[2].value,
    phone: details[1].value,
    name: details[0].value
  };

  try {

    const res = await axios.post('http://localhost:4000/add-user', obj)

    newAppointment(res.data.user);

    details[2].value = "";
    details[1].value = "";
    details[0].value = "";
    
  } catch(err) {
    console.log(err);
  }
});

window.addEventListener("DOMContentLoaded", async () => {

  try {
    const res = await axios.get("http://localhost:4000/get-users");
    for (var i = 0; i < res.data.users.length; i++) {
      newAppointment(res.data.users[i]);
    }
  } 
  catch(err) {
    console.log(err);
  }
});

function newAppointment(obj) {
  
  let newItem = document.createElement("li");

  newItem.className = "item";

  newItem.appendChild(
    document.createTextNode("" + obj.name + " " + obj.email + " " + obj.phone)
  );

  let div = document.createElement("div");

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn";

  deleteBtn.appendChild(document.createTextNode("Delete"));

  div.appendChild(deleteBtn);

  newItem.appendChild(div);

  deleteBtn.onclick = async (e)=>{

    let li = e.target.parentElement;

    try{
     await axios.delete("http://localhost:4000/delete-user/" + obj.email);
     appointments.removeChild(li);
    }
    catch(err){
      console.log(err);
    }
    
  };

  let editBtn = document.createElement("button");

  editBtn.className = "btn";
  editBtn.appendChild(document.createTextNode("Edit"));
  div.appendChild(editBtn);
  newItem.appendChild(div);

  editBtn.onclick = async (e)=>{

    let li = e.target.parentElement;
    appointments.removeChild(li);

    details[0].value = obj.name;
    details[1].value = obj.phone;
    details[2].value = obj.email;
    
    try{
      await axios.delete('http://localhost:4000/delete-user/'+obj.email);
    }
    catch(err){
      console.log(err);
    }
    
  };

  appointments.appendChild(newItem);
}
