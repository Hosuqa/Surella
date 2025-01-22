type Props = {
    className?: string,
    children?: JSX.Element | JSX.Element[],
    vertical?: boolean,
    horizontal?: boolean,
    id?: string,
}

export const SmWrapper = ({ className, children, vertical=false, horizontal=true }: Props) => {
    return (
        <div className={`${ vertical ? "my-12 md:my-16 lg:my-20 xl:my-24 2xl:my-28" : "" } ${ horizontal ? "mx-2 sm:mx-4 md:mx-8 lg:mx-10 xl:mx-16 2xl:mx-20" : "" } ${ className }`}>
            { children }
        </div>
    );
}

export const MdWrapper = ({ className, children, vertical=false, horizontal=true }: Props) => {
    return (
        <div className={`${ vertical ? "my-12 md:my-16 lg:my-20 xl:my-24 2xl:my-28" : "" } ${ horizontal ? " mx-4 sm:mx-6 md:mx-14 lg:mx-16 xl:mx-20 2xl:mx-24" : "" } ${ className }`}>
            { children }
        </div>
    );
}
export const LgWrapper = ({ className, children, vertical=false, horizontal=true }: Props) => {
    return (
        <div className={`${ vertical ? "my-12 md:my-16 lg:my-20 xl:my-24 2xl:my-28" : "" } ${ horizontal ? "mx-6 sm:mx-10 md:mx-16 lg:mx-24 xl:mx-28 2xl:mx-56" : "" } ${ className }`}>
            { children }
        </div>
    );
}

export const XlWrapper = ({ className, children, vertical=false, horizontal=true, id }: Props) => {
    return (
        <div id={id} className={`${ vertical ? "py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-38" : "" } ${ horizontal ? "mx-6 sm:mx-10 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-72  wide:max-w-[1600px]" : "" } ${ className }`}>
            { children }
        </div>
    );
}

export const CounterWrapper = ({ className, children, vertical=false, horizontal=true }: Props) => {
    return (
        <div className={`${ vertical ? "pb-8 pt-12 md:pt-16 md:pb-10  lg:pb-12 lg:pt-20 xl:pb-20 xl:pt-28 2xl:pb-10 2xl:pt-[72p] " : "" } ${ horizontal ? "px-4 sm:px-10 md:px-16 lg:px-24 xl:px-28 2xl:px-56 " : "" } ${ className }`}>
            { children }
        </div>
    );
}
