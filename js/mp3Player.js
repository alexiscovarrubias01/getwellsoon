$(document).ready(function(){
    const songs = [
        {
            title:"1AM FREESTYLE",
            file: "mp3/1AM_FREESTYLE.mp3",
            image: "img/smithereens.png"
        },
        {
            title:"After Thought",
            file: "mp3/Afterthought.mp3",
            image: "img/piss-in-the-wind.jpg"
        }
    ];

    let currentIndex = 0;
    let audio = $("#audioPlayer")[0];

    function loadSong(index){
        audio.src = songs[index].file;

        $("#albumArt").attr("src", songs[index].image);
        $("#songTitle").text(songs[index].title);
    }

    $("#playpause").click(function(){
        if(audio.paused){
            audio.play();
            $(this).text("Pause");
        }
        else{
            audio.pause();
            $(this).text("Play");
        }
    });

    $("#next").click(function(){
        currentIndex = (currentIndex + 1) % songs.length;
        loadSong(currentIndex);
        audio.play();
    });

    $("#prev").click(function(){
        currentIndex = (currentIndex - 1 + songs.length) % songs.length;
        loadSong(currentIndex);
        audio.play();
    });

    $("#shuffle").click(function(){
        currentIndex = Math.floor(Math.random() * songs.length);
        loadSong(currentIndex);
        audio.play();
    });

    loadSong(currentIndex);
});