import React  from 'react';
import '../App.css';

 export const Good = ({name, price}) => {
    
        return(
           
            <div className="good">
                <div className="goodcard">
                   <div className="name_goods">{name}</div>
                   <div className="price_goods">{price}</div>
                </div>              
            </div>
            
        )
    }

export default Good;