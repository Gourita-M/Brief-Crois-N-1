//for tests 

const users = [
  {
    name: "Emma Johnson",
    role: "Manager",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    email: "emma.johnson@example.com",
    phone: "+1 555-1023",
    inroom: "False",
  },
  {
    name: "Lucas Smith",
    role: "IT Technician",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "lucas.smith@example.com",
    phone: "+1 555-2214",
    inroom: "False",
  },
  {
    name: "Olivia Brown",
    role: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    email: "olivia.brown@example.com",
    phone: "+1 555-8872",
    inroom: "False",
  },
  {
    name: "Ethan Davis",
    role: "Security Agent",
    photo: "https://randomuser.me/api/portraits/men/18.jpg",
    email: "ethan.davis@example.com",
    phone: "+1 555-3131",
    inroom: "False",
  },
  {
    name: "Sophia Miller",
    role: "Cleaner",
    photo: "https://randomuser.me/api/portraits/women/9.jpg",
    email: "sophia.miller@example.com",
    phone: "+1 555-5582",
    inroom: "False",
  },
  {
    name: "Michael Wilson",
    role: "Manager",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    email: "michael.wilson@example.com",
    phone: "+1 555-9912",
    inroom: "False",
  },
  {
    name: "Ava Martinez",
    role: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/28.jpg",
    email: "ava.martinez@example.com",
    phone: "+1 555-6634",
    inroom: "False",
  },
  {
    name: "Noah Anderson",
    role: "IT Technician",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    email: "noah.anderson@example.com",
    phone: "+1 555-1178",
    inroom: "False",
  },
  {
    name: "Isabella Taylor",
    role: "Cleaner",
    photo: "https://randomuser.me/api/portraits/women/52.jpg",
    email: "isabella.taylor@example.com",
    phone: "+1 555-4456",
    inroom: "False",
  },
  {
    name: "James Thomas",
    role: "Security Agent",
    photo: "https://randomuser.me/api/portraits/men/60.jpg",
    email: "james.thomas@example.com",
    phone: "+1 555-9021",
    inroom: "False",
  },
  {
    name: "Mia White",
    role: "Manager",
    photo: "https://randomuser.me/api/portraits/women/11.jpg",
    email: "mia.white@example.com",
    phone: "+1 555-3300",
    inroom: "False",
  },
  {
    name: "Benjamin Harris",
    role: "Other",
    photo: "https://randomuser.me/api/portraits/men/36.jpg",
    email: "benjamin.harris@example.com",
    phone: "+1 555-2219",
    inroom: "False",
  },
  {
    name: "Charlotte Martin",
    role: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/19.jpg",
    email: "charlotte.martin@example.com",
    phone: "+1 555-7623",
    inroom: "False",
  },
  {
    name: "Elijah Thompson",
    role: "IT Technician",
    photo: "https://randomuser.me/api/portraits/men/14.jpg",
    email: "elijah.thompson@example.com",
    phone: "+1 555-9043",
    inroom: "False",
  },
  {
    name: "Amelia Garcia",
    role: "Security Agent",
    photo: "https://randomuser.me/api/portraits/women/60.jpg",
    email: "amelia.garcia@example.com",
    phone: "+1 555-6720",
    inroom: "False",
  },
  {
    name: "William Clark",
    role: "Cleaner",
    photo: "https://randomuser.me/api/portraits/men/71.jpg",
    email: "william.clark@example.com",
    phone: "+1 555-8801",
    inroom: "False",
  },
  {
    name: "Harper Rodriguez",
    role: "Other",
    photo: "https://randomuser.me/api/portraits/women/7.jpg",
    email: "harper.rodriguez@example.com",
    phone: "+1 555-1902",
    inroom: "False",
  },
  {
    name: "Daniel Lewis",
    role: "IT Technician",
    photo: "https://randomuser.me/api/portraits/men/73.jpg",
    email: "daniel.lewis@example.com",
    phone: "+1 555-3149",
    inroom: "False",
  },
  {
    name: "Evelyn Walker",
    role: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/36.jpg",
    email: "evelyn.walker@example.com",
    phone: "+1 555-2441",
    inroom: "False",
  },
  {
    name: "Henry Young",
    role: "Manager",
    photo: "https://randomuser.me/api/portraits/men/9.jpg",
    email: "henry.young@example.com",
    phone: "+1 555-7766",
    inroom: "False",
  }
];


