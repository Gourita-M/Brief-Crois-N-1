//for tests 

const users = [
  {
    name: "Lina Farouk",
    email: "lina.farouk@example.com",
    phone: "0623123401",
    inroom: "False",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    role: "Receptionist",
    current: "none",
    experiences: [
      { experience: "Customer Support", description: "Front desk assistance and guiding visitors", startDate: "2024-01-10", endDate: "2025-05-20" },
      { experience: "Appointment Scheduling", description: "Handled daily bookings and meeting arrangements", startDate: "2023-05-01", endDate: "2024-01-01" }
    ]
  },

  {
    name: "Adam Benali",
    email: "adam.benali@example.com",
    phone: "0625431200",
    inroom: "False",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    role: "IT Technician",
    current: "none",
    experiences: [
      { experience: "Hardware Fixing", description: "Repaired computers, printers, and office equipment", startDate: "2023-02-12", endDate: "2024-11-01" },
      { experience: "Software Troubleshooting", description: "Installed and configured company software", startDate: "2022-04-01", endDate: "2023-02-10" }
    ]
  },

  {
    name: "Sara Madi",
    email: "sara.madi@example.com",
    phone: "0634520001",
    inroom: "False",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    role: "Security Team",
    current: "none",
    experiences: [
      { experience: "CCTV Monitoring", description: "Supervised security cameras and incident reporting", startDate: "2022-05-01", endDate: "2024-07-15" },
      { experience: "Visitor Screening", description: "Checked badges and controlled gate entry", startDate: "2021-03-01", endDate: "2022-05-01" }
    ]
  },

  {
    name: "Yassine Toumi",
    email: "yassine.toumi@example.com",
    phone: "0641212213",
    inroom: "False",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    role: "Cleaning Team",
    current: "none",
    experiences: [
      { experience: "Building Maintenance", description: "Handled trash disposal and workspace upkeep", startDate: "2021-01-01", endDate: "2023-01-01" },
      { experience: "Equipment Cleaning", description: "Cleaned meeting rooms and office equipment", startDate: "2020-05-01", endDate: "2021-01-01" }
    ]
  },

  {
    name: "Nadia Rahou",
    email: "nadia.rahou@example.com",
    phone: "0612312390",
    inroom: "False",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    role: "Receptionist",
    current: "none",
    experiences: [
      { experience: "Guest Handling", description: "Welcomed visitors and provided directions", startDate: "2020-08-10", endDate: "2023-05-20" },
      { experience: "Phone Reception", description: "Managed incoming calls and transferred messages", startDate: "2019-02-01", endDate: "2020-08-10" }
    ]
  },

  {
    name: "Omar Idrissi",
    email: "omar.idrissi@example.com",
    phone: "0676543210",
    inroom: "False",
    photo: "https://randomuser.me/api/portraits/men/6.jpg",
    role: "Manager",
    current: "none",
    experiences: [
      { experience: "Team Leader", description: "Supervised IT and admin teams", startDate: "2021-03-14", endDate: "2024-12-20" },
      { experience: "Budget Planning", description: "Managed annual department budgets", startDate: "2020-01-01", endDate: "2021-03-14" }
    ]
  },

  {
    name: "Rania Tahiri",
    email: "rania.tahiri@example.com",
    phone: "0609876521",
    inroom: "False",
    photo: "https://randomuser.me/api/portraits/women/7.jpg",
    role: "Security Team",
    current: "none",
    experiences: [
      { experience: "Office Patrol", description: "Performed regular patrol rounds inside the building", startDate: "2023-07-01", endDate: "2025-01-10" },
      { experience: "Emergency Response", description: "Assisted during fire drills and safety procedures", startDate: "2022-01-01", endDate: "2023-07-01" }
    ]
  },

  {
    name: "Hamza Mouline",
    email: "hamza.mouline@example.com",
    phone: "0623456765",
    inroom: "False",
    photo: "https://randomuser.me/api/portraits/men/8.jpg",
    role: "Cleaning Team",
    current: "none",
    experiences: [
      { experience: "Deep Cleaning", description: "Maintained carpets, floors, and high-traffic areas", startDate: "2022-10-01", endDate: "2024-03-01" },
      { experience: "Sanitization", description: "Disinfected desks and shared equipment", startDate: "2021-01-01", endDate: "2022-10-01" }
    ]
  },

  {
    name: "Meryem Zahidi",
    email: "meryem.zahidi@example.com",
    phone: "0665432123",
    inroom: "False",
    photo: "https://randomuser.me/api/portraits/women/9.jpg",
    role: "IT Technician",
    current: "none",
    experiences: [
      { experience: "Network Setup", description: "Installed routers, switches, and Ethernet lines", startDate: "2021-09-05", endDate: "2023-11-05" },
      { experience: "Server Monitoring", description: "Checked server performance and daily backups", startDate: "2020-04-01", endDate: "2021-09-05" }
    ]
  },

  {
    name: "Karim El Amrani",
    email: "karim.elamrani@example.com",
    phone: "0654321987",
    inroom: "False",
    photo: "https://randomuser.me/api/portraits/men/10.jpg",
    role: "Manager",
    current: "none",
    experiences: [
      { experience: "Office Management", description: "Coordinated departments and supervised schedules", startDate: "2020-01-01", endDate: "2023-08-18" },
      { experience: "Staff Training", description: "Trained new employees in workplace procedures", startDate: "2019-01-01", endDate: "2020-01-01" }
    ]
  },

  // ---- I will continue the rest if you confirm. ----
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
  const aside = document.getElementById('aaside');

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
const inforoom = document.getElementById('inforoom')



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
             placeholder="Experience" required>
      <input type="text"
             class="Description flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
             placeholder="Description" required>
      <div class="flex justify-around items-center">
        <label for="start">Start</label>
        <input type="date" class="start border ml-3 mr-3 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" required>
        <label for="end">End</label>
        <input type="date" class="end border ml-3 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" required>
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
employeeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const Experiences = [];

  addForm.classList.add('hidden');

  const formname = document.getElementById('formname').value.trim();
  const formphone = document.getElementById('formphone').value.trim();
  const formemail = document.getElementById('formemail').value.trim();
  const formrole = document.getElementById('formrole').value.trim();
  const photo = document.getElementById('photo').value.trim();

  if(formphone.length < 10){
    console.log('Phone Number Can not be -10 numbers ')
    return
  }else if(formphone.length > 10){
    console.log('Phone Number Can not be +10 numbers');
    return
  }
  const formexper = document.querySelectorAll('.Experience');
  const formDescription = document.querySelectorAll('.Description');
  const formStart = document.querySelectorAll('.start');
  const formEnd = document.querySelectorAll('.end');


  formexper.forEach((expInput, index) => {
    Experiences.push({
      experience: expInput.value,
      description: formDescription[index].value,
      startDate: formStart[index].value,
      endDate: formEnd[index].value
    });
  });

  GlobalArray.push({
    name: formname,
    role: formrole,
    photo: photo,
    email: formemail,
    phone: formphone,
    experiences: Experiences
  });

  console.log(GlobalArray);

  let counter = GlobalArray.length;

  const newdiv = document.createElement('div');
  newdiv.className = 'flex items-center gap-3 bg-green-200 shadow-md rounded-xl h-[65%] p-3 lg:w-[100%] w-[90%] lg:h-20 m-1 hover:shadow-lg transition';
  newdiv.id = `div${counter}`;

  newdiv.innerHTML = `  
        <img src="${photo}" class="w-10 h-10 rounded-full object-cover border" alt="Employee img">
      <div class="flex flex-col justify-between w-[100%] p-1">
        <h1 class="text-sm font-semibold text-gray-800">${formname}</h1>
        <h2 class="text-sm font-semibold text-gray-700">${formrole}</h2>
      </div>
    `;

  aside.prepend(newdiv);

  employeeForm.reset();
});


