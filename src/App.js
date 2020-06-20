import React, { useState } from 'react';
import './App.css';
import FormComponent from './components/NewFormComponent';
import MultipleChoiceForm from './components/MultipleChoiceForm';
import TextBoxForm from './components/TextBoxForm';
import PlusButton from './components/PlusButton';
import JsonResult from './components/JsonResult';

function App() {

  const defaultFormComponents = [{"type": "toAdd"}];
  const [formComponents, setFormComponents] = useState(defaultFormComponents);

  const addComponent = (event, index) => {

    event.preventDefault();
    let newFormComponents = [...formComponents];
    newFormComponents[index] = {"type": "new"};
    newFormComponents.push({"type": "toAdd"});
    setFormComponents(newFormComponents);
  }

  const changeComponentType = (type, index) => {
    
    let newFormComponents = [...formComponents];
    newFormComponents[index].type = type;
    newFormComponents[index].title = '';
    newFormComponents[index].description = '';
    newFormComponents[index].required = false;
    
    if( type === 'choice' ){

      newFormComponents[index].choices = ['', '', ''];
    }

    if( type === 'textBox' ){

      newFormComponents[index].placeHolder = '';
    }

    setFormComponents(newFormComponents);
  }

  const editTitle = (title, index) => {

    const newComponents = [...formComponents];
    newComponents[index].title = title;
    setFormComponents(newComponents);
  }
  
  const editDescription = (description, index) => {

    const newComponents = [...formComponents];
    newComponents[index].description = description;
    setFormComponents(newComponents);
  }

  const editPlaceHolder = (placeHolder, index) => {

    const newComponents = [...formComponents];
    newComponents[index].placeHolder = placeHolder;
    setFormComponents(newComponents);
  }

  const editChoice = (choice, index, choiceIndex) => {

    const newComponents = [...formComponents];
    
    newComponents[index].choices[choiceIndex] = choice;
    setFormComponents(newComponents);
  }

  const toggleRequired = (event, index) => {

    const newComponents = [...formComponents];
    newComponents[index].required = event.target.checked;
    setFormComponents(newComponents);
  }

  const deleteChoice = (event, index, choiceIndex) => {

    event.preventDefault();
    let newComponents = [...formComponents];
    newComponents[index].choices.splice(choiceIndex, 1);
    setFormComponents(newComponents);
  }

  const addChoice = (event, index) => {

    event.preventDefault();
    let newComponents = [...formComponents];
    newComponents[index].choices.push('');
    setFormComponents(newComponents);
  }

  const deleteComponent = (event, index) => {

    event.preventDefault();
    let newComponents = [...formComponents];
    newComponents.splice(index, 1);
    setFormComponents(newComponents);
  }

  const renderFormComponent = () => {

    const components = 
    <div>
      {
        formComponents.map((component, index) => {

          if( component.type === 'new' ){
            return <FormComponent key={index} index={index} component={component} changeComponentType={changeComponentType}/>
          }
          if( component.type === 'choice' ){
            return <MultipleChoiceForm key={index} index={index} component={component} 
            editTitle={editTitle} editDescription={editDescription} editChoice={editChoice} deleteChoice = {deleteChoice}
            addChoice={addChoice} toggleRequired={toggleRequired} deleteComponent={deleteComponent}/>
          }
          if( component.type === 'textBox' ){

            return <TextBoxForm key={index} index={index} component={component}
            editTitle={editTitle} editDescription={editDescription} editPlaceHolder={editPlaceHolder}
            toggleRequired={toggleRequired} deleteComponent={deleteComponent}/>
          }
          if( component.type === 'toAdd' ){
            return <PlusButton key={index} index={index} addComponent={addComponent}/>
          }
          else{
            return <span key={index}>nothing</span>
          }
        })
      }
    </div>
    
    return components
  }

  return (
    <div className="container main-content">
      <div className="main-title">
        Start building your module <br>
        </br>by adding Elements below
      </div>
      
      <div>
        {renderFormComponent()}
      </div>

      <div>
        <JsonResult components={formComponents}/>
      </div>
    </div>
  );
}

export default App;
