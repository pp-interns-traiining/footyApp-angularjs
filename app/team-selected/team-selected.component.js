'use-strict';
class TeamSelectedCtrl {
  constructor() {
  }
};

angular
  .module('dummyFootball')
  .component('teamSelected', {
    templateUrl: 'team-selected/team-selected.template.html',
    controller: TeamSelectedCtrl,
    bindings: {
      players: "<"
    }
  });
