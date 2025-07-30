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


// Gestione form aggiunta membro
const addMemberForm = document.getElementById('add-member-form');
// Aggiungo un event listener al form per gestire l'invio
addMemberForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const role = document.getElementById('role').value.trim();
  const email = document.getElementById('email').value.trim();
  const img = document.getElementById('img').value.trim();

  if (name && role && email && img) {
    teamMembers.push({ name, role, email, img });
    printTeamMembers();
    this.reset();
  }
});


// Funzione che crea una card per ogni membro del team
function creaTeamMemberCard(member) {
  return `
      <div class="card w-100 member-card shadow">
        <div class="d-flex align-items-center p-2">
          <img src="${member.img}" alt="${member.name}" >
          <div>
            <h5 class="card-title mb-2 bold">${member.name}</h5>
            <p class="card-text mb-2">${member.role}</p>
            <a href="mailto:${member.email}" class="btn btn-primary btn-sm mybtn">${member.email}</a>
          </div>
        </div>
      </div>
  `;
}

// Funzione che stampa le card dei membri del team nel container
function printTeamMembers() {
  let row = ``;
  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    row += `
      <div class="col-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center mb-3 p-1">
        ${creaTeamMemberCard(member)}
      </div>
    `;
  }
  teamContainer.innerHTML = row;
}