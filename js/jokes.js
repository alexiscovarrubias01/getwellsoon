$(document).ready(function(){

    const nerdyJokes = [
        "Why did the math book look sad?Because it had too many problems.",
        "Why do Java developers wear glasses? Because they can't C#!",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
        "There are only 10 types of people in the world: those who understand binary and those who don't.",
        "Why did the math book look sad? Because it had too many problems.",
        "What do you call an educated tube? A graduated cylinder",
        "Why did the computer go to therapy? It had too many bytes of emotional baggage",
        "Why are quantum physicists so poor at lying? Because they can't be certain",
        "What's a computer's favorite snack? Microchips.",
        "Why did the computer show up at work late? It had a hard drive",
        "Why did the chicken join a band? Because it had the drumsticks.",
        "Why did the skeleton go to the party alone? He had no body to go with",
        "Why did the integer drown? It couldn't float"
    ];

    $("#get-joke").click(function(){
        let random = Math.floor(Math.random() * nerdyJokes.length);
        $("#jokes-text").text(nerdyJokes[random]);
    });

});