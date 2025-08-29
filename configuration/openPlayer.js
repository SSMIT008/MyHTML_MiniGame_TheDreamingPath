// Function that opens audio player
function openPlayer() {
    if (!window.playerWindow || window.playerWindow.closed) {
        window.playerWindow = window.open(
            "./music/player.html",    // This is a separate file containing your audio
            "MusicPlayer",
            "width=300,height=100"
        );
    }
}