import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselTesti = () =>{
    const caroluseclass = "ring-1 ring-gray-900/5 shadow-lg mx-2 my-4 p-5 rounded-sm"
    return(
    <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={1500}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
            desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
            },
            mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
            },
            tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
            }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
    >
        <div className={caroluseclass}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus odio perferendis perspiciatis labore cupiditate, nisi porro praesentium inventore asperiores? Ipsa asperiores consequuntur maxime inventore eveniet corrupti dolor, voluptas iusto enim?</p>
        </div>
        <div className={caroluseclass}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus odio perferendis perspiciatis labore cupiditate, nisi porro praesentium inventore asperiores? Ipsa asperiores consequuntur maxime inventore eveniet corrupti dolor, voluptas iusto enim?</p>
        </div>
        <div className={caroluseclass}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus odio perferendis perspiciatis labore cupiditate, nisi porro praesentium inventore asperiores? Ipsa asperiores consequuntur maxime inventore eveniet corrupti dolor, voluptas iusto enim?</p>
        </div>
        <div className={caroluseclass}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus odio perferendis perspiciatis labore cupiditate, nisi porro praesentium inventore asperiores? Ipsa asperiores consequuntur maxime inventore eveniet corrupti dolor, voluptas iusto enim?</p>
        </div>
        <div className={caroluseclass}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus odio perferendis perspiciatis labore cupiditate, nisi porro praesentium inventore asperiores? Ipsa asperiores consequuntur maxime inventore eveniet corrupti dolor, voluptas iusto enim?</p>
        </div>

    </Carousel> 
    )  
}
export default CarouselTesti