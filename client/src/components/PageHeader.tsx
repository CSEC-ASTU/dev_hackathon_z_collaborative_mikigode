type PageHeaderProps = {
  title: string
  subtitle: string
}
const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className={`flex flex-col gap-2 w-full items-center text-center `}>
      <div className={`flex flex-col gap-2 w-full justify-start items-center`}>
        <h2
          className={`text-sky-blue font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
        >
          {title}
        </h2>
        <h4
          className={`text-[#d9e6ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-center`}
        >
          {subtitle}
        </h4>
      </div>
    </div>
  )
}

export default PageHeader
