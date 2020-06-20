import React, { useState, Fragment } from 'react';
import {componentsToSchema} from '../services/jsonSchemaRenderer';
import './JsonResult.css';

const JsonResult = (props) => {

  const components = props.components;

  const schemas = componentsToSchema(components);

  return (
    <div className='form-border'>

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-6 json-result">
          <div className="schema-title">Json Schema</div>
          <pre>{JSON.stringify(schemas[0], null, 2) }</pre>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-6 json-result">
          <div className="schema-title">UI Schema</div>
          <pre>{JSON.stringify(schemas[1], null, 2) }</pre>
        </div>
      </div>
    </div>
  );
}

export default JsonResult;
