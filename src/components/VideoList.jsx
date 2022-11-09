import VideoListEntry from './VideoListEntry.js';

var VideoList = ({videoFeed, getPlaying}) =>{

  return (
    <div className="video-list">
      <div>
        {videoFeed.map((dataInstance) => <VideoListEntry dataInstance={dataInstance} getPlaying={getPlaying} key={dataInstance.id.videoId} />)}
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videoFeed: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

// {array.map((item) => (
//   <GroceryListItem item = {item}/>
// ))}