//rooms
  const Archives = document.getElementById('Archives');
  const Staffroom = document.getElementById('Staffroom');
  const Securityroom = document.getElementById('Securityroom');
  const Serverroom = document.getElementById('Serverroom');
  const Reception = document.getElementById('Reception');
  const Conferenceroom = document.getElementById('Conferenceroom');
  const aside = document.getElementById('aside');

// global array
  const GlobalArray = [];
  users.forEach(u => GlobalArray.push(u));
  
// Form
const addForm = document.getElementById('addForm');
const addFormbtn = document.getElementById('addFormbtn');
const closeform = document.getElementById('closeform')

addFormbtn.addEventListener('click', ()=> {
  addForm.classList.remove('hidden')
})
closeform.addEventListener('click', ()=> {
  addForm.classList.add('hidden')
})
// linki l url me3a l Photo 
  const photoInput = document.getElementById('photo');
  const photoPreview = document.getElementById('photoPreview');

  photoInput.addEventListener('input', () => {
    if (photoInput.value.trim() !== "") {
      photoPreview.src = photoInput.value;
    }
  });

  //Dynamic Experiance
  const container = document.getElementById("experienceContainer");
  const addBtn = document.getElementById("addExperience");

  addBtn.addEventListener("click", () => {
    const div = document.createElement("div");

    div.className = "flex gap-2 items-center";

    div.innerHTML = `
      <input id="formexper" type="text"
             class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
             placeholder="Experience (ex: 2 years at Google)">
      <button type="button"
              class="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 remove-exp">
        X
      </button>
    `;

    container.appendChild(div);

    // Remove experiance
    div.querySelector(".remove-exp").addEventListener("click", () => {
      div.remove();
    });
  });

//nakhod l values
const addEmployee = document.getElementById('addEmployee');

employeeForm.addEventListener('submit', (e)=>{
e.preventDefault();
addForm.classList.add('hidden')
  const formname = document.getElementById('formname');
  const formphone = document.getElementById('formphone');
  const formemail = document.getElementById('formemail');
  const formrole = document.getElementById('formrole');
  const photo = document.getElementById('photo');
  const formexper = document.getElementById('formexper');

  GlobalArray.push({
    name: `${formname.value.trim()}`,
    role: `${formrole.value.trim()}`,
    photo: `${photo.value.trim()}`,
    email: `${formemail.value.trim()}`,
    phone: `${formphone.value.trim()}`,
    Experiences: `${formexper.value.trim()}`,
  })
  // Needs To be fixed
//   console.log(GlobalArray)
//   let counter = 1 ;
  
//     const newdiv = document.createElement('div')
//     newdiv.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 lg:w-[90%] w-[95%] lg:h-20 m-2 hover:shadow-lg transition'
//     newdiv.id = `div${counter}`
//     newdiv.innerHTML = `  
//         <img src="./Images/addposi.png" class="lg:w-12 lg:h-12 w-10 h-10 rounded-full object-cover border" alt="Employee img">

//         <div class="flex flex-col">
//           <h1 class="text-sm font-semibold text-gray-800">${formname.name}</h1>
//           <button id="btn${counter}" class="mt-1 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-700 transition">
//                       Remove
//           </button>
//         </div>
//     `
//     aside.appendChild(newdiv)
//     const deletebtn = document.getElementById(`btn${counter}`)
//     deletebtn.addEventListener('click', ()=>{
//     const divtoremove = document.getElementById(`div${counter}`);
//     divtoremove.remove()
//     })
//     formexper.value = "";
//     photo.value = "";
//     formrole.value = "";
//     formemail.value = "";
//     formname.value = "";
//     formphone.value = "";
//     counter++;
})

