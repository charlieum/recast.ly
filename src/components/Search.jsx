import searchYouTube from '../lib/searchYouTube.js';

var Search = ({getVideos}) => {
  const [entry, setEntry] = React.useState('');

  const handleInputChange = (event) => {
    setEntry(event.target.value);
    if (event.target.value.length > 3) {
      getVideos(entry);
    }
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" value={entry} onChange={handleInputChange} />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
