class DummyFootballCtrl {
  constructor($http) {
    this.$http = $http;
    this.team = {
      keeper: [],
      defenders: [],
      midfielders: [],
      forwards: []
    };
    this.positions = {
      keeper: ['Keeper'],
      defenders: ['Centre-Back', 'Left-Back', 'Right-Back'],
      midfielders: ['Left Wing', 'Right Wing', 'Left Midfield', 'Right Midfield', 'Defensive Midfield', 'Central Midfield', 'Attacking Midfield'],
      forwards:['Centre-Forward', 'Secondary Striker']
    }
  }

  getPremierLeague() {
    this.$http.get('premier-league/premier.json').then((response) => {
      console.log(this.players = response.data);
    })
  };

  addPlayer(player) {
    console.log(player.position)
    // if (player.position == this.positions.keeper) {

    // } else if (player.position == this.positions.defenders.includes(player.positions)) {
    //   this.team.defenders.push(player);
    // }
    if (this.positions.keeper.includes(player.position)) {
      if (this.team.keeper.length < 1) {
        this.team.keeper.push(player);
      } else {
        alert('Selected 1 keeper already');
      }
    }
    if (this.positions.defenders.includes(player.position)) {
      if (this.team.defenders.length < 4) {
        this.team.defenders.push(player);
      } else {
        alert('Selected 4 defenders already');
      }
    }
    if (this.positions.midfielders.includes(player.position)) {
      if (this.team.midfielders.length < 4) {
        this.team.midfielders.push(player);
      } else {
        alert('Selected 4 midfielders already');
      }
    }
    if (this.positions.forwards.includes(player.position)) {
      if (this.team.forwards.length < 2) {
        this.team.forwards.push(player);
      } else {
        alert('Selected 2 forwards already');
      }
    }

      // this.team.push(player);
    // console.log('data inside parent: ', player, 'team', this.team);
  }

  removePlayer(player) {
    let playerIndexKeeper = this.team.keeper.indexOf(player);
    let playerIndexDefenders = this.team.defenders.indexOf(player);
    let playerIndexMidfielders = this.team.midfielders.indexOf(player);
    let playerIndexForwards = this.team.forwards.indexOf(player);
    if (player.position == 'Keeper') {
    this.team.keeper = [...this.team.keeper.slice(0, playerIndexKeeper), ...this.team.keeper.slice(playerIndexKeeper + 1)]
  } else if (player.position == 'Centre-Back' || player.position == 'Left-Back' || player.position == 'Right-Back') {
    this.team.defenders = [...this.team.defenders.slice(0, playerIndexDefenders), ...this.team.defenders.slice(playerIndexDefenders + 1)]
  } else if (player.position == 'Left Wing' || player.position == 'Right Wing' || player.position == 'Left Midfield' || player.position == 'Right Midfield' || player.position == 'Defensive Midfield' || player.position == 'Central Midfield' || player.position == 'Attacking Midfield') {
    this.team.midfielders = [...this.team.midfielders.slice(0, playerIndexMidfielders), ...this.team.midfielders.slice(playerIndexMidfielders + 1)]
  } else if (player.position == 'Centre-Forward' || player.position == 'Secondary Striker') {
    this.team.forwards = [...this.team.forwards.slice(0, playerIndexForwards), ...this.team.forwards.slice(playerIndexForwards + 1)]
  }
  }
}

DummyFootballCtrl.inject = ['$http'];

angular.
  module('dummyFootball').
  component('dummyFootball', {
    templateUrl: 'dummy-football/dummy-football.template.html',
    controller: DummyFootballCtrl
  });
