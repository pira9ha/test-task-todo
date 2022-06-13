import React, {FC} from "react";
import {ButtonsContainer, FormContainer, Input, ResetButton, SubmitButton} from "../styled/form/FormStyledComponents";
import {useFormik} from "formik";
import * as yup from 'yup';

interface FormValue {
  name: string;
};

type FormProps = {
  reset: () => void;
  submit: (value: string) => void;
  createList?: boolean;
  editTitle?: boolean;
  value?: string;
};

export const Form: FC<FormProps> = (props) => {
  const {handleSubmit, handleChange, values, errors} = useFormik<FormValue>({
    initialValues: {
      name: props.value || '',
    },
    validationSchema: yup.object({
      name: yup.string().required('require'),
    }),
    onSubmit: values => {
      props.submit(values.name);
      props.reset();
    },
  });

  return (
    <FormContainer
      onSubmit={handleSubmit}
      createList={props.createList}
      editTitle={props.editTitle}
    >
      <Input
        id="name"
        name="name"
        onChange={handleChange}
        value={values.name}
        placeholder={`Название ${props.createList || props.editTitle ? 'списка' : 'задачи'}`}
      />
      <ButtonsContainer>
        <SubmitButton disabled={!!errors.name || !values.name}>Сохранить</SubmitButton>
        <ResetButton onClick={props.reset}>Отмена</ResetButton>
      </ButtonsContainer>
    </FormContainer>
  );
};
