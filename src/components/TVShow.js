import React from "react";

function TVShow(props) {

  function handleSelectClick(e) {
    props.selectShow(props.show)
  }

  return (
    <div>
      <br />
      <img src={props.show.image.medium} onClick={handleSelectClick} alt="" />
    </div>
  );
}

export default TVShow;
