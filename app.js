
/////////////////////////////
var playlist = new Playlist();

var beatles = new Song('Nowhere Man', 'The Beatles', '3:00');
var taylor = new Song('New Romantics', 'Taylor Swift', '4:00');
var larena = new Song('L\'Arena', 'Ennio Morricone', '5:00');

var manofsteel = new Movie("Man of Steel", "2014", "3:00:00");

playlist.add(manofsteel);
playlist.add(beatles);
playlist.add(taylor);
playlist.add(larena);

var list = document.getElementById('playlist');


playlist.renderInElement(list);


playButton = document.getElementById('play');
nextButton = document.getElementById('next');
stopButton = document.getElementById('stop');

playButton.onclick = function(){
	playlist.play();
	playlist.renderInElement(list);
};
nextButton.onclick = function(){
	playlist.next();
	playlist.renderInElement(list);
};
stopButton.onclick = function(){
	playlist.stop();
	playlist.renderInElement(list);
};
