alert( "Stepping through the door you see a badger. It looks real feisty, and it's eyeing you suspiciously. You really wish you hadn't read that 'Badgers Weekly' magazine. Apparently badgers will bite down on your shinbone and never let go. And to boot they're as hard as rocks. Mean killing machines in other words." );
alert( "Anyway, the boss wants you to get rid of it, since you're the janitor and all. So you quietly think about your options." );
var user = prompt( "Do you FIGHT it, TALK to it, or QUIT your job?" ).toUpperCase();

switch( user ) {
    case "FIGHT":
        var strong = prompt( "Now, the first question you want ask yourself: 'Am I strong enough to handle one lonely little badger?' Then you'll want to answer that question with a YES or NO." ).toUpperCase();
        var smart = prompt( "The second question you'll want to ask yourself is: 'Am I smart enough to handle this suspicous looking badger?' Then you definitely want to answer that question with a YES or NO." ).toUpperCase();
        if ( strong === "YES" && smart === "NO" ) {
            alert( "Having read that 'Weekly Badgers' magazine, you feel assured that your perfectly normal human strenght surely will be enough to handle one little rock hard dangerously aggressive badger." );
            alert( "You're wrong though. Terribly wrong. Just as you think 'I'm gonna rush the little sucker and get him first', the badger rushes you. No time to react, the badger is as fast as a bullet and reaches your shinbone before you even get the chance to say: 'OW!'" );
        } else if ( strong === "NO" && smart === "YES" ) {
            alert( "You're smart, you're smarter than this badger. You know that you'll be able to think of a plan and execute it perfectly before that little nugget even realizes what the heck is happening. 'I'm a human, a janitor even. That's a stupid little animal. It may have the brawns', you think, 'but I have the prawns!'" );
            alert( "You thought you were smart. But you weren't. You forgot the god damn prawns at home! Not that it would have mattered though. While you were busy thinking of a plan involving prawns, the badger bolted for your shinbone. The badger ain't budging, and you regret your decision." );
        } else if ( strong === "YES" && smart === "YES" ) {
            alert( "You know you're both strong and smart. You work out every single day. Right after work you go to Fitness 24/7, coat yourself in coconut oil (it smells so good!) and you do squats. You do them squats for 15 whole minutes, then you go home, drink your Coca Cola Zero and give yourself a pat on the back. Then you read, because reading makes smart, and you know that so you read. For 35 minutes, then you watch documentaries, usually about global warming." );
            alert( "I know what you're thinking now: 'Global Warming? In 2016? LOL!'. Well, I can only say this: Wisen up people! Global warming is real, and it ain't going away until we get our act together. And I mean everyone." );
            alert( "Anyway, just look at you. So smart and beautiful. If only you weren't so occupied admiring yourself you would've noticed the badger sneaking up on your shinbone, gently opening it's vice like jaws and slowly closing a firm grip on it." );
            alert( "But hey! You're smart, and now you've got all the time in the world to figure out a way to remove that badger from your leg. Maybe you can even make fashion out of it. People walking by you on the street be like: 'Yo man! Yeah, U MAN! That's a fiiiiine lookin' badger yous got therr! I'd luuuuuuv to know where you gots it from!?', and stuff like that? Who knows! That gotta hurt though." );
        } else {
            alert( "You're neither smart nor strong, but you still choose to fight. 'This is the case that makes me or breaks me', you think to yourself. At least if you're a detective or something similar. But you're a janitor though, and badgers don't take lightly to aggression, and they hate janitors. So in this particular case, it will probably break you. Literally break you." );
            user = prompt( "The badger attacks! Do you face it HEAD ON or try to EVADE" ).toUpperCase();
                switch( user ) {
                    case "HEAD ON":
                        alert( "You face it head on like a real champ. But the badger is fast, cunning, incredibly strong, and even more of a champ than you are. It goes for the jugular instead of your shinbone. As warm blood is pulsing and spurting from your throat you silently curse the 'Weekly Badgers' magazine for omitting the 'Frenzied Badgers: and how to handle them'-chapter." );
                        user = prompt( "You're tired, oh so tired. You remember something vaguely... 'did I turn the stove off before I left home?', YES or NO... can't remember." ).toUpperCase();
                            if ( user === "YES" ) {
                                alert( "'Thank God, I turned it off.', your last thought before you slip in to nothingness." );
                            } else {
                                alert( "'God damn it, I didn't turn it off. I was making a meatloaf, and was gonna let it...', your last thought trails as you slip in to nothingness." );
                            }
                        break;
                    case "EVADE":
                        alert( "You move like the wind, you step to the right, you flow to the left, you sting like a water and you feel warm juice running from your throat and all of sudden you're standing in front of a gate" );
                        alert( "Hello son, I'm God. And you seem to be confused. You think you evaded that badger, didn't you? You didn't. It got to your throat real fast, and ended you on the spot. Now come on in, I've got the perfect job for you here. See, ever since Gabriel decided to stay on earth it's gotten real dirty all over the place, and there's no one to help me with the copy machine anymore..." );
                        alert( "You feel empty and dead, again. A janitor, again. You wonder what Hell is like as God prattles on and shows you the cleaning cabinet and your fancy new uniform." );
                    break;
                }
        }
    break;
    /*
    case "TALK":
        alert( "" );
        break;
    case "QUIT":
        alert( "" );
        break;
    */
    default:
        alert( "Meh, doesn't really matter what you do anyway I guess." );

}