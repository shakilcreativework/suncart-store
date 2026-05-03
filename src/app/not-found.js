import Container from '@/components/shared/Container';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import React from 'react';
import { HiHome } from 'react-icons/hi';

const NotFound = () => {
    return (
        <div className="min-h-dvh flex flex-col py-20">

                <Container>
                    <div className='text-center'>

                        {/* Error Code */}
                        <h1 className="text-8xl font-extrabold btn-c dm-sans">
                            404
                        </h1>

                        {/* Title */}
                        <h2 className=" text-xl md:text-3xl font-semibold mt-4 text-[#1F1B16] dm-sans">
                            Oops! Page not found
                        </h2>

                        {/* Description */}
                        <p className="text-[#6F665C] mt-3">
                            The page you&apos;re looking for doesn’t exist or has been moved.
                        </p>

                        {/* Button */}
                        <div className="mt-6">
                            {/* <MagneticWrapper to="/" as="link" className="" children={'Go Home'} /> */}
                            <Button leftIcon={<HiHome />} href="/" as="link" className="" text={'Go Home'} />
                        </div>

                        <div>
                            <Image src={'https://i.ibb.co.com/wrQmyYPT/alert.png'} alt='Data missing' width={200} height={200} priority className='w-full h-full' />
                        </div>

                    </div>
                </Container>

        </div>
    );
};

export default NotFound;