//for tests 

const users = [
  {
    name: "Emma Johnson",
    role: "Manager",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    email: "emma.johnson@example.com",
    phone: "+1 555-1023"
  },
  {
    name: "Lucas Smith",
    role: "IT Technician",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "lucas.smith@example.com",
    phone: "+1 555-2214"
  },
  {
    name: "Olivia Brown",
    role: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    email: "olivia.brown@example.com",
    phone: "+1 555-8872"
  },
  {
    name: "Ethan Davis",
    role: "Security Agent",
    photo: "https://randomuser.me/api/portraits/men/18.jpg",
    email: "ethan.davis@example.com",
    phone: "+1 555-3131"
  },
  {
    name: "Sophia Miller",
    role: "Cleaner",
    photo: "https://randomuser.me/api/portraits/women/9.jpg",
    email: "sophia.miller@example.com",
    phone: "+1 555-5582"
  },
  {
    name: "Michael Wilson",
    role: "Manager",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    email: "michael.wilson@example.com",
    phone: "+1 555-9912"
  },
  {
    name: "Ava Martinez",
    role: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/28.jpg",
    email: "ava.martinez@example.com",
    phone: "+1 555-6634"
  },
  {
    name: "Noah Anderson",
    role: "IT Technician",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    email: "noah.anderson@example.com",
    phone: "+1 555-1178"
  },
  {
    name: "Isabella Taylor",
    role: "Cleaner",
    photo: "https://randomuser.me/api/portraits/women/52.jpg",
    email: "isabella.taylor@example.com",
    phone: "+1 555-4456"
  },
  {
    name: "James Thomas",
    role: "Security Agent",
    photo: "https://randomuser.me/api/portraits/men/60.jpg",
    email: "james.thomas@example.com",
    phone: "+1 555-9021"
  },
  {
    name: "Mia White",
    role: "Manager",
    photo: "https://randomuser.me/api/portraits/women/11.jpg",
    email: "mia.white@example.com",
    phone: "+1 555-3300"
  },
  {
    name: "Benjamin Harris",
    role: "Other",
    photo: "https://randomuser.me/api/portraits/men/36.jpg",
    email: "benjamin.harris@example.com",
    phone: "+1 555-2219"
  },
  {
    name: "Charlotte Martin",
    role: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/19.jpg",
    email: "charlotte.martin@example.com",
    phone: "+1 555-7623"
  },
  {
    name: "Elijah Thompson",
    role: "IT Technician",
    photo: "https://randomuser.me/api/portraits/men/14.jpg",
    email: "elijah.thompson@example.com",
    phone: "+1 555-9043"
  },
  {
    name: "Amelia Garcia",
    role: "Security Agent",
    photo: "https://randomuser.me/api/portraits/women/60.jpg",
    email: "amelia.garcia@example.com",
    phone: "+1 555-6720"
  },
  {
    name: "William Clark",
    role: "Cleaner",
    photo: "https://randomuser.me/api/portraits/men/71.jpg",
    email: "william.clark@example.com",
    phone: "+1 555-8801"
  },
  {
    name: "Harper Rodriguez",
    role: "Other",
    photo: "https://randomuser.me/api/portraits/women/7.jpg",
    email: "harper.rodriguez@example.com",
    phone: "+1 555-1902"
  },
  {
    name: "Daniel Lewis",
    role: "IT Technician",
    photo: "https://randomuser.me/api/portraits/men/73.jpg",
    email: "daniel.lewis@example.com",
    phone: "+1 555-3149"
  },
  {
    name: "Evelyn Walker",
    role: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/36.jpg",
    email: "evelyn.walker@example.com",
    phone: "+1 555-2441"
  },
  {
    name: "Henry Young",
    role: "Manager",
    photo: "https://randomuser.me/api/portraits/men/9.jpg",
    email: "henry.young@example.com",
    phone: "+1 555-7766"
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

let emplyeeaddid = 1
// For emplyee list Pop up
const Conferenceroombtn = document.getElementById('Conferenceroombtn');
const popup = document.getElementById("availableEmployeesPopup");
const closeBtn = document.getElementById("closeEmployeesPopup");
const employeelist = document.getElementById("employeelist");

// List of availlbl Conference Room
let confrencercounter = 0 ;
Conferenceroombtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
// had l if dakhal waset maneha koleshi fash tesali
if(confrencercounter === 6 ){
  alert('Only 4 People are allowed to Enter this Room')
  popup.classList.add("hidden")
}
else{
//filter
const arraytemp = GlobalArray.filter(user =>
      ["Manager"].includes(user.role)
    )

  arraytemp.forEach(u => {
  const currentId = emplyeeaddid; // store the value

  const newEmplyee = document.createElement('div');
  newEmplyee.id = `d-${currentId}`;
  newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[90%] h-20 m-2 hover:shadow-lg transition';

  newEmplyee.innerHTML = `
      <img src="./addposi.png" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
      <div class="flex flex-col">
          <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
          <button id="addd${currentId}" class="mt-1 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-700 transition">
              Add to Room
          </button>
      </div>
  `;
  employeelist.appendChild(newEmplyee);

  const addBtn = document.getElementById(`addd${currentId}`);

  addBtn.addEventListener('click', () => {
    console.log(document.getElementById(`d-${currentId}`))
    const moved = document.getElementById(`d-${currentId}`);
    document.getElementById(`d-${currentId}`).remove();
 // arraytemp.splice(indexToRemove, 1);
    console.log(arraytemp)
    Conferenceroom.appendChild(moved);
    

    confrencercounter++;
  });

  emplyeeaddid++; // increment AFTER binding events
});
}
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden")
    employeelist.innerHTML = ""
});

