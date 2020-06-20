import React, { useState, Fragment } from 'react';

const MultipleChoiceForm = (props) => {
	
	const component = props.component;

	const renderChoices = () => {

		const choices = 
		<div>
			{component.choices.map((choice, index) => {

				return (
					<div key={index} className="form-row choice-div">
            <div className="form-group col-md-3">
              <div className="choice-row">
                <input className="form-control border-0 choice-input" placeholder='Option' value={choice} onChange={(event) => props.editChoice(event.target.value, props.index, index)}></input>
                <button type="button" className="close" aria-label="Close" onClick={(event) => props.deleteChoice(event, props.index, index)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
					</div>
				)
			})}
		</div>

		return choices;
	}

  return (
    <div>
      <div className="form-type-title">
        Multiple Choice
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
        {renderChoices(component)}
        <div className="form-row choice-div">
          <div className="form-group col-md-3">
            <div className="choice-row">
              <button className="form-control border-0 add-button" onClick={(event) => props.addChoice(event, props.index)}>+ Add option</button>
            </div>
          </div>
        </div>
        <hr className="line-break"></hr>
        <div className="form-row">
          <div className="form-group col-md-7 checkbox-row">
            <div className="form-check form-check-inline">
              <input className="form-check-input required-checkbox" type="checkbox" 
              id={`required${props.index}`} onChange={(event) => props.toggleRequired(event, props.index)}
              checked={component.required}></input>
              <label className="form-check-label required-label" htmlFor={`required${props.index}`}>Required</label>
            </div>  
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-2">
            <button type="button" className="btn btn-danger delete-button" onClick={(event) => props.deleteComponent(event, props.index)}>Delete</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MultipleChoiceForm;
