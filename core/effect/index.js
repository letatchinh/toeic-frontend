import { useEffect } from "react";
import gsap from "core/gsap";
export const useGsap = (gsaps) => {
    useEffect(() => {
        gsaps?.forEach(({ ref, className, from, to, options }) => {
            const el = ref.current;
            gsap.fromTo(el, 
                from,
                {
                    ...to,
                    scrollTrigger: {
                        trigger: className,
                        ...options,

                    }
                })
        });
    }, [gsaps]);
}