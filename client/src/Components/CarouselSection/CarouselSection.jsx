import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import one from '../../assets/images/one.png'
import two from '../../assets/images/two.png'

const sliderData = [
  {
    id: 1,
    image: one
  },
  {
    id: 2,
    image: two
  },
  {
    id: 3,
    image: one
  },
  {
    id: 4,
    image: two
  },
  {
    id: 5,
    image: one
  },

]

const CarouselSection = () => {

  console.log(sliderData)
  const options = { delay: 4000 }
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay(options)]);
  return (
    <section className="overflow-hidden relative z-[-1] container my-10 mx-auto h-fit" ref={emblaRef}>
      <div className="flex h-[100%]">
        {sliderData.map((slid) => (
          <div className="relative flex-grow-0 flex-shrink-0 basis-full" key={slid.id}>
            <img src={slid.image} alt="img" className='w-[100%] h-[80%] lg:h-[100%]' />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CarouselSection