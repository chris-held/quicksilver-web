import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email address')
    .required()
    .label('Email Address'),
  password: Yup.string()
    .required()
    .label('Password'),
});

export default loginSchema;
