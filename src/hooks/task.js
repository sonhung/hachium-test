import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import cloneDeep from 'lodash/cloneDeep';
import { TASK_LIST_KEY, API } from '@/constants';
import Axios from '@/configs/axios';

export const useTaskLits = () => {
  return useQuery([TASK_LIST_KEY], async () => {
    const { data } = await Axios.get(API.GET_TASK_LIST);
    return data?.data;
  });
};

export const useAddTask = ({ onSuccess, onError } = {}) => {
  const queryClient = useQueryClient();

  const {
    mutate: doAddTask,
    isLoading,
    isSuccess,
  } = useMutation(
    async (params) => {
      const response = await Axios.post(API.CREATE_TASK, params);
      return response;
    },
    {
      onSuccess: (response) => {
        const { data } = response;
        queryClient.setQueryData([TASK_LIST_KEY], (prev) => {
          const newList = cloneDeep(prev);
          return [...newList, data];
        });
        onSuccess?.();
      },
      onError: (error) => {
        console.log(error);
        onError?.();
      },
    }
  );

  return { doAddTask, isLoading, isSuccess };
};
