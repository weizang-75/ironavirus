import { gsap } from "gsap"

let duration = 1;

const fadeIn = (div, callback) => {
     gsap.to(div, {
        duration: 1 * duration,
        opacity: 1,
        onComplete: callback,
    });
}

export const fade = (animation, div, callback) => {
    switch (animation) {
        
        case `fadeIn`:
            return fadeIn(div, callback)

        default: {
            return null
        }
    }
}
