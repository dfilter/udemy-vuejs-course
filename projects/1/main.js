
new Vue({
    el: '#app',
    data: {
        playerHp: 100,
        monsterHp: 100,
        specialCount: 3,
        startNew: false,
        enableSpecial: true,
        combatLog: []
    },
    methods: {
        getRandom: function(max) {
            return Math.floor((Math.random() * max) + 1);
        },
        heal: function() {
            var heal = this.getRandom(10);
            var monsterDamage = this.getRandom(10);
            this.combatLog.push({player: false, hit: true, amount: monsterDamage});
            this.combatLog.push({player: true, hit: false, amount: heal});
            this.playerHp = this.playerHp + (heal - monsterDamage);
        },
        attack: function(max) {
            this.specialCount < 1 ? this.enableSpecial = false : this.enableSpecial = true;
            max == 20 ? this.specialCount-- : null;
            var playerDamage = this.getRandom(max);
            var monsterDamage = this.getRandom(10);
            this.combatLog.push({player: false, hit: true, amount: monsterDamage});
            this.combatLog.push({player: true, hit: true, amount: playerDamage});
            this.playerHp -= monsterDamage;
            this.monsterHp -= playerDamage;
        },
        newGame: function(isNewGame) {
            this.enableSpecial = true;
            this.startNew = isNewGame;
            this.specialCount = 3;
            this.playerHp = 100;
            this.monsterHp = 100;
            this.combatLog = [];
            isNewGame ? alert('You retreat like a coward!') : null;
        }
    },
    watch: {
        playerHp: function() {
            if (this.playerHp <= 0) {
                alert('The monster brutally murdered you!');
                this.startNew = true;
            }
            if (this.playerHp > 100) {
                this.playerHp = 100;
            }
        },
        monsterHp: function() {
            if (this.playerHp > 0 && this.monsterHp <= 0) {
                alert('You slew the monster!');
                this.startNew = true;
            }
        }
    }
});
