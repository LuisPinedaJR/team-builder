import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const FormComp = props => {
  console.log(props.errors, props.touched)
  return (
    <Form>
      <Field name="name" placeholder="enter name" />
      {props.errors.name && props.touched.name ? (
        <span className="error">{props.errors.name}</span>
      ) : null}
      <Field name="email" placeholder="enter email" />
      {props.errors.email && props.touched.email ? (
        <span className="error">{props.errors.email}</span>
      ) : null}
      <Field name="number" placeholder="enter phone number" />
      {props.errors.number && props.touched.number ? (
        <span className="error">{props.errors.number}</span>
      ) : null}
      <label htmlFor="risk">check if you know all the risks?:</label>
      <Field name="risk" type="checkbox" />
      {props.errors.risk && props.touched.risk ? (
        <span className="error">{props.errors.risk}</span>
      ) : null}
      <button type="submit">Submit Your Name</button>
    </Form>
  )
}
export default withFormik({
  mapPropsToValues: props => {
    return {
      name: props.name || '',
      email: props.email || '',
      number: props.number || '',
      risk: props.risk || false,
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Please enter your name'),
    email: Yup.string().email('Please enter a valid email'),
    number: Yup.string()
      .min(10, 'Please a correct phone#')
      .required('Phone Number is required'),
    risk: Yup.boolean().oneOf(
      [true],
      'Please read all risks before continuing'
    ),
  }),
  handleSubmit: (values, formikBag) => {
    formikBag.props.addName({
      ...values,
      id: Date.now(),
    })
    formikBag.resetForm()
  },
})(FormComp)
