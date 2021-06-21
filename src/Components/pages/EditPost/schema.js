import * as yup from 'yup';

export const schema = yup.object().shape({
    newTitle: yup.string().required({message:'este campo es obligatorio'}).max(10),
    newContents: yup.string().required({message:'este campo es obligatorio'}).min(10).max(100)
});