import { InputTypes } from '@/types';
import { get, Path } from 'react-hook-form';

function Input<T extends Record<string, any>>({
  label,
  name,
  placeholder = '',
  register,
  errors,
  validationSchema,
  value,
  onChange,
  long = false,
}: InputTypes<T>) {
  const commonClasses =
    'placeholder:text-zinc-600 mb-2 input input-bordered text-zinc-800 w-full focus:bg-gray-100 bg-gray-50 transition-all duration-300 rounded-xl outline-none';

  return (
    <div className="w-full relative">
      <label htmlFor={name as string} className="block mb-1 text-zinc-700">
        {label}
      </label>

      {long ? (
        <textarea
          id={name as string}
          placeholder={placeholder}
          className={`${commonClasses} h-[145px] resize-none p-3`}
          defaultValue={value}
          {...register(name as Path<T>, validationSchema)}
          onChange={onChange}
        />
      ) : (
        <input
          autoComplete="off"
          type="text"
          id={name as string}
          value={value}
          defaultValue={value}
          placeholder={placeholder}
          className={`${commonClasses} h-[45px] text-right px-3`}
          {...register(name as Path<T>, validationSchema)}
          onChange={onChange}
        />
      )}

      {get(errors, `${name as string}.message`, null) && (
        <span className="text-red-500 text-sm font-semibold">
          {get(errors, `${name as string}.message`, null)}
        </span>
      )}
    </div>
  );
}

export default Input;