const Conferenceroombtn = document.getElementById('Conferenceroombtn');
const popup = document.getElementById("availableEmployeesPopup");
const closeBtn = document.getElementById("closeEmployeesPopup");
const employeelist = document.getElementById("employeelist");
const confrensvisi = document.querySelector('.confrensvisi');

// Conference Room
let confrencercounter = 0;
let emplyeeaddid = 1

Conferenceroombtn.addEventListener("click", () => {
    popup.classList.remove("hidden");

    if(confrencercounter >= 4 ){
        alert('Only 4 People are allowed to Enter this Room');
        popup.classList.add("hidden");
        return;
    }

    employeelist.innerHTML = "";
                              
    const arraytemp = GlobalArray.filter(user =>
    user.role === "Manager" || user.role === "IT Technician" ||
    user.role === "Receptionist" || user.role === "Security Team" ||
    user.role === "Cleaning Team"
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

      const addzz = document.getElementById(`addd${currentId}`);
        addzz.addEventListener('click', () => {
            if(confrencercounter >= 4 ){
                alert('Only 4 People are allowed to Enter this Room');
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
            confrensvisi.textContent = `${confrencercounter}/4`
            u.inroom = "True"
            u.current = "Conference Room"
            console.log(u.inroom)
            aside.innerHTML= ''
            displayUsers();
 
            const personalinfo = document.getElementById('personalinfo');
            const infobtn = document.getElementById(`useinfo${currentId}`)
            const infoclose = document.getElementById('infoclose');
                infobtn.addEventListener('click', ()=>{
                      userimage.src = u.photo
                      infoname.innerHTML = u.name
                      inforole.innerHTML = u.role
                      infoemail.innerHTML = u.email
                      infophone.innerHTML = u.phone
                      inforoom.textContent = u.current
                      experienceinfo(u)
                  personalinfo.classList.remove('hidden')
                  infoclose.addEventListener('click', ()=>{
                  personalinfo.classList.add('hidden')
                  })
                })
   
            const removebbt = document.getElementById(`remove${currentId}`)
            removebbt.addEventListener('click', (e)=> {
                document.getElementById(`d-${currentId}`).remove()
                confrencercounter--;
                confrensvisi.textContent = `${confrencercounter}/4`
                u.inroom = "False"
                u.current = "None"
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
        || user.role === "Cleaning Team"
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
                  <button id="useinfores${currentId}" class="flex items-center gap-3">
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
            u.current = "Reception Room"
            aside.innerHTML= ''
            displayUsers();
            if(Receptioncounter > 0){
            const item2 = document.querySelector(`.item2`)
            item2.classList.remove('bg-red-300')
            }

            const personalinfo = document.getElementById('personalinfo');
            const infobtn = document.getElementById(`useinfores${currentId}`)
            const infoclose = document.getElementById('infoclose');
                infobtn.addEventListener('click', ()=>{
                      userimage.src = u.photo
                      infoname.innerHTML = u.name
                      inforole.innerHTML = u.role
                      infoemail.innerHTML = u.email
                      infophone.innerHTML = u.phone
                      inforoom.textContent = u.current
                      experienceinfo(u)
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
                u.current = "None"
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
        || user.role === "Cleaning Team"
    );

    arraytemp.forEach(u => {
      if(u.inroom === 'True'){
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
                  <button id="useinfoser${currentId}" class="flex items-center gap-3">
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
            u.current = "Server Room"
            aside.innerHTML= ''
            displayUsers();
            if(Serverroomcounter > 0){
            const item3 = document.querySelector(`.item3`)
            item3.classList.remove('bg-red-300')
            }
            
            const personalinfo = document.getElementById('personalinfo');
            const infobtn = document.getElementById(`useinfoser${currentId}`)
            const infoclose = document.getElementById('infoclose');
                infobtn.addEventListener('click', ()=>{
                      userimage.src = u.photo
                      infoname.innerHTML = u.name
                      inforole.innerHTML = u.role
                      infoemail.innerHTML = u.email
                      infophone.innerHTML = u.phone
                      inforoom.textContent = u.current
                      experienceinfo(u)
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
                u.current = "None"
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
        || user.role === "Cleaning Team"
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
                  <button id="useinfosecu${currentId}" class="flex items-center gap-3">
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
            u.current = "Security Room"
            aside.innerHTML= ''
            displayUsers();
            if(securityroomcounter > 0){
            const item4 = document.querySelector(`.item4`)
            item4.classList.remove('bg-red-300')
            }

            const personalinfo = document.getElementById('personalinfo');
            const infobtn = document.getElementById(`useinfosecu${currentId}`)
            const infoclose = document.getElementById('infoclose');
                infobtn.addEventListener('click', ()=>{
                      userimage.src = u.photo
                      infoname.innerHTML = u.name
                      inforole.innerHTML = u.role
                      infoemail.innerHTML = u.email
                      infophone.innerHTML = u.phone
                      inforoom.textContent = u.current
                      experienceinfo(u)
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
                u.current = "None"
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
       user.role === "Manager" || user.role === "Cleaning Team"
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
                  <button id="useinfostaff${currentId}" class="flex items-center gap-3">
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
            u.current = "Personnel Room"
            aside.innerHTML= ''
            displayUsers();

            const personalinfo = document.getElementById('personalinfo');
            const infobtn = document.getElementById(`useinfostaff${currentId}`)
            const infoclose = document.getElementById('infoclose');
                infobtn.addEventListener('click', ()=>{
                      userimage.src = u.photo
                      infoname.innerHTML = u.name
                      inforole.innerHTML = u.role
                      infoemail.innerHTML = u.email
                      infophone.innerHTML = u.phone
                      inforoom.textContent = u.current
                      experienceinfo(u)
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
                u.current = "None"
                console.log(u.inroom)
                aside.innerHTML= ''
                displayUsers();
            })
        
        });

        emplyeeaddid5++;
      }
        
    });
});

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
        user.role === "Manager"
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
                  <button id="useinfoArchives${currentId}" class="flex items-center gap-3">
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
            u.current = "Archives Room"
            aside.innerHTML= ''
            displayUsers();
            if(Archivesroomcounter > 0){
                const item6 = document.querySelector(`.item6`)
                item6.classList.remove('bg-red-300')
                }

            const personalinfo = document.getElementById('personalinfo');
            const infobtn = document.getElementById(`useinfoArchives${currentId}`)
            const infoclose = document.getElementById('infoclose');
                infobtn.addEventListener('click', ()=>{
                      userimage.src = u.photo
                      infoname.innerHTML = u.name
                      inforole.innerHTML = u.role
                      infoemail.innerHTML = u.email
                      infophone.innerHTML = u.phone
                      inforoom.textContent = u.current
                      experienceinfo(u)
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
                u.current = "None"
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
    znewdiv.classList ='flex items-center gap-3 bg-green-200 shadow-md rounded-xl h-[65%] p-3 lg:w-[97%] w-[90%] lg:h-16 h-20 m-1 hover:shadow-lg transition';
    znewdiv.innerHTML = `
      <img src="${u.photo}" class="w-10 h-10 rounded-full border" alt="Employee img">
      <div class="flex flex-col justify-between w-[100%] p-1">
        <h1 class="text-center text-sm font-semibold text-gray-800">${u.name}</h1>
        <h2 class="text-center text-sm font-semibold text-gray-600">${u.role}</h2>
      </div>
    `;

    aside.appendChild(znewdiv);
    
    counter1++;
  });
}
function experienceinfo(array){
  const newinfo = document.querySelector('.infoexperience');
                  newinfo.innerHTML = ''
                  array.experiences.forEach((uu)=>{
                    let startyear = new Date(uu.startDate).getFullYear();
                    let endyear = new Date(uu.endDate).getFullYear();
                    console.log(startyear)
                  const newinfodiv = document.createElement('div')
                  newinfodiv.classList = 'flex flex-col'
                  newinfodiv.innerHTML = `
                     <h2 class="text-center text-black mt-2">Experiences</h2>
                     <h3 class="text-center">${uu.experience} : <b>${startyear}</b>-<b>${endyear}</b></h3>
                     <h3 class="text-center">${uu.description}</h3>
                  `
                  newinfo.appendChild(newinfodiv)
                })
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

