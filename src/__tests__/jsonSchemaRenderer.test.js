import {componentsToSchema} from '../services/jsonSchemaRenderer';

describe('Renderer function ', () => {

	it('should render schemas correctly for completed a completely filled form', () => {

    const originalState = 
    [
      {
        "type": "choice",
        "title": "Multiple Choice Title",
        "description": "Multiple Choice Description",
        "required": false,
        "choices": [
          "Choice 1",
          "Choice 2",
          "Choice 3"
        ]
      },
      {
        "type": "textBox",
        "title": "Text Box Title",
        "description": "Text Box description",
        "required": true,
        "placeHolder": "My Placeholder"
      },
      {
        "type": "toAdd"
      }
    ];

    const schemas = componentsToSchema(originalState); 
    // This function can be made into smaller functions for better "unit" testing
    // Should test more edge cases in a real product
    const jsonSchema = schemas[0];
    const uiSchema = schemas[1];

    expect(jsonSchema).toEqual(
      {
        "type": "object",
        "required": [
          "textBox0"
        ],
        "properties": {
          "choiceComponent0": {
            "type": "object",
            "title": "Multiple Choice Title",
            "description": "Multiple Choice Description",
            "properties": {
              "choices": {
                "type": "string",
                "enum": [
                  "Choice 1",
                  "Choice 2",
                  "Choice 3"
                ]
              }
            }
          },
          "textBox0": {
            "type": "object",
            "title": "Text Box Title",
            "description": "Text Box description",
            "properties": {
              "": {
                "type": "string"
              }
            }
          }
        }
      }
    );

    expect(uiSchema).toEqual(
      {
        "choiceComponent0": {
          "choices": {
            "ui:widget": "radio"
          }
        },
        "textBox0": {
          "": {
            "ui:widget": "textarea",
            "ui:placeholder": "My Placeholder"
          }
        }
      }
    )
	})
})