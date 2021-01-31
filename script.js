// source for phrases: https://tvtropes.org/pmwiki/pmwiki.php/Quotes/JoJosBizarreAdventure
const jojoPhrases = {
    _data:[
        {
            phrase: "What did you say? Depending on your answer, I may have to kick your ass!",
            utterer: "Joseph Joestar",
            arc: "Battle Tendency"
        },
        {
            phrase: "Oh? You're approaching me? Instead of running away, you come right to me? Even though your grandfather, Joseph, told you the secret of The World, like an exam student scrambling to finish the problems on an exam until the last moments before the chime?",
            utterer: "DIO",
            arc: "Stardust Crusaders"
        },
        {
            phrase: "Yare Yare Daze",
            utterer: "Jotaro Kujo",
            arc: "Stardust Crusaders"
        },
        {
            phrase: "This taste... Is the taste of someone who's lying! Giorno Giovanna!",
            utterer: "Bruno Bucciarati",
            arc: "Vento Aureo"
        },
        {
            phrase: "My heart and actions are utterly unclouded! They are all those of justice.",
            utterer: "Funny Valentine",
            arc: "Steel Ball Run"
        },
        {
            phrase: "SILVER ARM METAL OVERDRIVE!",
            utterer: "Jonathan Joestar",
            arc: "Phantom Blood"
        }
    ],

    get data(){
        return this._data;
    },

    addPhrase(phrase, utterer, arc){
        const newPhrase = {
            phrase,
            utterer,
            arc
        };
        this._data.push(newPhrase);
    },
    random(){
        // Make a random number
        let randomNum = Math.floor(Math.random() * this._data.length);

        // Copy data of random phrase
        let outputPhrase = this._data[randomNum].phrase;
        let outputUtterer = this._data[randomNum].utterer;
        let outputArc = this._data[randomNum].arc;

        // Output formatted phrase
        return `${outputPhrase} \n By: ${outputUtterer} \n On: ${outputArc}`;
    }        
};

// Console output
console.log(jojoPhrases.random());