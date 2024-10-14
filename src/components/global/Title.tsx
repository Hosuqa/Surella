type Props = {
    title: string,
    subtitle: string,
    titleColor?: string,
    subtitleColor?: string;
    lineColor?: string;
    className?: string
}

const Title = ({ title, subtitle, className, titleColor="text-surella-600", subtitleColor='text-surella-500', lineColor='bg-surella-500' }: Props) => {
  return (
    <>
        <div className={`g-slate-400 flex w-full h-fit justify- mb-12 ${className}`}>
            <div className="g-slate-500 flex flex-col">
                <div className="g-slate-600 flex items-center h-full w-full  ">
                    <p className={`basis-30 text-nowrap text-center h-full uppercase ${subtitleColor} text-2xl font-interExtraBold font- `}>
                        {subtitle}
                    </p>
                    <div className={`h-[5px] w-full ml-4  ${lineColor} opacity-90 px-6`}></div>
                </div>
                <p className={`${titleColor} uppercase  text-nowrap text-4xl font-interExtraBold font-bold`}>
                    {title}
                </p>
            </div>
        </div>
    </>
  )
}

export default Title