type OptionProps = {
  value: string | number | readonly string[] | undefined
  children: string | React.JSX.Element
}
const Option = ({ value, children }: OptionProps) => {
  return (
    <option value={value} className="">
      {children}
    </option>
  )
}

export default Option
