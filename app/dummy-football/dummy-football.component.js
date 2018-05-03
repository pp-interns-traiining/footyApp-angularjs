class DummyFootballCtrl {
  constructor($http) {
    this.$http = $http;
    this.team = [];
  }
  getPremierLeague() {
    this.$http.get('premier-league/premier.json').then((response) => {
      console.log(this.players = response.data);
    })
  };

  addPlayer(player) {
    this.team.push(player);
    console.log('data inside parent: ', player, 'team', this.team);
  }

  removePlayer(player) {
    let playerIndex = this.team.indexOf(player);

    this.team = [...this.team.slice(0, playerIndex), ...this.team.slice(playerIndex + 1)]
  }
}

DummyFootballCtrl.inject = ['$http'];

angular.
  module('dummyFootball').
  component('dummyFootball', {
    templateUrl: 'dummy-football/dummy-football.template.html',
    controller: DummyFootballCtrl
  });