const Receptionbtn = document.getElementById("Receptionbtn");
Receptionbtn.addEventListener("click", () => {
    popup.classList.remove("hidden");

const arraytemp = GlobalArray.filter(user =>
      ["IT Technician"].includes(user.role)
    )

    arraytemp.forEach(u => {
    const newEmplyee = document.createElement('div')
    newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[90%] h-20 m-2 hover:shadow-lg transition'
    newEmplyee.innerHTML = `
            <img src="./addposi.png" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">

            <div class="flex flex-col">
                <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>

                <button class="mt-1 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                    Add to Room
                </button>
            </div>
   `
   employeelist.appendChild(newEmplyee)
   })
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    employeelist.innerHTML = ""
});

const Serverroombtn = document.getElementById("Serverroombtn");
Serverroombtn.addEventListener("click", () => {
    popup.classList.remove("hidden");

    const arraytemp = GlobalArray.filter(user =>
      ["IT Technician","Manager"].includes(user.role)
    )

    arraytemp.forEach(u => {
    const newEmplyee = document.createElement('div')
    newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[90%] h-20 m-2 hover:shadow-lg transition'
    newEmplyee.innerHTML = `
            <img src="./addposi.png" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">

            <div class="flex flex-col">
                <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>

                <button class="mt-1 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                    Add to Room
                </button>
            </div>
   `
   employeelist.appendChild(newEmplyee)
   })
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    employeelist.innerHTML = ""
});

const Securityroombtn = document.getElementById("Securityroombtn");
Securityroombtn.addEventListener("click", () => {
    popup.classList.remove("hidden");

    const arraytemp = GlobalArray.filter(user =>
      ["IT Technician","Manager"].includes(user.role)
    )

    arraytemp.forEach(u => {
    const newEmplyee = document.createElement('div')
    newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[90%] h-20 m-2 hover:shadow-lg transition'
    newEmplyee.innerHTML = `
            <img src="./addposi.png" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">

            <div class="flex flex-col">
                <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>

                <button class="mt-1 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                    Add to Room
                </button>
            </div>
   `
   employeelist.appendChild(newEmplyee)
   })
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    employeelist.innerHTML = ""
});

const Staffroombtn = document.getElementById("Staffroombtn");
Staffroombtn.addEventListener("click", () => {
    popup.classList.remove("hidden");

const arraytemp = GlobalArray.filter(user =>
      ["IT Technician","Manager"].includes(user.role)
    )
    
    arraytemp.forEach(u => {
    const newEmplyee = document.createElement('div')
    newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[90%] h-20 m-2 hover:shadow-lg transition'
    newEmplyee.innerHTML = `
            <img src="./addposi.png" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">

            <div class="flex flex-col">
                <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>

                <button class="mt-1 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                    Add to Room
                </button>
            </div>
   `
   employeelist.appendChild(newEmplyee)
   })
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    employeelist.innerHTML = ""
});

const Archivesroombtn = document.getElementById("Archivesroombtn");
Archivesroombtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
    
const arraytemp = GlobalArray.filter(user =>
      ["IT Technician","Manager"].includes(user.role)
    )

    arraytemp.forEach(u => {
    const newEmplyee = document.createElement('div')
    newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[90%] h-20 m-2 hover:shadow-lg transition'
    newEmplyee.innerHTML = `
            <img src="./addposi.png" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">

            <div class="flex flex-col">
                <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>

                <button class="mt-1 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                    Add to Room
                </button>
            </div>
   `
   employeelist.appendChild(newEmplyee)
   })
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    employeelist.innerHTML = ""
});
