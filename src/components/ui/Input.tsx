interface IInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  error?: string | undefined;
  touched?: boolean | undefined;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = ({
  id,
  label,
  type = "text",
  placeholder,
  icon,
  error,
  touched,
  value,
  onChange,
  onBlur,
}: IInputProps) => {
  return (
    <div className="flex gap-1 flex-col w-full">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3 flex items-center text-neutral-200">
            {icon}
          </div>
        )}
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          onBlur={onBlur}
          value={value}
          onChange={onChange}
          className={`w-full py-1 pl-10 pr-4 rounded-lg appearance-none focus:outline-none focus:ring-4 focus:ring-neutral-200 bg-transparent ${
            error && touched
              ? "border border-[#FF3333]"
              : "border border-neutral-200"
          }`}
        />
      </div>
      {touched && error && (
        <span className="text-[#FF3333] text-sm">{error}</span>
      )}
    </div>
  );
};

export default Input;
