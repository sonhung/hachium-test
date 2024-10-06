import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { forwardRef, useId } from 'react';
import cn from 'classnames';

export const Radio = ({
  children,
  value,
  className,
  classNameItem = 'border border-dark',
}) => {
  const id = useId();

  return (
    <div className={cn('flex items-center', className)}>
      <RadioGroupPrimitive.Item
        id={id}
        value={value}
        className={cn(
          'peer relative mr-2 h-6 w-6 rounded-full border border-solid border-black bg-white',
          'focus-within:bg-white focus:bg-white focus-visible:bg-white',
          'radix-state-unchecked:bg-white',
          'radix-state-checked:bg-white',
          classNameItem
        )}
      >
        <RadioGroupPrimitive.Indicator className='leading-0 absolute inset-0 flex items-center justify-center'>
          <div className='h-3 w-3 rounded-full bg-primary' />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <label htmlFor={id} className='cursor-pointer'>
        {children}
      </label>
    </div>
  );
};

export const RadioGroup = forwardRef(
  ({ children, value, onChange, rootClassName, ...props }, ref) => (
    <RadioGroupPrimitive.Root
      className={cn('flex flex-col lg:flex-row lg:items-center', rootClassName)}
      onValueChange={onChange}
      value={value}
      {...props}
      ref={ref}
    >
      {children}
    </RadioGroupPrimitive.Root>
  )
);
