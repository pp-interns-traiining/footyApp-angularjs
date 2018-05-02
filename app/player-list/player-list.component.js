'use-strict';
class PlayerListCtrl {
  constructor() {
  }

  $onInit() {
    this.filteredPlayers = this.players;
    this.positions = {
      keepers: ['Keeper'],
      defenders: ['Centre-Back', 'Left-Back', 'Right-Back'],
      midfielders: ['Left Wing', 'Right Wing', 'Left Midfield', 'Right Midfield', 'Defensive Midfield', 'Central Midfield', 'Attacking Midfield'],
      forwards:['Centre-Forward', 'Secondary Striker']
    };
  }

  // $onChanges(changes) {
  //   console.log('onChange: ',changes)
  //   if (changes.players.currentValue)
  //     this.filteredPlayers = changes.players.currentValue;
  // }

  updatePlayerList() {
    console.log('this.playerType:', this.playerType)
    const filterPositions = this.positions[this.playerType];
    console.log('filterPositions:', filterPositions)
    this.filteredPlayers = this.players.filter(
      player => filterPositions.includes(player.position)
    );
  }

  addPlayer(playerId) {
    // alert(playerId);
    this.onShowPlayer({
      player: playerId
    })
  }
}



angular
  .module('dummyFootball')
  .filter('filterFn', function() {
    return function filteredPlayers(player) {
      return player.name + ": " + player.position;
    }
  })
  // .filter('positionSelected', function(data) {
  //   console.log('data:', data);
  //   return function filteredPlayers(player) {
  //     console.log('player:',player);
  //     return player.name;
  //   }
  // })
  // .filter('myFilter', filterFn)
  .component('playerList', {
    templateUrl: 'player-list/player-list.template.html',
    controller: PlayerListCtrl,
    bindings: {
      players: "<",
      onShowPlayer: "&",
    }
});
