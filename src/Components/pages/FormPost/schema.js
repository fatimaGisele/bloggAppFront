import * as yup from 'yup';

export const schema = yup.object().shape({
    title: yup.string().required({message:'este campo es obligatorio'}),
    contents: yup.string().required({message:'este campo es obligatorio'})
});