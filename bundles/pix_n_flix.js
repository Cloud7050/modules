(function () {
    'use strict';

    (function() {
        const env = {};
        try {
            if (process) {
                process.env = Object.assign({}, process.env);
                Object.assign(process.env, env);
                return;
            }
        } catch (e) {} // avoid ReferenceError: process is not defined
        globalThis.process = { env:env };
    })();

    var DEFAULT_WIDTH=400;var DEFAULT_HEIGHT=300;var DEFAULT_FPS=10;var MAX_HEIGHT=500;var MIN_HEIGHT=1;var MAX_WIDTH=500;var MIN_WIDTH=1;var MAX_FPS=30;var MIN_FPS=2;

    var WIDTH=DEFAULT_WIDTH;var HEIGHT=DEFAULT_HEIGHT;var videoElement;var canvasElement;var canvasRenderingContext;var errorLogger;var tabsPackage;var pixels=[];var temporaryPixels=[];var filter=copy_image;var videoIsPlaying=false;var FPS=DEFAULT_FPS;var requestId;var startTime;function setupData(){for(var i=0;i<HEIGHT;i+=1){pixels[i]=[];temporaryPixels[i]=[];for(var j=0;j<WIDTH;j+=1){pixels[i][j]=[0,0,0,255];temporaryPixels[i][j]=[0,0,0,255];}}}function isPixelFilled(pixel){var ok=true;for(var i=0;i<4;i+=1){if(pixel[i]>=0&&pixel[i]<=255){continue}ok=false;pixel[i]=0;}return ok}function writeToBuffer(buffer,data){var ok=true;for(var i=0;i<HEIGHT;i+=1){for(var j=0;j<WIDTH;j+=1){var p=i*WIDTH*4+j*4;if(isPixelFilled(data[i][j])===false){ok=false;}buffer[p]=data[i][j][0];buffer[p+1]=data[i][j][1];buffer[p+2]=data[i][j][2];buffer[p+3]=data[i][j][3];}}if(!ok){var warningMessage="You have invalid values for some pixels! Reseting them to default (0)";console.warn(warningMessage);errorLogger(warningMessage,false);}}function readFromBuffer(pixelData,src){for(var i=0;i<HEIGHT;i+=1){for(var j=0;j<WIDTH;j+=1){var p=i*WIDTH*4+j*4;src[i][j]=[pixelData[p],pixelData[p+1],pixelData[p+2],pixelData[p+3]];}}}function drawFrame(){canvasRenderingContext.drawImage(videoElement,0,0,WIDTH,HEIGHT);var pixelObj=canvasRenderingContext.getImageData(0,0,WIDTH,HEIGHT);readFromBuffer(pixelObj.data,pixels);try{filter(pixels,temporaryPixels);writeToBuffer(pixelObj.data,temporaryPixels);}catch(e){console.error(JSON.stringify(e));var errMsg="There is an error with filter function, filter will be reset to default. "+e.name+": "+e.message;console.error(errMsg);if(!e.name){errorLogger("There is an error with filter function (error shown below). Filter will be reset back to the default. If you are facing an infinite loop error, you can consider increasing the timeout period (clock icon) at the top / reducing the video dimensions.");errorLogger([e],true);}else {errorLogger(errMsg,false);}filter=copy_image;filter(pixels,temporaryPixels);}canvasRenderingContext.putImageData(pixelObj,0,0);}function draw(timestamp){requestId=window.requestAnimationFrame(draw);if(!startTime)startTime=timestamp;var elapsed=timestamp-startTime;if(elapsed>1000/FPS){drawFrame();startTime=timestamp;}}function startVideo(){if(videoIsPlaying)return;videoIsPlaying=true;requestId=window.requestAnimationFrame(draw);}function stopVideo(){if(!videoIsPlaying)return;videoIsPlaying=false;window.cancelAnimationFrame(requestId);}function loadMedia(){if(!navigator.mediaDevices.getUserMedia){var errMsg="The browser you are using does not support getUserMedia";console.error(errMsg);errorLogger(errMsg,false);}if(videoElement.srcObject)return;navigator.mediaDevices.getUserMedia({video:true}).then(function(stream){videoElement.srcObject=stream;}).catch(function(error){var errorMessage=error.name+": "+error.message;console.error(errorMessage);errorLogger(errorMessage,false);});startVideo();}function snapPicture(){drawFrame();stopVideo();}function updateFPS(fps){if(fps<MIN_FPS||fps>MAX_FPS){return}var status=videoIsPlaying;stopVideo();FPS=fps;setupData();if(!status){setTimeout(function(){return snapPicture()},50);return}startVideo();}function updateDimensions(w,h){if(w===WIDTH&&h===HEIGHT||w>MAX_WIDTH||w<MIN_WIDTH||h>MAX_HEIGHT||h<MIN_HEIGHT){return}var status=videoIsPlaying;stopVideo();WIDTH=w;HEIGHT=h;videoElement.width=w;videoElement.height=h;canvasElement.width=w;canvasElement.height=h;setupData();if(!status){setTimeout(function(){return snapPicture()},50);return}startVideo();}var _queue=function queue(){};function enqueue(funcToAdd){var funcToRunFirst=_queue;_queue=function(){funcToRunFirst();funcToAdd();};}function lateEnqueue(funcToAdd){var funcToRunFirst=_queue;_queue=function(){funcToRunFirst();funcToAdd();};}function init(video,canvas,_errorLogger,_tabsPackage){videoElement=video;canvasElement=canvas;errorLogger=_errorLogger;tabsPackage=_tabsPackage;var context=canvasElement.getContext("2d");if(!context)throw new Error("Canvas context should not be null.");canvasRenderingContext=context;setupData();loadMedia();_queue();return [HEIGHT,WIDTH,FPS]}function deinit(){stopVideo();var stream=videoElement.srcObject;if(!stream){return}stream.getTracks().forEach(function(track){track.stop();});}function start(){return {toReplString:function(){return "[Pix N Flix]"},init:init,deinit:deinit,startVideo:startVideo,snapPicture:snapPicture,updateFPS:updateFPS,updateDimensions:updateDimensions}}function red_of(pixel){return pixel[0]}function green_of(pixel){return pixel[1]}function blue_of(pixel){return pixel[2]}function alpha_of(pixel){return pixel[3]}function set_rgba(pixel,r,g,b,a){pixel[0]=r;pixel[1]=g;pixel[2]=b;pixel[3]=a;}function video_height(){return HEIGHT}function video_width(){return WIDTH}function copy_image(src,dest){for(var i=0;i<HEIGHT;i+=1){for(var j=0;j<WIDTH;j+=1){dest[i][j]=src[i][j];}}}function install_filter(_filter){filter=_filter;}function reset_filter(){install_filter(copy_image);}function compose_filter(filter1,filter2){return function(src,dest){filter1(src,dest);copy_image(dest,src);filter2(src,dest);}}function pause_at(delay){lateEnqueue(function(){return setTimeout(tabsPackage.onClickStill,delay>=0?delay:-delay)});}function set_dimensions(width,height){enqueue(function(){return updateDimensions(width,height)});}function set_fps(fps){enqueue(function(){return updateFPS(fps)});}

    var index = (function(){return {start:start,red_of:red_of,blue_of:blue_of,green_of:green_of,alpha_of:alpha_of,set_rgba:set_rgba,video_height:video_height,video_width:video_width,copy_image:copy_image,install_filter:install_filter,reset_filter:reset_filter,compose_filter:compose_filter,pause_at:pause_at,set_dimensions:set_dimensions,set_fps:set_fps}});

    return index;

}());
