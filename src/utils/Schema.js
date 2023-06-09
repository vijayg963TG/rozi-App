import * as yup from 'yup';
import { passwordpattern } from './pattern';

const loginValidate = yup.object().shape({
  email: yup
    .string()
    .email('email should be required format*')
    .required('Email is a required field*'),
  password: yup
    .string()
    .min(6, 'Password must be of atleast 6 characters*')
    .required('This is a required field*')
});

const signUpValidate = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name*')
    .min(3)
    .max(12)
    .required(' This is a Required field*'),
  lastName: yup
    .string()
    .min(3)
    .max(12)
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name*')
    .required('This is a Required field*'),
  companyName: yup.string().required('This is a Required field*'),
  email: yup
    .string()
    .email('email should be required format*')
    .required('Email is a required field*'),
  password: yup
    .string()
    .min(6, 'Password should contain atleast 6 characters*')
    .matches(
      passwordpattern,
      'Password must be strong must contain a special character a digit a uppercase and lowercase letter *'
    )
    .required('Password is a required field*'),
  mobileNumber: yup
    .string()
    .max(10, 'Mobile number should be of 10 digits')
    .min(10, 'Mobile number should be of 10 digits')
    .matches(/^[0-9]+$/, 'Mobile number must be numeric')
    .required('This is a required field*'),

  confirmPassword: yup
    .string()
    .when('password', {
      is: (value) => (value || value > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('password')], 'Please retype your password. They do not match*')
    })
    .required('This is a required fields*')
});

const forgotValidate = yup.object().shape({
  email: yup
    .string()
    .email('Email should be required format*')
    .required('Email is a required field*')
});

const newPasswordValidate = yup.object().shape({
  newpassword: yup
    .string()
    .min(6, 'Password should contain atleast 6 characters*')
    .matches(
      passwordpattern,
      'Password must be strong must contain a special character a digit a uppercase and lowercase letter *'
    )
    .required('This is a required field*'),
  confirmnewpassword: yup
    .string()
    .oneOf([yup.ref('newpassword'), null], 'Please retype your password. They do not match*')
    .required('This is a required field*')
});

const resetPasswordValidate = yup.object().shape({
  newPassword: yup
    .string()
    .min(6, 'Password should contain atleast 6 characters*')
    .matches(
      passwordpattern,
      'Password must be strong must contain a special character a digit a uppercase and lowercase letter *'
    )
    .required('This is a required field*'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newpassword'), null], 'Please retype your password. They do not match*')
    .required('This is a required field*')
});

export {
  loginValidate,
  signUpValidate,
  forgotValidate,
  newPasswordValidate,
  resetPasswordValidate
};
