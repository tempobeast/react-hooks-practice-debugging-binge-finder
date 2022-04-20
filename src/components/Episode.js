import React from "react";

function Episode(props) {
  console.log(props)
  const { eachEpisode } = props;

  return (
    <div>
      Episode {eachEpisode.number} - {eachEpisode.name}
    </div>
  );
}

export default Episode;
