type TextFieldProps = {
  label?: string
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  type?: React.HTMLInputTypeAttribute
  inputRef?: React.MutableRefObject<HTMLInputElement | undefined> | undefined
  value?: string | number | readonly string[]
  defaultValue?: string | number | readonly string[]
  name?: string
  className?: string
  helperText?: string | string[]
  isError?: boolean
  placeholder?: string
}
const TextField = ({
  label,
  onBlur,
  onChange,
  value,
  name,
  className,
  helperText,
  isError,
  type,
  inputRef,
  placeholder,
}: TextFieldProps) => {
  return (
    <label className="w-full flex flex-col">
      {label && <h4 className="text-white font-medium mb-1">{label}</h4>}
      <input
        ref={inputRef as React.MutableRefObject<HTMLInputElement>}
        type={type}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        className={`${
          !!isError
            ? 'outline-red-500 outline-1'
            : 'outline-slate-50  outline-0'
        } ${className} outline bg-tertiary py-2 px-2 placeholder:text-secondary text-white rounded-lg   border-none font-medium focus:outline focus:outline-1`}
      />
      {!!isError && <p className="text-red-500 px-2">{helperText}</p>}
    </label>
  )
}
export default TextField
