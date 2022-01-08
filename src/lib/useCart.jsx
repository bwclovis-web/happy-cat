import { useState, useEffect,useCallback } from 'react';

const UseCart = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const toggleCart = useCallback(() => {
        setCartOpen(!cartOpen)
    },[cartOpen]);

    useEffect(() => {
        const root = document.documentElement;
        const overlay = document.querySelector('.overlay');
        if(cartOpen) {
            root.classList.add('open')
            overlay.classList.add('open')
        } else {
            root.classList.remove('open')
            overlay.classList.remove('open')
        }
    }, [cartOpen]);

    return [cartOpen, toggleCart]
}

export default UseCart;