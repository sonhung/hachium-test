import { Dialog, DialogContent } from '@/components/base';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { useAddTask } from '@/hooks';

import { Button, Checkbox } from '@/components/base';
import { TextInput } from '@/components/form';
import {
  taskFormSchema,
  taskInitialValues,
  FORM_TASK,
} from '@/validations/taskSchema';
import { useEffect, useState } from 'react';

function TaskForm({ open, onClose }) {
  const { doAddTask, isLoading, isSuccess } = useAddTask();
  const [isComplete, setIsComplete] = useState(false);

  const methods = useForm({
    resolver: yupResolver(taskFormSchema()),
    defaultValues: taskInitialValues,
  });

  const onCreate = (values) => {
    doAddTask({ ...values, isComplete });
  };

  const onCloseModal = () => {
    methods.reset();
    setIsComplete(false);
    onClose();
  };

  useEffect(() => {
    if (isSuccess) {
      onCloseModal();
    }
  }, [isSuccess]);

  return (
    <div className='mt-[62px] flex-1 bg-white px-0 py-12 lg:mt-0 lg:px-[120px] lg:pb-[94px] lg:pt-[60px]'>
      {open && (
        <Dialog open={open} onOpenChange={onCloseModal}>
          <DialogContent>
            <div>
              <div className='font-bold mb-4'>Create New Task</div>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onCreate)}>
                  <TextInput
                    required
                    name={FORM_TASK.TITLE}
                    placeholder='Title'
                    className='mb-4'
                  />
                  <TextInput
                    required
                    name={FORM_TASK.CONTENT}
                    placeholder='Content'
                    className='mb-4'
                  />
                  <Checkbox
                    checked={isComplete}
                    className='text-sm'
                    label='Complete'
                    onChange={() => setIsComplete(!isComplete)}
                  />
                  <div className='flex justify-end gap-4'>
                    <Button onClick={onCloseModal} variant='outline'>
                      Cancel
                    </Button>
                    <Button type='submit' isLoading={isLoading}>
                      Submit
                    </Button>
                  </div>
                </form>
              </FormProvider>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default TaskForm;
