function Playlist() {
	this.songs = [];///this is an array of Media objects
	this.nowPlayingIndex = 0; //current index in the songs array

}

Playlist.prototype.add = function(song) {
	this.songs.push(song); //this adds a Media object to the songs array 

};

Playlist.prototype.play = function() {
	var currentSong = this.songs[this.nowPlayingIndex]; //sets the position in the songs array
	currentSong.play(); //This play() method is from the Media object, no the playlist object. Sets the currect Media object's 'isPlaying' property to True
};

Playlist.prototype.stop = function(){
	var currentSong = this.songs[this.nowPlayingIndex]; //sets the position in the songs array
	currentSong.stop(); //This stop() method is from the Media object, not the playlist object. sets the currect Media object's 'isPlaying' property to False
};

Playlist.prototype.next = function() {
	console.log(this);
	this.stop(); //This stop() method is from the Playlist object. Sets the current Media object's isPlaying property to False;
	this.nowPlayingIndex += 1; //advances the array by one
	if(this.nowPlayingIndex > this.songs.length-1){ //if after advancing the array by one, the index is greater than the number of songs, the index is set back to 0 to start the playlist over
		this.nowPlayingIndex = 0;
	}
	this.play(); //this play() method is from the Playlist object. sets the current Media object's isPlaying property to False
};

Playlist.prototype.renderInElement = function(element) {
	element.innerHTML = "";
	for(i=0; i<this.songs.length; i++){ 
		element.innerHTML += this.songs[i].toHTML();//loops through song's array and calls the Media object's toHTML() method to add each Media object to the unordered list in the html.
	}

};











