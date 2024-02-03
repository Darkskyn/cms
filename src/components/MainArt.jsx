import imageMobile from '../assets/images/9487b46ace1e217e8e4204dfd4ea612ab0ab32e0b4802f428929532c097ab6b2.avif'
import imageDesktop from '../assets/images/9487b46ace1e217e8e4204dfd4ea612ab0ab32e0b4802f428929532c097ab6b2.avif'
import { Link } from 'react-router-dom'

export const Main = () => {
    return (
       <section className="mb-12">
           <picture className="br-12px">
               <source media="(max-width: 640px)" srcSet={imageMobile} />
               <source media="(min-width: 641px)" srcSet={imageDesktop} />
               <img src={imageMobile} alt="Articulo principal" style={{ borderRadius: '14px' }} />
           </picture>
           <div className="sm:flex">
                <div className="flex-1 py-6">
                    <h2 className='text-[40px] font-bold sm:text-[58px] leading-none'>Encantadora aventura de fantasía del universo de League of Legends</h2>
                </div> 
                <div className='flex-1 pt-9'>
                    <p className='text-[13px] mb-10 sm:text-[25px]'>
                    Esta curiosa pareja de personajes, formada por un niño originario de una tribu nómada de los notai y su inseparable amigo yeti, siempre han estado juntos hasta convertirse en totalmente inseparables.   
                    </p>
                    <Link to="/Sobre_Nosotro">
                    <button className='bg-Prueba w-[185px] h-[48px] uppercase text-Offwhite hover:bg-Verydarkblue'>
                        Leer Mas
                    </button>
                    </Link>
                </div>
            </div>
       </section>
    )
}

