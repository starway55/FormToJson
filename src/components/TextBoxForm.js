import React, { useState, Fragment } from 'react';

const TextBoxForm = (props) => {
	
	const component = props.component;

  return (
    <div>
      <div className="form-type-title">
        Text Box
      </div>
      <form className="form-border">
        <div className="plus-div">
          +
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input type="text" className="form-control border-0 title-input" placeholder='Type your question here' onChange={(event) => props.editTitle(event.target.value, props.index)} value={component.title}></input>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input className="form-control border-0 description-input" placeholder='Type your description here' onChange={(event) => props.editDescription(event.target.value, props.index)} value={component.description}></input>
          </div>
        </div>

        <hr className="line-break"></hr>

        <div className="form-inline">
          <div className="col-md-6">
            <textarea type="text" className="form-control border-0 textboxPlaceHolder"
            placeholder="PlaceHolder Text" onChange={(event) => props.editPlaceHolder(event.target.value, props.index)}></textarea>
          </div>
          <div className="col-md-2">
            <div className="form-check">
            <input className="form-check-input checkbox-textboxForm" type="checkbox" 
              id="textBoxRequired" value={component.required} onChange={(event) => props.toggleRequired(event, props.index)}></input>
              <label className="form-check-label checkbox-label-textboxForm" htmlFor="textBoxRequired">
                Required
              </label>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2">
            <button type="button" className="btn btn-danger delete-button" onClick={(event) => props.deleteComponent(event, props.index)}>Delete</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TextBoxForm;