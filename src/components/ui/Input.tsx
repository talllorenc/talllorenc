interface IInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string | undefined;
  touched?: boolean | undefined;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export function Input({
  id,
  label,
  type = "text",
  placeholder,
  error,
  touched,
  value,
  onChange,
  onBlur,
}: IInputProps) {
  return (
    <div className="relative pb-5 w-full">
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        className={`block border rounded-md px-6 pt-6 pb-1 w-full text-md apperance-none focus:outline-none focus:ring-0 focus:border-[#f31260] peer bg-transparent ${
          error && touched
            ? "border border-[#FF3333]"
            : "border border-[#d0d7deb3]"
        }`}
      />

      <label
        htmlFor={id}
        className="absolute flex items-center gap-1 text-md text-neutral-500 dark:text-neutral-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        <p className="text-[#FF3333] text-md">*</p>
        {label}
      </label>

      {touched && error && (
        <span className="absolute text-[#FF3333] bottom-0 left-0 text-sm">
          {error}
        </span>
      )}
    </div>
  );
}
