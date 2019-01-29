class LeaderboardController {

    constructor() {

        this.__names = [];
        this.__scores = [];
        this.__times = [];

        this.__wrapper = $('#ldbWrapper')[0];

        this.__playerCol = $('.playerCol')[0];
        this.__scoreCol = $('.scoreCol')[0];
        this.__timeCol = $('.timeCol')[0];
    }

    init(players) {

        return new Promise((resolve, reject) => {

            try {        
                players.map(player => {

                    this.__names.push(player.name);
                    this.__scores.push(player.score);
                    this.__times.push(player.time);
                });

                resolve();
            }
            catch(err) {
                reject('Erreur lors du traitement des données du leaderboard (côté client) :' + err.message);
            }
        });
    }

    printAll() {

        this.__names.map(name => this.print(name, this.__playerCol));
        this.__scores.map(score => this.print(score, this.__scoreCol));
        this.__times.map(time => this.print(time, this.__timeCol));
    }


    print(content, col) {

        let elt = document.createElement('div');

        elt.innerHTML = content;

        $(col).append(elt);
    }
}