// import Search from Search.jsx;

import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import VideoListEntry from './VideoListEntry.js';
import searchYouTube from '../lib/searchYouTube.js';

var App = () => {

  const [playedVideo, setPlayedVideo] = React.useState(exampleVideoData[0]);
  const [videoFeed, setVideoFeed] = React.useState(exampleVideoData);

  const getPlaying = (dataInstance) => {
    setPlayedVideo(dataInstance);
  };

  const getFeed = (data) => {
    setVideoFeed(data);
  };

  const getVideos = (query) => {
    searchYouTube(query, (data) => {
      // setPlayedVideo(data[0]);
      setVideoFeed(data);
    });
  };

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div>
            <Search getVideos={getVideos}/>
          </div>

        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
          <VideoPlayer playedVideo={playedVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videoFeed={videoFeed} getPlaying={getPlaying}/>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;


// var nTimes = function(n, func) {
//   var counts = 0;
//   var lastResult;

//   return function (args) {
//     while (counts < n) {
//       lastResult = func.apply(null, arguments);
//       counts++;
//       return lastResult;
//     }
//     return lastResult;

//   };
// };

