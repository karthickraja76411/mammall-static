import React from 'react';
import Image from "next/image";
import Link from "next/link";

const DownloadBanner = () => {
    return (
        <div className='clsx-downlaod-banner'>
            <Image src='/assets/img/home/moibile-download.svg' alt='' width={500} height={320} className="mobileBanner" loading='lazy' />
            <div className='banner-wrap'>
                <div className='banner-conntent'>
                    <span className='tag'>
                        <Image src={"/assets/img/home/star.svg"} alt='img' width={20} height={20} loading='lazy' />
                        Downlaod the app
                    </span>
                    <h3>Effortless Cattle Trading: Your Ultimate Solution for Buying and Selling Livestock</h3>
                    <div className='d-flex align-item-center gap-3 links'>
                        <Link href="#" tabIndex={"-1"}>
                            <Image src={"/assets/img/home/google-store.svg"} alt='' width={140} height={60} loading='lazy' />
                        </Link>
                        <Link href="#" tabIndex={"-1"}>
                            <Image src={"/assets/img/home/apple-store.svg"} alt='' width={140} height={60} loading='lazy' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadBanner