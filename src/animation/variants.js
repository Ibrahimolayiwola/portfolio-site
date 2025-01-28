export const imageVariants = {
    initial: {
        scale: 0,
        opacity: 0
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: .5
        }
    }
}

export const textVariants = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

export const cardVariants = {
    initial: {
        scaleX: 0,
        opacity: 0
    }, 
    animate: {
        scaleX: 1,
        opacity: 1,
        transition: {
            duration: .5
        }
    }
}