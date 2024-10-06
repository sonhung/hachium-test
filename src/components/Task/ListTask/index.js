import { useEffect, useState } from 'react';
import cn from 'classnames';

import { Spin, Button, RadioGroup, Radio } from '@/components/base';
import { useTaskLits } from '@/hooks';
import TaskForm from '@/components/Task/TaskForm';
import { TASK_STATUS_FILTER, STATUS } from '@/constants';

const ListTask = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(STATUS.ALL);
  const [showData, setShowData] = useState([]);
  const { data = [], isLoading } = useTaskLits();

  const onFilter = (a) => {
    setStatus(a);
  };

  useEffect(() => {
    if (status === STATUS.ALL) {
      setShowData(data);
    } else {
      const statusComplete = status === STATUS.COMPLETED;
      const newData = data.filter((item) => item.isComplete === statusComplete);
      setShowData(newData);
    }
  }, [data, status]);

  if (isLoading)
    return (
      <div className='h-80 flex justify-center items-center'>
        <Spin />
      </div>
    );

  return (
    <div>
      <div className='font-bold font-xl mb-4 flex items-center justify-between'>
        <div className='flex'>
          <div>Task list:</div>
          <div className='pl-14'>
            <RadioGroup onChange={onFilter} value={status}>
              <div className='flex'>
                {TASK_STATUS_FILTER.map((item) => (
                  <Radio className='ml-7' key={item} value={item}>
                    <span className='ml-1'>{item}</span>
                  </Radio>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>
        <Button onClick={() => setOpen(true)}>Add Task</Button>
      </div>
      {showData.map((task) => (
        <div className='mb-2' key={task.id}>
          <div className='font-semibold'>{task.title}</div>
          <div>{task.content}</div>
          <div>
            Status:
            <span
              className={cn(
                task.isComplete ? 'text-green' : 'text-medium-gray',
                'pl-2'
              )}
            >
              {task.isComplete ? 'Completed' : 'Incomplete'}
            </span>
          </div>
        </div>
      ))}
      <TaskForm open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default ListTask;
