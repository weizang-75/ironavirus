import { gsap } from "gsap"

// use a generic animation duration set in redux
const duration = 1;

const fadeIn = (div, callback) => {
     gsap.to(div, {
        duration: 1 * duration,
        opacity: 1,
        onComplete: callback,
    });
}

const fadeOut = (div, callback) => {
     gsap.to(div, {
        duration: 1 * duration,
        opacity: 0,
        onComplete: callback,
    });
}

const fadeOutSpin = (div, callback) => {
     gsap.to(div, {
        duration: 0.8 * duration,
        opacity: 0,
        scale: 0.9,
        rotation: 180,
        onComplete: callback,
    });
}

export const fade = (animation, div, callback) => {
    switch (animation) {
        
        case `fadeIn`:
            return fadeIn(div, callback)

        case `fadeOut`:
            return fadeOut(div, callback)

        case `fadeOutSpin`:
            return fadeOutSpin(div, callback)

        default: {
            return null
        }
    }
}
