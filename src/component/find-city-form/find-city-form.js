import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './find-city-form.css';

class FindCityForm extends Component {

    render() {

        return (
            <form
                onSubmit={ this.props.handleSubmit }
                className='form'>
                <Field  className='form-field'
                        name={'findImage'} 
                        component={'input'} 
                        type='text'
                        placeholder='find image here...' >
                </Field>
                <button type='submit' className='btn form-button'>find</button>
            </form>
        );
    }
}


let Form = reduxForm({
    form: 'findImage',
})(FindCityForm);
  
export default Form;