import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel = () => {
  return (
    <>
    
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="m-5">
        <div>


          <img className="h-[90vh] object-cover rounded-md" src="https://static.vecteezy.com/system/resources/thumbnails/027/686/714/small_2x/a-person-in-running-shoes-on-the-background-of-an-electronic-signal-free-photo.jpg" />
          {/* <p className="legend">Mobiles</p> */}

          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-0 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                    Fashioned
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-purple-600">
                      40%
                    </span>
                    <span className="text-base font-medium text-gray-500"> offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="h-[90vh] object-cover rounded-md" src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nike-running-shoes-on-black-background-with-colorful-splashes-image_2671040.jpg" />
          {/* <p className="legend">Laptops</p> */}
          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                    Trendz
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-purple-600">
                      30%
                    </span>
                    <span className="text-base font-medium text-gray-500"> offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="h-[90vh] object-cover  rounded-md" src="https://png.pngtree.com/thumb_back/fh260/background/20230630/pngtree-vibrant-unisex-sports-shoes-in-white-canvas-with-towering-soles-a-image_3698893.jpg" />
          {/* <p className="legend">TV</p> */}
          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                    Sport-shoes
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-purple-600">
                      50%
                    </span>
                    <span className="text-base font-medium text-gray-500"> offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="h-[90vh] object-cover rounded-md" src="https://i.pinimg.com/originals/37/cd/93/37cd9342417c0c486ae065bb5f6ebf82.jpg" />
          {/* <p className="legend">Laptops</p> */}
          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                  Stylish-shoe
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-purple-600">
                      60%
                    </span>
                    <span className="text-base font-medium text-gray-500">offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Carousel>
     
    </>
  )
}

export default HomeCarousel

