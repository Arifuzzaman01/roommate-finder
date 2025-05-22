import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import attachedBath1 from "../assets/attatchBath.jpg";
import { Link } from "react-router";

const Slider = () => {
  return (
    <div className=" md:w-3/4 mx-auto ">
      <Swiper
        // install Swiper modules
        spaceBetween={50}
        modules={[Navigation, Pagination,Autoplay]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,  
        }}
        navigation
        
      >
        <SwiperSlide>
          {/* 1 */}
          <div className="flex justify-center items-center h-full min-h-[400px] ">
            <div className="card w-96 bg-base-100 shadow-sm">
              <div className="card-body border-gray-400 rounded-sm border">
                <span className="badge badge-xs badge-warning">
                  Most Popular
                </span>

                <h2 className="text-3xl font-bold">Shared Room Available</h2>
                <span className="text-xl">BDT 1900/month</span>
                <p className="text-[16px] font-bold">2-bedroom flat</p>

                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>Wi-Fi</li>
                  <li>Washing Machine</li>
                  <li>Kitchen Access</li>
                  <li>24/7 Water</li>
                  <li>Air Cooler</li>
                  <li>Mini Parking</li>
                </ul>

                <div className="flex gap-2 flex-wrap text-sm mt-3">
                  <div className="badge badge-outline">Wi-Fi</div>
                  <div className="badge badge-outline">AC</div>
                  <div className="badge badge-outline">Kitchen</div>
                </div>

                <div className="mt-6 mb-2">
                  <Link to='/add-to-find' className="btn btn-primary bg-[#5EBB2B] btn-block mb-2 ">
                    Add To Find
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* 2 */}
          <div className="flex justify-center items-center h-full min-h-[400px]">
            <div className="card w-96 bg-base-100 shadow-sm">
              <div className="card-body border-gray-400 rounded-sm border">
                <span className="badge badge-xs badge-warning">
                  Most Popular
                </span>

                <h2 className="text-3xl font-bold">Single Room Available</h2>
                <span className="text-xl"> 3000 BDT/month</span>
                <p className="text-[16px] font-bold">1-bedroom flat</p>

                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>Wi-Fi</li>
                  <li>Washing Machine</li>
                  <li>Kitchen Access</li>
                  <li>24/7 Water</li>
                  <li>Air Cooler</li>
                  <li>Mini Parking</li>
                </ul>

                <div className="flex gap-2 flex-wrap text-sm mt-3">
                  <div className="badge badge-outline">Wi-Fi</div>
                  <div className="badge badge-outline">AC</div>
                  <div className="badge badge-outline">Kitchen</div>
                  <div className="badge badge-outline">Parking</div>
                </div>

               <div className="mt-6 mb-2">
                  <Link to='/add-to-find' className="btn btn-primary bg-[#5EBB2B] btn-block mb-2 ">
                    Add To Find
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* 3 */}
          <div className="flex justify-center items-center h-full min-h-[400px]">
            <div className="card w-96 bg-base-100 shadow-md">
              <div className="card-body border-gray-400 rounded-sm border">
                <span className="badge badge-xs badge-warning">
                  Most Popular
                </span>

                <h2 className="text-3xl font-bold">
                  Family Friendly Room Available
                </h2>
                <span className="text-xl">BDT 12000/month</span>
                <p className="text-[16px] font-bold">2-bedroom flat</p>

                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>Wi-Fi</li>
                  <li>Washing Machine</li>
                  <li>Kitchen Access</li>
                  <li>24/7 Water</li>
                  <li>Air Cooler</li>
                  <li>Mini Parking</li>
                </ul>

                <div className="flex gap-2 flex-wrap text-sm mt-3">
                  <div className="badge badge-outline">Wi-Fi</div>
                  <div className="badge badge-outline">AC</div>
                  <div className="badge badge-outline">Kitchen</div>
                  <div className="badge badge-outline">Parking</div>
                </div>

                <div className="mt-6 mb-2">
                  <Link to='/add-to-find' className="btn btn-primary bg-[#5EBB2B] btn-block mb-2 ">
                    Add To Find
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* 4 */}
          <div className="flex justify-center items-center h-full min-h-[400px]">
            <div className="card w-96 bg-base-100 shadow-sm">
              <div className="card-body border-gray-400 rounded-sm border">
                <span className="badge badge-xs badge-warning">
                  Most Popular
                </span>

                <h2 className="text-3xl font-bold">Bachelor Room Available</h2>
                <span className="text-xl">BDT 2500-sit/month</span>
                <p className="text-[16px] font-bold">3-bedroom flat</p>

                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>Wi-Fi</li>
                  <li>Washing Machine</li>
                  <li>Kitchen Access</li>
                  <li>24/7 Water</li>
                  <li>Air Cooler</li>
                  <li>Reading Environment</li>
                </ul>

                <div className="flex gap-2 flex-wrap text-sm mt-3">
                  <div className="badge badge-outline">Wi-Fi</div>
                  <div className="badge badge-outline">AC</div>
                  <div className="badge badge-outline">Kitchen</div>
                </div>

                <div className="mt-6 mb-2">
                  <Link to='/add-to-find' className="btn btn-primary bg-[#5EBB2B] btn-block mb-2 ">
                    Add To Find
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
