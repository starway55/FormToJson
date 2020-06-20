import React, { useState, Fragment } from 'react';
import './NewFormComponent.css'

const NewFormComponent = (props) => {
  
  return (
		<div className="form-border">
			<div className="plus-div">
				+
			</div>
			<div className="container">
				<div className="row">
					<div className="col-6">
						<div className="click-area-multiple-choice" onClick={(event) => props.changeComponentType("choice", props.index)}>
							<span>
								Multiple Choice
							</span>
						</div>
					</div>
					<div className="col-6">
						<div className="click-area-text-area" onClick={(event) => props.changeComponentType("textBox", props.index)}>
							<span>
								Text Area
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default NewFormComponent;
