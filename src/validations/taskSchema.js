import * as Yup from 'yup';

const FORM_TASK = {
  TITLE: 'title',
  CONTENT: 'content',
};

const taskInitialValues = {
  [FORM_TASK.TITLE]: '',
  [FORM_TASK.CONTENT]: '',
};

const taskFormSchema = () =>
  Yup.object().shape({
    [FORM_TASK.TITLE]: Yup.string().required('Please input task title'),
  });

export { taskFormSchema, taskInitialValues, FORM_TASK };
