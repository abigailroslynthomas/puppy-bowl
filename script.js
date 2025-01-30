const baseURL = 'https://fsa-puppy-bowl.herokuapp.com/api/2206-CPU-RM-WEB-PT';

// fetching the roster of puppies 
async function fetchRoster() {
    try {
        const response = await fetch ('${baseURL}/roster');
        const data = await response.json();
        renderRoster(data.players);
    } catch (error) {
        console.error('Error fetching roster:, error');
    }
    
}
// Remove a player from the roster
async function removePlayer(playerId)