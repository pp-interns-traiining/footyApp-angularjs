'use-strict';
class TeamSelectedCtrl {
  constructor() {

  }

    removePlayer(playerName) {
      // alert(playerId);
      this.onRemovePlayer({
        player: playerName
      })
    }

    check() {
      console.log(this.team);
    }
};

angular
  .module('dummyFootball')
  .component('teamSelected', {
    templateUrl: 'team-selected/team-selected.template.html',
    controller: TeamSelectedCtrl,
    bindings: {
      team: "<",
      onRemovePlayer: "&"
    }
  });
