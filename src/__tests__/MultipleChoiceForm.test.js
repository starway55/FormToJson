import React from 'react';
import { shallow } from 'enzyme';
import MultipleChoiceForm from '../components/MultipleChoiceForm';

const component = {
  "title": "title",
  "description": "des",
  "choices": [
    "Choice 1", "Choice 2", "Choice 3"
  ],
  "required": true
}

const mockOnDelete = jest.fn();

describe('Form ', () => {

  it('should render form title string', () => {

    const shallowForm = shallow(
      <MultipleChoiceForm key={0} index={0} component={component} 
      deleteComponent={mockOnDelete}/>
    )
    expect(shallowForm.childAt(0).html()).toMatch('Multiple Choice')
  })

  it('renders title input with correct string', () => {

    const shallowForm = shallow(
      <MultipleChoiceForm key={0} index={0} component={component} 
      deleteComponent={mockOnDelete}/>
    )
    expect(shallowForm.find('input.title-input').props().value).toMatch('title')
  })

  it('renders description input with correct string', () => {

    const shallowForm = shallow(
      <MultipleChoiceForm key={0} index={0} component={component} 
      deleteComponent={mockOnDelete}/>
    )
    expect(shallowForm.find('input.description-input').props().value).toMatch('des')
  })

  it('renders choices correctly', () => {

    const shallowForm = shallow(
      <MultipleChoiceForm key={0} index={0} component={component} 
      deleteComponent={mockOnDelete}/>
    )
    expect(shallowForm.find('input.choice-input').at(0).props().value).toMatch('Choice 1')
    expect(shallowForm.find('input.choice-input').at(1).props().value).toMatch('Choice 2')
    expect(shallowForm.find('input.choice-input').at(2).props().value).toMatch('Choice 3')
  })

  it('renders required checkbox correctly', () => {

    const shallowForm = shallow(
      <MultipleChoiceForm key={0} index={0} component={component} 
      deleteComponent={mockOnDelete}/>)

    const checkBoxWrapper = shallowForm.find('input.form-check-input')
    expect(checkBoxWrapper.props().checked).toEqual(true);
    shallowForm.setProps({
      ...shallowForm,
      component: {
        "title": "title",
        "description": "des",
        "choices": [
          "Choice 1", "Choice 2", "Choice 3"
        ],
        "required": false
      }
    })

    const checkBoxWrapperFalse = shallowForm.find('input.form-check-input');
    expect(checkBoxWrapperFalse.props().checked).toEqual(false);
  })

  it('calls deleteComponent when clicking delete button', () => {

    const shallowForm = shallow(
      <MultipleChoiceForm key={0} index={0} component={component} 
      deleteComponent={mockOnDelete}/>)

    const deleteButtonWrapper = shallowForm.find('button.btn-danger');
    deleteButtonWrapper.simulate('click');
    expect(mockOnDelete.mock.calls.length).toBe(1);
  })

  // TODO: Test more rendering and event listeners with the examples above
})