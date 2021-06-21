import * as yup from 'yup';

export const schema = yup.object().shape({
    title: yup.string().required({message:'este campo es obligatorio'}).max(10),
    contents: yup.string().required({message:'este campo es obligatorio'}).min(10).max(100)
});