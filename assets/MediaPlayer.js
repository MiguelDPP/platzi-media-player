// function MediaPlayer(config) {
//     this.media = config.el;
//     this.plugins = config.plugins || [];

//     this._initPlugins();
// }

// MediaPlayer.prototype._initPlugins = function() {
//     this.plugins.forEach(plugin => {
//         plugin.run(this);
//     });
// }

// MediaPlayer.prototype.play = function() {
//     this.media.play();
// }

// MediaPlayer.prototype.stop = function () {
//     this.media.pause();
// }

// MediaPlayer.prototype.togglePlay = function() {
//     if(this.media.paused){
//         this.play();
//     }else{
//         this.stop();
//     }
// }

// MediaPlayer.prototype.toggleMute = function() {
//     if(this.media.muted) {
//         this.unmute();
//     }else{
//         this.mute();
//     }
// }

// MediaPlayer.prototype.mute = function() {
//     this.media.muted = true;
// }
// MediaPlayer.prototype.unmute = function() {
//     this.media.muted = false;
// }

// Volviendo esto una clase
class MediaPlayer {
    constructor(config){
        this.media = config.el;
        this.plugins = config.plugins || [];

        this._initPlugins();
    }
    _initPlugins(){
        this.plugins.forEach(Plugin => {
            Plugin.run(this);
        });
    };
    play(){
        this.media.play();
    }
    stop(){
        this.media.pause();
    }
    togglePlay(){
        if(this.media.paused){
            this.play();
        }else{
            this.stop();
        }
    }
    mute(){
        this.media.muted = true;
    }
    unmute(){
        this.media.muted = false;
    }
    toggleMute(){
        if(this.media.muted){
            this.unmute();
        }else{
            this.mute();
        }
    }
}

export default MediaPlayer;