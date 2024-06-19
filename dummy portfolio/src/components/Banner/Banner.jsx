import {Carousel} from 'nuka-carousel';
import './Banner.css';


const banners = [
    "https://via.placeholder.com/800X400/orange/white",
    "https://via.placeholder.com/800X400/black/white",
    "https://via.placeholder.com/800X400/purple/white",
];

function Banner() {
    return (
        <div className="banner-cont">
            <div className="banner">
                <Carousel
                    autoplay
                    autoplayInterval={1000}
                    className="h-banner"
                    showArrows
                    renderCenterLeftControls={({ previousSlide }) => (
                        <Icon
                        className="h-banner__control"
                        size={5}
                        path={mdiChevronLeft}
                        onClick={previousSlide}
                        />
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <Icon
                        className="h-banner__control"
                        size={5}
                        path={mdiChevronRight}
                        onClick={nextSlide}
                        />
                    )}
                >
                {
                banners.map((bannerSrc) => {
                    return <img key={bannerSrc} src={bannerSrc} alt={"b"} />
                })
                }
            </Carousel>
            </div>
        </div>
    )
  }

export default Banner;