// Push only Managers

console.log(GlobalArray);


// For emplyee list Pop up
const Conferenceroombtn = document.getElementById('Conferenceroombtn');
const popup = document.getElementById("availableEmployeesPopup");
const closeBtn = document.getElementById("closeEmployeesPopup");
const employeelist = document.getElementById("employeelist");

// List of availlbl Conference Room
let confrencercounter = 0;
let emplyeeaddid = 1

Conferenceroombtn.addEventListener("click", () => {
    popup.classList.remove("hidden");

    if(confrencercounter >= 6 ){
        alert('Only 6 People are allowed to Enter this Room');
        popup.classList.add("hidden");
        return;
    }

    employeelist.innerHTML = "";

    const arraytemp = GlobalArray.filter(user =>
        user.role === "Manager" && 
        ![...Conferenceroom.children].some(c => c.querySelector("h1").textContent === user.name)
    );

    arraytemp.forEach(u => {
      if(u.inroom === 'True'){ //inroom: "False",
          return
      }
      else{
        const currentId = emplyeeaddid; 
        const newEmplyee = document.createElement('div');
        newEmplyee.id = `d-${currentId}`;
        newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[90%] h-20 m-2 hover:shadow-lg transition';
        newEmplyee.innerHTML = `
            <img src="${u.photo}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
            <div class="flex justify-between w-[100%] p-5">
              <div class="flex flex-col">
                  <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                  <button id="addd${currentId}" class="mt-1 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                      Add to Room
                  </button>
              </div>
              <h2>${u.role}</h2>
            </div>
        `;

        employeelist.appendChild(newEmplyee);
        const addBtn = document.getElementById(`addd${currentId}`);
        addBtn.addEventListener('click', () => {
            if(confrencercounter >= 6 ){
                alert('Only 6 People are allowed to Enter this Room');
                return;
            }
            newEmplyee.innerHTML = `
            <img src="${u.photo || "./addposi.png"}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
            <div class="flex flex-col">
                <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                <button id="remove${currentId}" class="mt-1 bg-red-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-red-700 transition">
                    Remove
                </button>
            </div>
        `;
            Conferenceroom.appendChild(newEmplyee);
            confrencercounter++;
            u.inroom = "True"
            console.log(u.inroom)
            const removebbt = document.getElementById(`remove${currentId}`)
            removebbt.addEventListener('click', (e)=> {
                document.getElementById(`d-${currentId}`).remove()
                confrencercounter--;
                u.inroom = "False"
                console.log(u.inroom)
            })

        });

        emplyeeaddid++;
      }
        
    });
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    employeelist.innerHTML = "";
});

// Reception Room
let Receptioncounter = 0;
let emplyeeaddid2 = 1
const Receptionbtn = document.getElementById('Receptionbtn');
Receptionbtn.addEventListener("click", () => {
    popup.classList.remove("hidden");

    if(Receptioncounter >= 3 ){
        alert('Only 3 People are allowed to Enter this Room');
        popup.classList.add("hidden");
        return;
    }

    employeelist.innerHTML = "";

    const arraytemp = GlobalArray.filter(user =>
        user.role === "Manager" && 
        ![...Conferenceroom.children].some(c => c.querySelector("h1").textContent === user.name)
    );

    arraytemp.forEach(u => {
      if(u.inroom === 'True'){ //inroom: "False",
          return
      }
      else{
        const currentId = emplyeeaddid2; 
        const newEmplyee = document.createElement('div');
        newEmplyee.id = `d--${currentId}`;
        newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[90%] h-20 m-2 hover:shadow-lg transition';
        newEmplyee.innerHTML = `
            <img src="${u.photo || "./addposi.png"}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
            <div class="flex justify-between w-[100%] p-5">
              <div class="flex flex-col">
                  <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                  <button id="add--${currentId}" class="mt-1 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                      Add to Room
                  </button>
              </div>
              <h2>${u.role}</h2>
            </div>
        `;

        employeelist.appendChild(newEmplyee);
        const adddBtn = document.getElementById(`add--${currentId}`);
        adddBtn.addEventListener('click', () => {
            if(Receptioncounter >= 3 ){
                alert('Only 3 People are allowed to Enter this Room');
                return;
            }
            newEmplyee.innerHTML = `
            <img src="${u.photo || "./addposi.png"}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
            <div class="flex flex-col">
                <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                <button id="removeres${currentId}" class="mt-1 bg-red-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-red-700 transition">
                    Remove
                </button>
            </div>
        `;
            Reception.appendChild(newEmplyee);
            Receptioncounter++;
            u.inroom = "True"
            const removebbt = document.getElementById(`removeres${currentId}`)
            removebbt.addEventListener('click', (e)=> {
                document.getElementById(`d--${currentId}`).remove()
                Receptioncounter--;
                u.inroom = "False"
                console.log(u.inroom)
            })
 
        });

        emplyeeaddid2++;
      }
        
    });
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    employeelist.innerHTML = "";
});

