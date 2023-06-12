import * as Yup from 'yup';
import { passwordpattern } from './pattern';

const loginValidate = Yup.object().shape({
  email: Yup.string()
    .email('email should be required format*')
    .required('Email is a required field*'),
  password: Yup.string()
    .min(6, 'Password must be of atleast 6 characters*')
    .required('This is a required field*')
});

const signUpValidate = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name*')
    .min(3)
    .max(12)
    .required(' This is a Required field*'),
  lastName: Yup.string()
    .min(3)
    .max(12)
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name*')
    .required('This is a Required field*'),
  companyName: Yup.string().required('This is a Required field*'),
  email: Yup.string()
    .email('email should be required format*')
    .required('Email is a required field*'),
  password: Yup.string()
    .min(6, 'Password should contain atleast 6 characters*')
    .matches(
      passwordpattern,
      'Password must be strong must contain a special character a digit a uppercase and lowercase letter *'
    )
    .required('Password is a required field*'),
  mobileNumber: Yup.string()
    .max(10, 'Mobile number should be of 10 digits')
    .min(10, 'Mobile number should be of 10 digits')
    .matches(/^[0-9]+$/, 'Mobile number must be numeric')
    .required('This is a required field*'),

  confirmPassword: Yup.string()
    .when('password', {
      is: (value) => (value || value > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        'Please retype your password. They do not match*'
      )
    })
    .required('This is a required fields*')
});

const forgotValidate = Yup.object().shape({
  email: Yup.string()
    .email('Email should be required format*')
    .required('Email is a required field*')
});

const newPasswordValidate = Yup.object().shape({
  newpassword: Yup.string()
    .min(6, 'Password should contain atleast 6 characters*')
    .matches(
      passwordpattern,
      'Password must be strong must contain a special character a digit a uppercase and lowercase letter *'
    )
    .required('This is a required field*'),
  confirmnewpassword: Yup.string()
    .oneOf([Yup.ref('newpassword'), null], 'Please retype your password. They do not match*')
    .required('This is a required field*')
});

const resetPasswordValidate = Yup.object().shape({
  newPassword: Yup.string()
    .min(6, 'Password should contain atleast 6 characters*')
    .matches(
      passwordpattern,
      'Password must be strong must contain a special character a digit a uppercase and lowercase letter *'
    )
    .required('Password is required*'),

  confirmPassword: Yup.string().test('password-match', 'Password must match', function (value) {
    return this.resolve(Yup.ref('newPassword')) === value;
  })
});

const changePasswordValidate = Yup.object().shape({
  oldPassword: Yup.string()
    .min(6, 'Password should contain atleast 6 characters*')
    .matches(
      passwordpattern,
      'Password must be strong must contain a special character a digit a uppercase and lowercase letter *'
    )
    .required('This is a required field*'),
  newPassword: Yup.string()
    .min(6, 'Password should contain atleast 6 characters*')
    .matches(
      passwordpattern,
      'Password must be strong must contain a special character a digit a uppercase and lowercase letter *'
    )
    .required('This is a required field*'),
  confirmPassword: Yup.string().test('password-match', 'Password must match', function (value) {
    return this.resolve(Yup.ref('newPassword')) === value;
  })
});

export {
  loginValidate,
  signUpValidate,
  forgotValidate,
  newPasswordValidate,
  resetPasswordValidate,
  changePasswordValidate
};
