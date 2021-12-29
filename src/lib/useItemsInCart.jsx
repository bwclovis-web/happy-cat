import { useState} from 'react';

const useItemsInCart =() => {
    const [itemsInCart, setItemsInCart] = useState()

    return [itemsInCart, setItemsInCart]

}

export default useItemsInCart;