// Server Room
let Serverroomcounter = 0;
let emplyeeaddid3 = 1
const Serverroombtn = document.getElementById('Serverroombtn');
Serverroombtn.addEventListener("click", () => {
    popup.classList.remove("hidden");

    if(Serverroomcounter >= 2 ){
        alert('Only 2 People are allowed to Enter this Room');
        popup.classList.add("hidden");
        return;
    }

    employeelist.innerHTML = "";

    const arraytemp = GlobalArray.filter(user =>
        user.role === "Manager" && 
        ![...Conferenceroom.children].some(c => c.querySelector("h1").textContent === user.name)
    );

    arraytemp.forEach(u => {
      if(u.inroom === 'True'){ //inroom: "False",
          return
      }
      else{
        const currentId = emplyeeaddid3; 
        const newEmplyee = document.createElement('div');
        newEmplyee.id = `id-${currentId}`;
        newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[90%] h-20 m-2 hover:shadow-lg transition';
        newEmplyee.innerHTML = `
            <img src="${u.photo || "./addposi.png"}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
            <div class="flex justify-between w-[100%] p-5">
              <div class="flex flex-col">
                  <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                  <button id="addser--${currentId}" class="mt-1 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                      Add to Room
                  </button>
              </div>
              <h2>${u.role}</h2>
            </div>
        `;

        employeelist.appendChild(newEmplyee);
        const adddseBtn = document.getElementById(`addser--${currentId}`);
        adddseBtn.addEventListener('click', () => {
            if(Serverroomcounter >= 2 ){
                alert('Only 2 People are allowed to Enter this Room');
                return;
            }
            newEmplyee.innerHTML = `
            <img src="${u.photo || "./addposi.png"}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
            <div class="flex flex-col">
                <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                <button id="removeser${currentId}" class="mt-1 bg-red-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-red-700 transition">
                    Remove
                </button>
            </div>
        `;
            Serverroom.appendChild(newEmplyee);
            Serverroomcounter++;
            u.inroom = "True"
            const removebbt = document.getElementById(`removeser${currentId}`)
            removebbt.addEventListener('click', (e)=> {
                document.getElementById(`id-${currentId}`).remove()
                Serverroomcounter--;
                u.inroom = "False"
                console.log(u.inroom)
            })

        });

        emplyeeaddid3++;
      }
        
    });
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    employeelist.innerHTML = "";
});

