type Props = {
    title: string,
    subtitle: string
}

const Title = ({ title, subtitle }: Props) => {
  return (
    <>
        <div className="g-slate-400 flex w-full h-fit justify-center mb-12">
            <div className="g-slate-500 flex flex-col w-1/3 items-center ">
                <div className="g-slate-600 flex items-center justify-center h-full w-full  ">
                    <div className="basis-1/4 h-1 w-full bg-surella-500 opacity-45 px-6"></div>
                    <p className="basis-30 text-nowrap text-center h-full px-4 text-surella-500 text-2xl font-interExtraBold font- ">
                        {subtitle}
                    </p>
                    <div className="basis-1/4 h-1 w-full bg-surella-500 opacity-45 px-6"></div>
                </div>
                <p className="text-surella-600 text-nowrap text-4xl font-interExtraBold font-bold">
                    {title}
                </p>
            </div>
        </div>
    </>
  )
}

export default Title