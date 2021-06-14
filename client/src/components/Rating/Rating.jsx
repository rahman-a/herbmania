import React from 'react'

const Rating = ({rating, color}) => {
    return (
        <>
         <span style={{color}}>
         {rating === 0 ? <i class="far fa-star"></i> 
         : (rating > 0 && rating < 1) ? <i class="fas fa-star-half-alt"></i>
         : rating > 0 && <i class="fas fa-star"></i>} 
        </span>
        <span style={{color}}>
         {rating <= 1 ?<i class="far fa-star"></i> 
         : (rating > 1 && rating < 2) ? <i class="fas fa-star-half-alt"></i>
         : rating > 1 && <i class="fas fa-star"></i>} 
        </span>
        <span style={{color}}>
         {rating <= 2 ?<i class="far fa-star"></i> 
         : (rating > 2 && rating < 3) ? <i class="fas fa-star-half-alt"></i>
         : rating > 2 && <i class="fas fa-star"></i>} 
        </span>
        <span style={{color}}>
         {rating <= 3 ?<i class="far fa-star"></i> 
         : (rating > 3 && rating < 4) ? <i class="fas fa-star-half-alt"></i>
         : rating > 3 && <i class="fas fa-star"></i>} 
        </span>
        <span style={{color}}>
         {rating <= 4 ?<i class="far fa-star"></i> 
         : (rating > 4 && rating < 5) ? <i class="fas fa-star-half-alt"></i>
         : rating > 4 && <i class="fas fa-star"></i>} 
        </span>
        </>
    )
}

Rating.defaultProps = {
    color:'#8cbe2f'
}
export default Rating
