/**
 * 
 * @param {Array} components of the form page as an object array
 * This function converts the state of App.js into real json schema and ui schema.
 */
export const componentsToSchema = (components) => {

  const jsonSchema = {
    "type": "object",
    "required": [],
    "properties": {}
  };

  const uiSchema = {};

  let choiceComponentIndex = 0;
  let textBoxIndex = 0;

  components.map((component) => {

    if(component.type === "choice"){

      const componentName = `choiceComponent${choiceComponentIndex}`;
      choiceComponentIndex++;

      const choiceObject = {
        "type": "object",
        "title": component.title,
        "description": component.description,
        "properties": {
          "choices": {
            "type": "string",
            "enum": component.choices
          }
        }
      };

      jsonSchema.properties[componentName] = choiceObject;

      if(component.required){
        jsonSchema.required.push(componentName);
      }

      uiSchema[componentName] = {
        "choices": {
          "ui:widget": "radio"
        }
      }
    }

    if(component.type === "textBox"){

      const componentName = `textBox${textBoxIndex}`;
      textBoxIndex++;

      const textBoxObject = {
        "type": "object",
        "title": component.title,
        "description": component.description,
        "properties": {
          "": { // The textarea has no name because we already have title and description
            "type": "string"
          }
        }
      };

      jsonSchema.properties[componentName] = textBoxObject;

      if(component.required){
        jsonSchema.required.push(componentName);
      }

      uiSchema[componentName] = {
        "": {
          "ui:widget": "textarea",
          "ui:placeholder": component.placeHolder
        }
      }
    }
  })

  return [jsonSchema, uiSchema];
}