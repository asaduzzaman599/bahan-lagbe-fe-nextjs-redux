import banner from '@/assets/img/banner.png'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='w-full py-4 grid grid-cols-1 grid-cols-2 justify-center items-center'>
            <div className='order-2'>
                <Image src={banner} alt='banner image' style={{
        width: '100%',
        height: 'auto',
      }} />
            </div>
            <div className='h-full order-1 flex items-center'>
                <div className='text-center flex flex-col items-center justify-center w-full'>
                    <h2 className='text-lg lg:text-3xl font-bold text-primary flex flex-col items-center justify-center'>BAHAN LAGBE?</h2>
                    <p className='text-gray-500 font-light text-sm lg:text-lg'>We are the first online platform </p>
                    <p className='text-gray-500 font-light text-sm lg:text-lg mb-2'>to book your desire vehicle </p>
                    <button className='text-accent font-bold font-lg px-6 py-2 rounded-full bg-primary border border-accent'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Header;