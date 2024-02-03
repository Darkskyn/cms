import img1 from '../assets/images/plataforma.jpg'
import img2 from '../assets/images/arcane_jinx_hood_hd_arcane.webp'
import img3 from '../assets/images/foro.png'
import { Articulo } from "./Articulo"

export const ArticuloContainer = () => {
    return (
        <section className="mt-6 md:flex md:flex-wrap">
            <Articulo 
                img= {img1}
                number='01'
                title='Plataforma'
                text='Nintendo Switch, Microsoft Windows'
            />
            <Articulo 
                img= {img2}
                number='02'
                title='Arcane 2'
                text='La temporada 2 de ‘Arcane’ en Netflix ya tiene fecha de salida aproximada'
            />
            <Articulo 
                img= {img3}
                number='03'
                title='Foro Nunu'
                text='Hablemos entre nosotros'
            />
        </section>
    )
}
