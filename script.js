const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// Seleziono il container per i membri del team
const teamContainer = document.getElementById("team-container");
// Chiamo la funzione per renderizzare i membri del team
printTeamMembers();


// Ciclo l'array teamMembers e stampo i dati in console
for (let key in teamMembers) {
  const member = teamMembers[key];
  console.log(`Nome: ${member.name}, Ruolo: ${member.role}, Email: ${member.email}`);
}


// Funzione che crea una card per ogni membro del team
function creaTeamMemberCard(member) {
  return `
    <div class="col-12 col-md-6 col-lg-4 mb-4">
      <div class="card w-100 member-card">
        <div class="d-flex align-items-center p-2">
          <img src="${member.img}" alt="${member.name}" >
          <div>
            <h5 class="card-title mb-2">${member.name}</h5>
            <p class="card-text mb-2">${member.role}</p>
            <a href="mailto:${member.email}" class="btn btn-primary btn-sm mybtn">${member.email}</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Funzione che stampa le card dei membri del team nel container
function printTeamMembers() {
  let row = `
    <div class="container">
      <div class="row ">
  `;
  for (let key in teamMembers) {
    const member = teamMembers[key];
    row += creaTeamMemberCard(member);
  };
  row += `
      </div>
    </div>
  `;
  teamContainer.innerHTML = row;
}