function gameObject(){
    
const game={
  teams:{
      homeTeam:{
          teamName:"Brookyln Nets",
          colors:["Black","White",],
          players:{
              alanAnderson:{number:0,shoe:16,points:22,rebounds:12,assists:12,steals:3,blocks:1,slamDunks:1},

          reggie:{number:0,shoe:14,points:12,rebounds:12,assists:12,steals:12,blocks:12,slamDunks:7},
        
          BrookLopez:{number:11,shoe:17,points:17,rebounds:19,assists:10,steals:3,blocks:1,slamDunks:15},

          MasonPlumee:{number:1,shoe:19,points:26,rebounds:12,assists:6,steals:3,blocks:8,slamDunks:5},

             JasonTerry:{number:31,shoe:15,points:19,rebounds:2,assists:2,steals:4,blocks:11,slamDunks:1},

          },
          
      },
      awayTeam:{
          teamName:"Charlotte Hornets",

          colors:["Turquoise", "Purple"],

          players:{
          jeffAdrien:{number:4,shoe:18,points:10,rebounds:1,assists:1,steals:2,blocks:7,slamDunks:2},

          bismakBiyombo:{number:0,shoe:16,points:12,rebounds:4,assists:7,steals:7,blocks:15,slamDunks:10},

          desagnaDiop:{number:2,shoe:14,points:24,rebounds:12,assists:12,steals:4,blocks:5,slamDunks:5},

          benGordon:{number:8,shoe:15,points:33,rebounds:3,assists:2,steals:1,blocks:1,slamDunks:0},

             brendanHaywood:{number:33,shoe:15,points:6,rebounds:12,assists:12,steals:22,blocks:5,slamDunks:12},  
             },
      },
  }  
    
    
    
    
    
    
};    
    
    
    
   return game; 
}

 function homeTeamName() {
  let object = gameObject();
  return object["teams"]["homeTeam"]["teamName"];
}

function numPointsScored(playerName){
    const game= gameObject();

for (const teamKey in game.teams) {
    const team = game.teams[teamKey];
    if (team.players[playerName]) {
      playerShoeSize = team.players[playerName].shoe;
      break;
    }
  }

  return playerShoeSize !== null ? playerShoeSize : `Player ${playerName} not found.`;
    
    
}
numPointsScored();

function shoeSize(playerName){
     const game = gameObject();
let playerShoeSize = null;

  // Iterate over both home and away teams
  for (const teamKey in game.teams) {
    const team = game.teams[teamKey];
    if (team.players[playerName]) {
      playerShoeSize = team.players[playerName].shoe;
      break;
    }
  }

  return playerShoeSize !== null ? playerShoeSize : `Player ${playerName} not found.`;
}
console.log(shoeSize("reggie"));


function teamColors(){
    let object4=gameObject();
    return object4["teams"]["homeTeam"]["teamName"]
}
