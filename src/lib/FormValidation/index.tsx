import * as Yup from 'yup';
import pick from 'lodash/pick';

export const validations = {
  username: Yup.string()
    .min(2, 'Username Too Short!')
    .max(50, 'Username Too Long!')
    .required('Username is reuqired!'),
  password: Yup.string()
    .min(5, 'Username Too Short!')
    .max(50, 'Password Too Long')
    .required('Password is required!'),
  email: Yup.string().email('Invalid email').required('Email is required!'),
};

const extractFields = (fields: string[]) => pick(validations, fields);
const getValidationSchema = (values: string[]): Yup.ObjectSchema =>
  Yup.object().shape(extractFields(values));

export default getValidationSchema;
