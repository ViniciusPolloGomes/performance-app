import {memo} from 'react';

interface ProductItemProps{
    product:{
        id:number;
        price: number;
        title:string;
    }
}



function ProductItemComponent({product}: ProductItemProps){
    return(
        <div>
            {product.title} - <strong>{product.price}</strong>
        </div>
    );
}

export const ProductItem = memo(ProductItemComponent,(prevProps,nextProps)=>{
    return Object.is(prevProps.product,nextProps.product)
})

/** Memo 
 * 1.verification Shallow compare === verificação de Comparação rasa
 * 2.verifica a igualdadedas informaçõies que eu tenho dentro das propriedades
 *                  
 * {} === {}  false   comparação entre objetos , informações diferentes.
 * igualdade referencial    basicamente  compara se os objetos ocupam mesma posição na memoria e não os valores
 * 
 * por isso usa segundo parametro do memo
 * 
 * Situações que se usa Memo : 
 * 
 * 1.Pure function components
 * 2.componentes que renderizam demais
 * 3.Renderiza novamente com a mesma props
 */