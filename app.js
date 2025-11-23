//for tests 

const users = [
  {
    name: "Emma Johnson",
    role: "Manager",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    email: "emma.johnson@example.com",
    phone: "+1 555-1023",
    inroom: "False",
    state: "Unassigned",
  },
  {
    name: "Lucas Smith",
    role: "IT Technician",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "lucas.smith@example.com",
    phone: "+1 555-2214",
    inroom: "False",
    state: "Unassigned",
  },
  {
    name: "Olivia Brown",
    role: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    email: "olivia.brown@example.com",
    phone: "+1 555-8872",
    inroom: "False",
    state: "Unassigned",
  },
  {
    name: "Ethan Davis",
    role: "Security Agent",
    photo: "https://randomuser.me/api/portraits/men/18.jpg",
    email: "ethan.davis@example.com",
    phone: "+1 555-3131",
    inroom: "False",
    state: "Unassigned",
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
    role: "Receptionist",
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

let counter1 = 1
let addingcounter = 1

//rooms
  const Archivesroom = document.getElementById('Archivesroom');//Archivesroom
  const Staffroom = document.getElementById('Staffroom');
  const Securityroom = document.getElementById('Securityroom');
  const Serverroom = document.getElementById('Serverroom');
  const Reception = document.getElementById('Reception');
  const Conferenceroom = document.getElementById('Conferenceroom');
  const aside = document.getElementById('aside');

// global array
  const GlobalArray = [];
  users.forEach(u => GlobalArray.push(u));
  
//
displayUsers();

//users info 
const infoname = document.getElementById('infoname')
const inforole = document.getElementById('inforole')
const infoemail = document.getElementById('infoemail')
const infophone = document.getElementById('infophone')
const userimage = document.getElementById('userimage')



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

 // experianc
  const container = document.getElementById("experienceContainer");
  const addBtn = document.getElementById("addExperience");

  addBtn.addEventListener("click", () => {
    const div = document.createElement("div");

    div.className = "flex gap-2 items-center mt-2";

    div.innerHTML = `
      <div class="flex flex-col w-[80%] gap-4 ml-10">
      <input type="text"
             class="Experience flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
             placeholder="Experience (ex: 2 years at Google)" required>
      <input type="text"
             class="Description flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
             placeholder="Description" required>
      <div class="flex justify-around items-center">
        <label for="start">Start</label>
        <input id="start" type="date" class="border ml-3 mr-3 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" required>
        <label for="end">End</label>
        <input id="end" type="date" class="border ml-3 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" required>
      </div>
      </div>
    
      <button type="button"
              class="w-10 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 remove-exp">
        X
      </button>
    `;
    container.appendChild(div);

    div.querySelector(".remove-exp").addEventListener("click", () => {
      div.remove();
    });
  });


//nakhod l values
const addEmployee = document.getElementById('addEmployee');

employeeForm.addEventListener('submit', (e)=>{
e.preventDefault();
addForm.classList.add('hidden')
  const formname = document.getElementById('formname').value.trim();
  const formphone = document.getElementById('formphone').value.trim();
  const formemail = document.getElementById('formemail').value.trim();
  const formrole = document.getElementById('formrole').value.trim();
  const photo = document.getElementById('photo').value.trim();
  const formexper = document.querySelectorAll('.Experience');
  const formDescription = document.querySelectorAll('.Description');

  GlobalArray.push({
    name: `${formname}`,
    role: `${formrole}`,
    photo: `${photo}`,
    email: `${formemail}`,
    phone: `${formphone}`,
    Experiences: `${formexper}`,
    Experiencesdescription: `${formDescription}`,
  })

  console.log(GlobalArray)
  let counter = 1 ;
  
    const newdiv = document.createElement('div')
    newdiv.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl h-24 p-3 lg:w-[90%] w-[95%] lg:h-20 m-2 hover:shadow-lg transition'
    newdiv.id = `div${counter}`
    newdiv.innerHTML = `  
        <img src="${photo}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
                <div class="flex justify-between w-[100%] p-1">
                <div class="flex flex-col items-center gap-5">
                    <h1 class="text-sm font-semibold text-gray-800">${formname}</h1>
                    <h2>${formrole}</h2>
                    <button id="btn${counter}">
                        <img class="w-5 h-5" src="./Images/addposi.png" alt="add btn">
                    </button>
    `
    aside.prepend(newdiv)
    const deletebtn = document.getElementById(`btn${counter}`)
    deletebtn.addEventListener('click', ()=>{
    const divtoremove = document.getElementById(`div${counter}`);
    divtoremove.remove()
    })
    photo.value = "";
    formrole.value = "";
    formemail.value = "";
    formname.value = "";
    formphone.value = "";
    formexper.value = "";
    formDescription.value = "";
    counter++;
})

// Push only Managers

console.log(GlobalArray);


// For emplyee list Pop up
const Conferenceroombtn = document.getElementById('Conferenceroombtn');
const popup = document.getElementById("availableEmployeesPopup");
const closeBtn = document.getElementById("closeEmployeesPopup");
const employeelist = document.getElementById("employeelist");
const confrensvisi = document.querySelector('.confrensvisi');

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
    user.role === "Manager" || user.role === "IT Technician"
);


    arraytemp.forEach(u => {
      if(u.inroom === 'True'){ 
          return
      }
      else{ 
        const currentId = emplyeeaddid; 
        const newEmplyee = document.createElement('div');
        newEmplyee.id = `d-${currentId}`;
        newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[100%] h-20 m-2 hover:shadow-lg transition';
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
            <div class="flex">
              <button id="remove${currentId}">
                    <img class="h-5 w-5" src="./Images/supprimer.png" alt="close btn">
                  </button>
              <div class="flex items-center justify-between w-full p-3 ">
                <div class="flex items-center gap-3">
                  <button id="useinfo${currentId}" class="flex items-center gap-3">
                    <img src="${u.photo}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
                    <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                  </button>
                </div>
              </div>
            </div>
        `;
            Conferenceroom.appendChild(newEmplyee);
            confrencercounter++;
            confrensvisi.textContent = `${confrencercounter}/6`
            u.inroom = "True"
            console.log(u.inroom)
            aside.innerHTML= ''
            displayUsers();
 //user info
            const personalinfo = document.getElementById('personalinfo');
            const infobtn = document.getElementById(`useinfo${currentId}`)
            const infoclose = document.getElementById('infoclose');
                infobtn.addEventListener('click', ()=>{
                      userimage.src = u.photo
                      infoname.innerHTML = u.name
                      inforole.innerHTML = u.role
                      infoemail.innerHTML = u.email
                      infophone.innerHTML = u.phone
                  personalinfo.classList.remove('hidden')
                infoclose.addEventListener('click', ()=>{
                  personalinfo.classList.add('hidden')
                  })
                })
   
            const removebbt = document.getElementById(`remove${currentId}`)
            removebbt.addEventListener('click', (e)=> {
                document.getElementById(`d-${currentId}`).remove()
                confrencercounter--;
                confrensvisi.textContent = `${confrencercounter}/6`
                u.inroom = "False"
                console.log(u.inroom)
                aside.innerHTML= ''
                displayUsers();
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
const Receptivisi = document.querySelector('.Receptivisi')
Receptionbtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
    if(Receptioncounter >= 3 ){
        alert('Only 3 People are allowed to Enter this Room');
        popup.classList.add("hidden");
        return;
    }

    employeelist.innerHTML = "";

    const arraytemp = GlobalArray.filter(user =>
        user.role === "Manager" || user.role === "Receptionist"
    );

    arraytemp.forEach(u => {
      if(u.inroom === 'True'){
          return
      }
      else{
        const currentId = emplyeeaddid2; 
        const newEmplyee = document.createElement('div');
        newEmplyee.id = `d--${currentId}`;
        newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[100%] h-20 m-2 hover:shadow-lg transition';
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
            <div class="flex">
              <button id="removeres${currentId}">
                    <img class="h-5 w-5" src="./Images/supprimer.png" alt="close btn">
                  </button>
              <div class="flex items-center justify-between w-full p-3 ">
                <div class="flex items-center gap-3">
                  <button id="useinfo${currentId}" class="flex items-center gap-3">
                    <img src="${u.photo}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
                    <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                  </button>
                </div>
              </div>
            </div>
        `;
            Reception.appendChild(newEmplyee);
            Receptioncounter++;
            Receptivisi.textContent = `${Receptioncounter}/3`
            u.inroom = "True"
            aside.innerHTML= ''
            displayUsers();
            if(Receptioncounter > 0){
            const item2 = document.querySelector(`.item2`)
            item2.classList.remove('bg-red-300')
            }
//user info
            const personalinfo = document.getElementById('personalinfo');
            const infobtn = document.getElementById(`useinfo${currentId}`)
            const infoclose = document.getElementById('infoclose');
                infobtn.addEventListener('click', ()=>{
                      userimage.src = u.photo
                      infoname.innerHTML = u.name
                      inforole.innerHTML = u.role
                      infoemail.innerHTML = u.email
                      infophone.innerHTML = u.phone
                  personalinfo.classList.remove('hidden')
                infoclose.addEventListener('click', ()=>{
                  personalinfo.classList.add('hidden')
                  })
                })

            const removebbt = document.getElementById(`removeres${currentId}`)
            removebbt.addEventListener('click', (e)=> {
                document.getElementById(`d--${currentId}`).remove()
                Receptioncounter--;
                Receptivisi.textContent = `${Receptioncounter}/3`
                u.inroom = "False"
                console.log(u.inroom)
                aside.innerHTML= ''
                displayUsers();
                if(Receptioncounter === 0){
                const item2 = document.querySelector(`.item2`)
                item2.classList.add('bg-red-300')
                }
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
const Servervisi = document.querySelector('.Servervisi')
Serverroombtn.addEventListener("click", () => {
    popup.classList.remove("hidden");

    if(Serverroomcounter >= 2 ){
        alert('Only 2 People are allowed to Enter this Room');
        popup.classList.add("hidden");
        return;
    }

    employeelist.innerHTML = "";

    const arraytemp = GlobalArray.filter(user =>
        user.role === "Manager" || user.role === "IT Technician"
    );

    arraytemp.forEach(u => {
      if(u.inroom === 'True'){ //inroom: "False",
          return
      }
      else{
        const currentId = emplyeeaddid3; 
        const newEmplyee = document.createElement('div');
        newEmplyee.id = `id-${currentId}`;
        newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[100%] h-20 m-2 hover:shadow-lg transition';
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
            <div class="flex">
              <button id="removeser${currentId}">
                    <img class="h-5 w-5" src="./Images/supprimer.png" alt="close btn">
                  </button>
              <div class="flex items-center justify-between w-full p-3 ">
                <div class="flex items-center gap-3">
                  <button id="useinfo${currentId}" class="flex items-center gap-3">
                    <img src="${u.photo}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
                    <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                  </button>
                </div>
              </div>
            </div>
        `;
            Serverroom.appendChild(newEmplyee);
            Serverroomcounter++;
            Servervisi.textContent = `${Serverroomcounter}/2`
            u.inroom = "True"
            aside.innerHTML= ''
            displayUsers();
            if(Serverroomcounter > 0){
            const item3 = document.querySelector(`.item3`)
            item3.classList.remove('bg-red-300')
            }
  //user info
            const personalinfo = document.getElementById('personalinfo');
            const infobtn = document.getElementById(`useinfo${currentId}`)
            const infoclose = document.getElementById('infoclose');
                infobtn.addEventListener('click', ()=>{
                      userimage.src = u.photo
                      infoname.innerHTML = u.name
                      inforole.innerHTML = u.role
                      infoemail.innerHTML = u.email
                      infophone.innerHTML = u.phone
                  personalinfo.classList.remove('hidden')
                infoclose.addEventListener('click', ()=>{
                  personalinfo.classList.add('hidden')
                  })
                })

            const removebbt = document.getElementById(`removeser${currentId}`)
            removebbt.addEventListener('click', (e)=> {
                document.getElementById(`id-${currentId}`).remove()
                Serverroomcounter--;
                Servervisi.textContent = `${Serverroomcounter}/2`
                u.inroom = "False"
                console.log(u.inroom)
                aside.innerHTML= ''
                displayUsers();
                if(Serverroomcounter === 0){
                const item3 = document.querySelector(`.item3`)
                item3.classList.add('bg-red-300')
                }
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
const Securityvisi = document.querySelector('.Securityvisi');
Securityroombtn.addEventListener("click", () => {
    popup.classList.remove("hidden");

    if(securityroomcounter >= 2 ){
        alert('Only 2 People are allowed to Enter this Room');
        popup.classList.add("hidden");
        return;
    }

    employeelist.innerHTML = "";

    const arraytemp = GlobalArray.filter(user =>
        user.role === "Manager" || user.role === "Security Team"
    );

    arraytemp.forEach(u => {
      if(u.inroom === 'True'){
          return
      }
      else{
        const currentId = emplyeeaddid4; 
        const newEmplyee = document.createElement('div');
        newEmplyee.id = `security${currentId}`;
        newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[100%] h-20 m-2 hover:shadow-lg transition';
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
            <div class="flex">
              <button id="removesecurity${currentId}">
                    <img class="h-5 w-5" src="./Images/supprimer.png" alt="close btn">
                  </button>
              <div class="flex items-center justify-between w-full p-3 ">
                <div class="flex items-center gap-3">
                  <button id="useinfo${currentId}" class="flex items-center gap-3">
                    <img src="${u.photo}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
                    <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                  </button>
                </div>
              </div>
            </div>
        `;
            Securityroom.appendChild(newEmplyee);
            securityroomcounter++;
            Securityvisi.textContent = `${securityroomcounter}/2`
            u.inroom = "True"
            aside.innerHTML= ''
            displayUsers();
            if(securityroomcounter > 0){
            const item4 = document.querySelector(`.item4`)
            item4.classList.remove('bg-red-300')
            }
//user info
            const personalinfo = document.getElementById('personalinfo');
            const infobtn = document.getElementById(`useinfo${currentId}`)
            const infoclose = document.getElementById('infoclose');
                infobtn.addEventListener('click', ()=>{
                      userimage.src = u.photo
                      infoname.innerHTML = u.name
                      inforole.innerHTML = u.role
                      infoemail.innerHTML = u.email
                      infophone.innerHTML = u.phone
                  personalinfo.classList.remove('hidden')
                infoclose.addEventListener('click', ()=>{
                  personalinfo.classList.add('hidden')
                  })
                })

            const removesecurity = document.getElementById(`removesecurity${currentId}`)
            removesecurity.addEventListener('click', (e)=> {
                document.getElementById(`security${currentId}`).remove()
                securityroomcounter--;
                Securityvisi.textContent = `${securityroomcounter}/2`
                u.inroom = "False"
                console.log(u.inroom)
                aside.innerHTML= ''
                displayUsers();
                if(securityroomcounter === 0){
                const item4 = document.querySelector(`.item4`)
                item4.classList.add('bg-red-300')
                }
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

// staff Room
let staffroomcounter = 0;
let emplyeeaddid5 = 1
const Staffroombtn = document.getElementById('Staffroombtn');
const Staffvisi = document.querySelector('.Staffvisi')
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
      if(u.inroom === 'True'){
          return
      }
      else{
        const currentId = emplyeeaddid5; 
        const newEmplyee = document.createElement('div');
        newEmplyee.id = `staff${currentId}`;
        newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[100%] h-20 m-2 hover:shadow-lg transition';
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
            <div class="flex">
              <button id="removestaff${currentId}">
                    <img class="h-5 w-5" src="./Images/supprimer.png" alt="close btn">
                  </button>
              <div class="flex items-center justify-between w-full p-3 ">
                <div class="flex items-center gap-3">
                  <button id="useinfo${currentId}" class="flex items-center gap-3">
                    <img src="${u.photo}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
                    <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                  </button>
                </div>
              </div>
            </div>
        `;
            Staffroom.appendChild(newEmplyee);
            staffroomcounter++;
            Staffvisi.textContent = `${staffroomcounter}/2`
            u.inroom = "True"
            aside.innerHTML= ''
            displayUsers();
//user info
            const personalinfo = document.getElementById('personalinfo');
            const infobtn = document.getElementById(`useinfo${currentId}`)
            const infoclose = document.getElementById('infoclose');
                infobtn.addEventListener('click', ()=>{
                      userimage.src = u.photo
                      infoname.innerHTML = u.name
                      inforole.innerHTML = u.role
                      infoemail.innerHTML = u.email
                      infophone.innerHTML = u.phone
                  personalinfo.classList.remove('hidden')
                infoclose.addEventListener('click', ()=>{
                  personalinfo.classList.add('hidden')
                  })
                })

            const removestaff = document.getElementById(`removestaff${currentId}`)
            removestaff.addEventListener('click', (e)=> {
                document.getElementById(`staff${currentId}`).remove()
                staffroomcounter--;
                Staffvisi.textContent = `${staffroomcounter}/2`
                u.inroom = "False"
                console.log(u.inroom)
                aside.innerHTML= ''
                displayUsers();
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
const Archivesvisi = document.querySelector('.Archivesvisi');
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
        newEmplyee.classList = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl p-3 w-[100%] h-20 m-2 hover:shadow-lg transition';
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
            <div class="flex">
              <button id="removeArchives${currentId}">
                    <img class="h-5 w-5" src="./Images/supprimer.png" alt="close btn">
                  </button>
              <div class="flex items-center justify-between w-full p-3 ">
                <div class="flex items-center gap-3">
                  <button id="useinfo${currentId}" class="flex items-center gap-3">
                    <img src="${u.photo}" class="w-12 h-12 rounded-full object-cover border" alt="Employee img">
                    <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
                  </button>
                </div>
              </div>
            </div>
        `;
            Archivesroom.appendChild(newEmplyee);
            Archivesroomcounter++;
            Archivesvisi.textContent = `${Archivesroomcounter}/2`
            u.inroom = "True"
            aside.innerHTML= ''
            displayUsers();
            if(Archivesroomcounter > 0){
                const item6 = document.querySelector(`.item6`)
                item6.classList.remove('bg-red-300')
                }
//user info
            const personalinfo = document.getElementById('personalinfo');
            const infobtn = document.getElementById(`useinfo${currentId}`)
            const infoclose = document.getElementById('infoclose');
                infobtn.addEventListener('click', ()=>{
                      userimage.src = u.photo
                      infoname.innerHTML = u.name
                      inforole.innerHTML = u.role
                      infoemail.innerHTML = u.email
                      infophone.innerHTML = u.phone
                  personalinfo.classList.remove('hidden')
                infoclose.addEventListener('click', ()=>{
                  personalinfo.classList.add('hidden')
                  })
                })

            const removeArchives = document.getElementById(`removeArchives${currentId}`)
            removeArchives.addEventListener('click', (e)=> {
                document.getElementById(`Archives${currentId}`).remove()
                Archivesroomcounter--;
                Archivesvisi.textContent = `${Archivesroomcounter}/2`
                u.inroom = "False"
                console.log(u.inroom)
                aside.innerHTML= ''
                displayUsers();
                if(Archivesroomcounter === 0){
                const item6 = document.querySelector(`.item6`)
                item6.classList.add('bg-red-300')
                }
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

function displayUsers() {
  GlobalArray.forEach(u => {

    if (u.inroom === 'True') {
      return; 
    }

    const znewdiv = document.createElement('div');
    znewdiv.classList =
      'flex items-center gap-3 bg-green-200 shadow-md rounded-xl h-[65%] p-3 lg:w-[100%] w-[90%] lg:h-20 m-2 hover:shadow-lg transition';
    znewdiv.id = `yy${counter1}`;

    znewdiv.innerHTML = `
      <img src="${u.photo}" class="w-10 h-10 rounded-full object-cover border" alt="Employee img">
      <div class="flex flex-col justify-between w-[100%] p-1">
        <h1 class="text-sm font-semibold text-gray-800">${u.name}</h1>
        <h2 class="text-sm font-semibold text-gray-700">${u.role}</h2>
        <h2 class="text-sm font-semibold text-gray-700">Unassigned</h2>
      </div>
    `;

    aside.appendChild(znewdiv);

    counter1++;
  });
}

     //  <button type="button" id="removing${counter1}">
    //         <img class="h-5 w-5" src="./Images/supprimer.png" alt="close btn">
    //       </button>
    // const remo = document.getElementById(`removing${counter1}`)
    // const yy = document.getElementById(`yy${counter1}`)
    // remo.addEventListener('click', ()=> {
    //    yy.remove()
    //    console.log(GlobalArray.indexOf(u))
    //    const index = GlobalArray.indexOf(u); 
    //     GlobalArray.splice(index, 1);
    //      console.log(GlobalArray)

