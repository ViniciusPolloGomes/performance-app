import {memo, useState} from 'react';
import {AddProductToWishlistProps} from './AddProductToWishlist';
import dynamic from 'next/dynamic';

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(()=>{        //Lazy Loading
    return import ('./AddProductToWishlist').then(mod => mod.AddProductToWishlist)
},{
    loading: ()=><span>Carregando...</span>
})

interface ProductItemProps{
    product:{
        id:number;
        priceFormatted:string ;
        title:string;
    }
    onAddToWishList: (id: number) =>  void;
}



function ProductItemComponent({product,onAddToWishList}: ProductItemProps){
    const [isAddingToWishlist, setIsAddingToWishlist] =useState(false);
    return(
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={()=> setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>
            {isAddingToWishlist && (
                <AddProductToWishlist
                    onAddToWishlist={()=> onAddToWishList(product.id)}
                    onRequestClose={()=>{setIsAddingToWishlist(false)}}    
                />

            )}
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