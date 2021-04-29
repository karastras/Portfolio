import React, { useState, useEffect, useRef } from 'react';

//state machine en + simple

const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;

export default function Fade ({
        visible,
        children,
        duration= 300,
        animateEnter= false,
        from= { opacity: 0 },
    }) {
    const childRef = useRef(children);
    // const [state, setState] = useState(visible ? VISIBLE : HIDDEN);
    const [state, setState] = useState(visible ? (animateEnter ? ENTERING : VISIBLE) : VISIBLE );
    

    if(visible) {
        childRef.current = children
    }

    useEffect(() => {
        if (!visible) {
            setState(LEAVING)
        } else {
            setState((s) => s === HIDDEN ? ENTERING : VISIBLE)
        }
    }, [visible]);

    useEffect(() => {
        if (state === LEAVING) {
            const timer = setTimeout(() => {
                setState(HIDDEN)
            }, duration);
            return () => {           // annuler l'animation en cours =>
                clearTimeout(timer); // nettoyer le timer, supprime les problème de comportement de 
            };                       // l'animation si on clique rapidement plusieurs fois 
        } else if (state === ENTERING) {
            const offSet = document.body.offsetHeight; // seule manière pour faire apparaître l'animation
            setState(VISIBLE);
            return {offSet}
        }
    }, [state, duration])

    if (state === HIDDEN) {
        return null;
    }

    let style = {transitionDuration: `${duration}ms`, transitionProperty: 'opacity transform' }
    if (state !== VISIBLE ) {
        if (from.opacity !== undefined) {
            style.opacity = from.opacity;
        }
        style.transform = 
            `translateX(${from.x ?? 0}px) 
            translateY(${from.y ?? 0}px)
            rotate(${from.r ?? 0}deg)`
        // style.transform = `translate3d(${from.x ?? 0}px), ${from.y ?? 0}px), ${from.z ?? 0}px)`
    }

    return (
        <div style={style}>
            {/* {showChildren && children} */}
            {childRef.current}
        </div>
    )
}