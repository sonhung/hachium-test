import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { forwardRef, useId } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import cn from 'classnames';

const Checkbox = forwardRef(
  (
    { label, onChange, className, labelClassName, checkboxLabel, ...props },
    ref
  ) => {
    const labelId = useId();
    const mergedLabel = label || checkboxLabel;

    return (
      <div className={cn('flex items-start', className)}>
        <RadixCheckbox.Root
          ref={ref}
          className='flex-center h-6 w-6 min-w-[24px] rounded-full border border-black bg-white data-[state=checked]:bg-primary'
          id={labelId}
          onCheckedChange={onChange}
          {...props}
        >
          <RadixCheckbox.Indicator className='RadixCheckboxIndicator'>
            <AiOutlineCheck />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <label
          className={cn('ml-2 cursor-pointer', labelClassName)}
          htmlFor={labelId}
        >
          {mergedLabel}
        </label>
      </div>
    );
  }
);

export default Checkbox;
