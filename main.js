let readline = require('readline-sync');

class Herolist {

    heroes = [{ 'hero': 'U(nope count)' }];
    checkedHeroes = [];

    showCommands() {
        console.log(' To add hero enter: add');
        console.log( 'To stop Herolist enter: stop');
    }
//показывает всё
    showHeroList() {
        console.log( 'Your Heroes:');

        for (let i = 0; i < this.heroes.length; i++) {
            console.log(`\t${i + 1}. ${this.heroes[i]['hero']}`);
        }
        this.showCommands();
        this.enterCommand();
    }
//добавляет героя к твоей колоде 
    enterHero() {
        let hero = readline.question('Enter your hero(spearman,gunslinger,swordman): ');

        return hero;
    }
//консольные командки 
    enterCommand() {
        let command = readline.question('Enter your command: ');

        switch (command) {
            case 'add':
                {
                    let hero = this.enterHero();
                    this.fillHero(hero);
                    this.showHeroList();
                    break;
                }
            case 'stop':
                {
                    break;
                }

            default:
                {
                    console.log( 'This command nope isnt found!');
                    this.showHeroList();
                    break;
                }
        }
    }
//заполнение строки 
    fillHero(heroText) {
        this.heroes.push({ 'hero': heroText });
    }
}

let herolist = new Herolist();

herolist.showHeroList();