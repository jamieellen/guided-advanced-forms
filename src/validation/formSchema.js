// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
      username: yup
            .string()
            .trim()
            .required('Username Required')
            .min(5, 'Username must be at least 5 characters'),
            // ALSO LOOKS LIKE
            //username: yup.string().trim().required('Username Required').min(5, 'Username must be at least 5 characters')
      email: yup
            .string()
            .required('E-Mail Required'),
      role: yup
            .string()
            .oneOf(['instructor', 'student', 'alumni'], 'Role Required'),
      civil: yup
            .string()
            .oneOf(['single', 'married'], 'civil status required'),
      coding: yup.boolean(),
      reading: yup.boolean(),
      hiking: yup.boolean()
})

export default formSchema;