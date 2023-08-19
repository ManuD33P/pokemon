import styled from './card.module.css'
import capitalizeFirstLetter from '../../../../services/capitalizeFirstLetter'
import { Link } from 'react-router-dom'
function Card({props}){
    const {image,name,id,types} = props
    return (
        <article className={styled.card}>
            <Link to={`/pokemon/detail/${id}`}>
            <header className={styled.containerInfo}>
                
                <img className={styled.containerImg} src={image} alt={`Pókemon ${name}`} />
                
                <h3>{capitalizeFirstLetter(name)}</h3>
                <h5>
                {
                    types.map((type)=>type.name+"    ")
                }
                </h5>

            </header>
            </Link>
        </article>
    )
}


export default Card