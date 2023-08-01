import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import one from '../../assets/images/one.png'
import two from '../../assets/images/two.png'

const CarouselSection = () => {
    const options = { delay: 4000}
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay(options)]);
    return (
        <section className="overflow-hidden relative z-[-1] w-[100%] lg:w-[60%] my-10 mx-auto h-fit" ref={emblaRef}>
          <div className="flex h-[100%]">
            <div className="relative flex-grow-0 flex-shrink-0 basis-full">
                <img src={one} alt="img" className='w-[100%] h-[80%] lg:h-[100%]'/>
            </div>
            <div className="relative flex-grow-0 flex-shrink-0 basis-full">
               <img src={two} alt="img" className='w-[100%] h-[80%] lg:h-[100%]'/>
            </div>
            <div className="relative flex-grow-0 flex-shrink-0 basis-full">
            <img src={one} alt="img" className='w-[100%] h-[80%] lg:h-[100%]'/>
            </div>
            <div className="relative flex-grow-0 flex-shrink-0 basis-full">
            <img src={two} alt="img" className='w-[100%] h-[80%] lg:h-[100%]'/>
            </div>
            <div className="relative flex-grow-0 flex-shrink-0 basis-full">
            <img src={one} alt="img" className='w-[100%] h-[80%] lg:h-[100%]'/>
            </div>
          </div>
        </section>
      )
}

export default CarouselSection