// Security Room
let securityroomcounter = 0;
let emplyeeaddid4 = 1
const Securityroombtn = document.getElementById('Securityroombtn');
Securityroombtn.addEventListener("click", () => {
    popup.classList.remove("hidden");

    if(securityroomcounter >= 2 ){
        alert('Only 2 People are allowed to Enter this Room');
        popup.classList.add("hidden");
        return;
    }

    employeelist.innerHTML = "";

    const arraytemp = GlobalArray.filter(user =>
        user.role === "Manager" && 
        ![...Conferenceroom.children].some(c => c.querySelector("h1").textContent === user.name)
    );

    arraytemp.forEach(u => {
      if(u.inroom === 'True'){ //inroom: "False",
          return
      }
      else{
        const currentId = emplyeeaddid4; 
        const newEmplyee = document.createElement('div');
        newEmplyee.id = `security${currentId}`;
        newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[90%] h-20 m-2 hover:shadow-lg transition';
        newEmplyee.innerHTML = `
            <img src="${u.photo || "./addposi.png"}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
            <div class="flex justify-between w-[100%] p-5">
              <div class="flex flex-col">
                  <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                  <button id="security-${currentId}" class="mt-1 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                      Add to Room
                  </button>
              </div>
              <h2>${u.role}</h2>
            </div>
        `;

        employeelist.appendChild(newEmplyee);
        const addsecurity = document.getElementById(`security-${currentId}`);
        addsecurity.addEventListener('click', () => {
            if(securityroomcounter >= 2 ){
                alert('Only 2 People are allowed to Enter this Room');
                return;
            }
            newEmplyee.innerHTML = `
            <img src="${u.photo || "./addposi.png"}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
            <div class="flex flex-col">
                <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                <button id="removesecurity${currentId}" class="mt-1 bg-red-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-red-700 transition">
                    Remove
                </button>
            </div>
        `;
            Securityroom.appendChild(newEmplyee);
            securityroomcounter++;
            u.inroom = "True"
            const removesecurity = document.getElementById(`removesecurity${currentId}`)
            removesecurity.addEventListener('click', (e)=> {
                document.getElementById(`security${currentId}`).remove()
                securityroomcounter--;
                u.inroom = "False"
                console.log(u.inroom)
            })
      
        });

        emplyeeaddid4++;
      }
        
    });
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    employeelist.innerHTML = "";
});

// Security Room
let staffroomcounter = 0;
let emplyeeaddid5 = 1
const Staffroombtn = document.getElementById('Staffroombtn');
Staffroombtn.addEventListener("click", () => {
    popup.classList.remove("hidden");

    if(staffroomcounter >= 2 ){
        alert('Only 2 People are allowed to Enter this Room');
        popup.classList.add("hidden");
        return;
    }

    employeelist.innerHTML = "";

    const arraytemp = GlobalArray.filter(user =>
        user.role === "Manager" && 
        ![...Conferenceroom.children].some(c => c.querySelector("h1").textContent === user.name)
    );

    arraytemp.forEach(u => {
      if(u.inroom === 'True'){ //inroom: "False",
          return
      }
      else{
        const currentId = emplyeeaddid5; 
        const newEmplyee = document.createElement('div');
        newEmplyee.id = `staff${currentId}`;
        newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[90%] h-20 m-2 hover:shadow-lg transition';
        newEmplyee.innerHTML = `
            <img src="${u.photo || "./addposi.png"}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
            <div class="flex justify-between w-[100%] p-5">
              <div class="flex flex-col">
                  <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                  <button id="staff-${currentId}" class="mt-1 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                      Add to Room
                  </button>
              </div>
              <h2>${u.role}</h2>
            </div>
        `;

        employeelist.appendChild(newEmplyee);
        const addstaff = document.getElementById(`staff-${currentId}`);
        addstaff.addEventListener('click', () => {
            if(staffroomcounter >= 2 ){
                alert('Only 2 People are allowed to Enter this Room');
                return;
            }
            newEmplyee.innerHTML = `
            <img src="${u.photo || "./addposi.png"}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
            <div class="flex flex-col">
                <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                <button id="removestaff${currentId}" class="mt-1 bg-red-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-red-700 transition">
                    Remove
                </button>
            </div>
        `;
            Staffroom.appendChild(newEmplyee);
            staffroomcounter++;
            u.inroom = "True"
            const removestaff = document.getElementById(`removestaff${currentId}`)
            removestaff.addEventListener('click', (e)=> {
                document.getElementById(`staff${currentId}`).remove()
                staffroomcounter--;
                u.inroom = "False"
                console.log(u.inroom)
            })
        
        });

        emplyeeaddid5++;
      }
        
    });
});

