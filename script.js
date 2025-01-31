document.getElementById('loadPlayers').addEventListener('click', loadPlayers);

const cohortName = '2501-ftb-et-web-ft';
const apiBaseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

async function loadPlayers() {
  try {
    const response = await fetch(`${apiBaseUrl}/players`);
    
    if (!response.ok) {
      console.error('Error fetching players:', await response.text());
      return;
    }

    const result = await response.json();
    if (result.success) {
      displayPlayers(result.data.players);
    } else {
      console.error('Error loading players:', result.error);
    }
  } catch (err) {
    console.error('Error in fetch request:', err);
  }
}

function displayPlayers(players) {
  const playersContainer = document.getElementById('players-container');
  playersContainer.innerHTML = '';  // Clear the container before adding new players

  players.forEach(player => {
    const playerCard = document.createElement('div');
    playerCard.classList.add('player-card');
    
    playerCard.innerHTML = `
      <img src="${player.imageUrl}" alt="${player.name}">
      <h3>${player.name}</h3>
      <p>Breed: ${player.breed}</p>
      <p>Status: ${player.status}</p>
    `;
    
    playersContainer.appendChild(playerCard);
  });
}
