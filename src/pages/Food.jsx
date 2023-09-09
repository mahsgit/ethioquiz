import "./cart.css";
import { PRODUCTS } from "../utils/Data";

const Food = () => {
    const foodPictures = PRODUCTS.filter(product => product?.type === 'food')

    return (
      <div className='cart'>
         {foodPictures.map((data)=>{
              return(
               
                <div className="food-item" key={data.id}>
                <img src={data.productImage} width={430} height={300} />
                <p className="recipe">{data.Recipe}</p>
              </div>
              )
          })}
      </div>
  )
}

export default Food
