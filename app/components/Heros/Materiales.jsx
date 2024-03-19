import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import data from '../data/data.json';

export const Materiales = () => {
    const images = data.data;
    return (
        <>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                effect={''}
                className='hover:cursor-grab active:cursor-grabbing w-full max-w-[500px] h-[800px] flex justify-center items-center text-center mt-20'
                direction={'horizontal'}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation
            >
                {images.map((item, index) => (
                    <SwiperSlide id='materiales' className='flex flex-col items-center mx-auto justify-center w-full h-full text-white' key={index}>
                        <div className='opacity-90 md:rounded-md flex flex-col gap-10 w-full m-10 max-w-[800px] bg-gray-800 rounded-xl'>
                            <div className='flex flex-col justify-center items-center bg-transparent rounded-xl w-full mt-20'>
                                <div className='gap-3 flex-col flex mb-20'>
                                    <div className='bg-transparent border-dashed border-2 px-8 rounded-sm'>
                                        <p className='text-white text-center text-3xl font-medium'>{item.category}</p>
                                    </div>
                                    <div style={{ backgroundColor: item.hex }} className='relative h-[500px] w-[300px] mx-auto'>
                                        <h1 className='absolute inset-0 flex items-center justify-center text-white text-center'>{item.hex}</h1>
                                    </div>
                                    <div className='bg-gray-300 w-full rounded-sm'>
                                        <p style={{ backgroundColor: item.hex }} className='text-white text-center text-2xl font-bold'>{item.color}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Materiales;
