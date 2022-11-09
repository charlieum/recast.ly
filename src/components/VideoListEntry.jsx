var VideoListEntry = ({dataInstance, getPlaying}) => {
  //const [hover, setHover] = useState(false); onClick => setHover(!hover)
  // console.log(test);

  return (
    <div onClick = {() => getPlaying(dataInstance)} className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={dataInstance.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{dataInstance.snippet.title}</div>
        <div className="video-list-entry-detail">{dataInstance.snippet.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  dataInstance: PropTypes.object.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
