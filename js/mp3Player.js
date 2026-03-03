$(document).ready(function(){
    const songs = [
        {
            title:"Hotel California",
            file: "hotelCalifornia.mp3",
            image: "/mp3/piss-in-the-wind.jpg"
        },
        {
            title:"1AM FREESTYLE",
            file: "1amFreestyle.mp3",
            image: "/mp3/smithereens.png"
        }
    ];
    let currentIndex = 0;
    let audio = $("#audioPlayer")[0];

    function loadSong(index){
        audio.src = songs[index].file;
        $("albumArt").attr("src", songs[index].image);
        $("songTitle").text(songs[index].title);
    }
    $("playPause").click(function(){
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
        currentIndex = (currentIndex - 1 + songs.length) %songs.length;
        loadSong(currentIndex);
        audio.play();
    });
    $("#shuffle").click(function(){
        currentIndex = Math.floor(Math.random()*songs.length);
    });
    loadSong(currentIndex);
});