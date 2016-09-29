alert( "Stepping through the door you see a badger. It looks real feisty, and it's eyeing you suspiciously. You really wish you hadn't read that 'Badgers Weekly' magazine, since you now know that badgers will bite down on your shinbone and never let go.")
var user = prompt( "Do you FIGHT it, TALK to it, or QUIT your job?" ).toUpperCase();

switch( user ) {
    case "FIGHT":
        var strong = "Now, the question you wanna ask yourself: 'Am I strong enough to handle one lonely little badger?' Then you'll want to answer that question with a YES or NO";
        //var smart = "
        console.log( "heh" );
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