// Close popup
closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    employeelist.innerHTML = "";
});

// Archives Room
let Archivesroomcounter = 0;
let emplyeeaddid6 = 1
const Archivesroombtn = document.getElementById('Archivesroombtn');
Archivesroombtn.addEventListener("click", () => {
    popup.classList.remove("hidden");

    if(Archivesroomcounter >= 2 ){
        alert('Only 2 People are allowed to Enter this Room');
        popup.classList.add("hidden");
        return;
    }

  
    employeelist.innerHTML = "";

  
    const arraytemp = GlobalArray.filter(user =>
        user.role === "Manager" && 
        ![...Conferenceroom.children].some(c => c.querySelector("h1").textContent === user.name)
    );

    arraytemp.forEach(u => {
      if(u.inroom === 'True'){ 
          return
      }
      else{
        const currentId = emplyeeaddid6;
        const newEmplyee = document.createElement('div');
        newEmplyee.id = `Archives${currentId}`;
        newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[90%] h-20 m-2 hover:shadow-lg transition';
        newEmplyee.innerHTML = `
            <img src="${u.photo || "./addposi.png"}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
            <div class="flex justify-between w-[100%] p-5">
              <div class="flex flex-col">
                  <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                  <button id="Archives-${currentId}" class="mt-1 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                      Add to Room
                  </button>
              </div>
              <h2>${u.role}</h2>
            </div>
        `;

        employeelist.appendChild(newEmplyee);
        const addArchives = document.getElementById(`Archives-${currentId}`);
        addArchives.addEventListener('click', () => {
            if(Archivesroomcounter >= 2 ){
                alert('Only 2 People are allowed to Enter this Room');
                return;
            }
            newEmplyee.innerHTML = `
            <img src="${u.photo || "./addposi.png"}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
            <div class="flex flex-col">
                <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                <button id="removeArchives${currentId}" class="mt-1 bg-red-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-red-700 transition">
                    Remove
                </button>
            </div>
        `;
            Archivesroom.appendChild(newEmplyee);
            Archivesroomcounter++;
            u.inroom = "True"
            const removeArchives = document.getElementById(`removeArchives${currentId}`)
            removeArchives.addEventListener('click', (e)=> {
                document.getElementById(`Archives${currentId}`).remove()
                Archivesroomcounter--;
                u.inroom = "False"
                console.log(u.inroom)
            })
            
        });

        emplyeeaddid6++;
      }
        
    });
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    employeelist.innerHTML = "";
});


//user info 

/* <section class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="w-[50%] lg:w-[30%] bg-white shadow-lg rounded-2xl overflow-hidden ring-1 ring-slate-200">
                <div class="p-6 flex gap-4 items-center">
                    <img src="https://i.pravatar.cc/100?img=12" alt="Profile avatar" class="w-20 h-20 rounded-full object-cover border-2 border-slate-100 shadow-sm" />
                    <div class="flex-1">
                        <div class="flex items-center justify-between">
                            <h2 class="text-lg font-semibold text-slate-900" id="fullName">Mouad Gourita</h2>
                            <span class="text-sm text-slate-500" id="role">Role</span>
                        </div>
                        <p class="mt-2 text-sm text-slate-600 flex items-center gap-2">
                            <img class="w-6 h-5" src="./Images/mailpng.png" alt="email icon">
                            Mouad.gourita@gmail.com
                        </p>
                        <div class="mt-4">
                            <div class="flex flex-col items-center justify-between text-xs text-slate-500">
                                <span>Experience</span>
                                <h3>Benn Working as dadadada</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */

function userinfo(username, email, image, experia){
  const newdiv = document.createElement('div');
  
}