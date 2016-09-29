alert( "Stepping through the door you see a badger. It looks real feisty, and it's eyeing you suspiciously. You really wish you hadn't read that 'Badgers Weekly' magazine, since you now know that badgers will bite down on your shinbone and never let go.")
var user = prompt( "Do you FIGHT it, TALK to it, or QUIT your job?" ).toUpperCase();

switch( user ) {
    case "FIGHT":
        var strong = prompt( "Now, the first question you want ask yourself: 'Am I strong enough to handle one lonely little badger?' Then you'll want to answer that question with a YES or NO." ).toUpperCase();
        var smart = prompt( "The second question you'll want to ask yourself is: 'Am I smart enough to handle this suspicous looking badger?' Then you definitely want to answer that question with a YES or NO." ).toUpperCase();
        if ( strong === "YES" && smart != "NO" ) {
            console.log( "Having read that 'Weekly Badgers' magazine, you feel assured that your perfectly normal human strenght surely will be enough to handle one little rock hard dangerously aggressive badger." );
            console.log( "You're wrong though. Terribly wrong. Just as you think 'I'm gonna rush the little sucker and get him first', the badger rushes you. No time to react, the badger is fast as a bullet and reaches your shinbone before you even get the chance to say: 'OW!'" );
        }
        console.log( "" );
        break;
    case "TALK":
        console.log( "Hello, master!" );
        break;
    case "QUIT":
        console.log( "Why hello there Grutt!" );
        break;
    default:
        console.log( "Meh, doesn't matter what your name is really..." );
}