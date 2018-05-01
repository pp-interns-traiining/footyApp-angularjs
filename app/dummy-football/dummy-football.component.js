class DummyFootballCtrl {
  constructor($http) {
    this.$http = $http;
  }
  getPremierLeague() {
    this.$http.get('premier-league/premier.json').then((response) => {
      console.log(this.players = response.data);
    })
  };
}

DummyFootballCtrl.inject = ['$http'];

angular.
  module('dummyFootball').
  component('dummyFootball', {
    templateUrl: 'dummy-football/dummy-football.template.html',
    controller: DummyFootballCtrl
  });
