import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});

    useGSAP(() => {
        if(!isTablet) {
         
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            // Imposta l'overlay come invisibile all'inizio
            gsap.set('.top-overlay', { opacity: 0, visibility: 'hidden' });

            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)',
                    duration: 1
                })
                .to('.top-overlay', {
                    opacity: 1,
                    visibility: 'visible',
                    ease: 'power1.in',
                    duration: 0.1
                }, '0.9') 
                .to('.content', { 
                    opacity: 1, 
                    y: 0, 
                    ease: 'power1.in',
                    duration: 0.1 
                });
        } 
    }, [isTablet])

    return (
        <section id="showcase">
            <div className="top-overlay"></div>
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg" className="object-cover" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="w-full lg:max-w-md flex flex-col items-center lg:items-start">
                        <h2 className="w-full">Land Revival</h2>

                        <div className="space-y-5 mt-7 w-full px-4 lg:px-0 lg:pe-10 text-center lg:text-left">
                            <p>
                                Introducing {" "}
                                <span className="text-white">
                                    our commitment to environmental sustain
                                </span>
                                . We restore
                            </p>
                           
                            <p className="text-primary">Learn more about our green project.</p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}
export default Showcase
