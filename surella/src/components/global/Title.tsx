type Props = {
    title: string,
    subtitle: string
}

const Title = ({ title, subtitle }: Props) => {
  return (
    <>
        <div className="">
            {subtitle}
        </div>
        <div>
            {title}
        </div>
    </>
  )
}

export default Title