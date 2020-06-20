import React, { useState, Fragment } from 'react';

// This is the plus button for clicking to add a new component

const PlusButton = (props) => {

  return (
		<div className="form-border">
			<div className="click-area-plus-button" onClick={(event) => props.addComponent(event, props.index)}>
        +
      </div>
		</div>
  );
}

export default PlusButton;
