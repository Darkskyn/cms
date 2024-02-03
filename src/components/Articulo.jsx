
export const Articulo = ({img, number, title, text}) => {
    return (
        <article className='flex h-[162px] w-[343px] md:flex-grow'>
            <div className='w-[200px] h-[100px] flex-none'>
                <img src={img}  alt="imagen" />
            </div>
            <div className='pl-6'>
                <p className='text-Grayishblue text-3xl mb-[18px] font-bold'>{Number}</p>
                <h2 className='font-bold mb[18px] '> {title} </h2>
                <p className='text-Verydarkblue text-[16px]'>{text}</p>
            </div>
        </article>
    )
}