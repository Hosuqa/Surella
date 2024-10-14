type Props = {
    title: string,
    subtitle: string
}

const Title = ({ title, subtitle }: Props) => {
  return (
    <>
        <div className="g-slate-400 flex w-full h-fit justify- mb-12">
            <div className="g-slate-500 flex flex-col">
                <div className="g-slate-600 flex items-center h-full w-full  ">
                    <p className="basis-30 text-nowrap text-center h-full uppercase text-surella-500 text-2xl font-interExtraBold font- ">
                        {subtitle}
                    </p>
                    <div className="h-[5px] w-full ml-4  bg-surella-500 opacity- px-6"></div>
                </div>
                <p className="uppercase text-surella-600 text-nowrap text-4xl font-interExtraBold font-bold">
                    {title}
                </p>
            </div>
        </div>
    </>
  )
}

export default Title