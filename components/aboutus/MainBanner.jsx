import React from 'react';
import Image from "next/image";

const MainBanner = (props) => {
    const data = props?.data;
    return (
        <React.Fragment>
            {data && <div className="row g-3 clsx-about-main">
                <div className="col-lg-6 left-content">
                    <h3 className='title'>{data?.titleStart} <span>{data?.titleEnd}</span></h3>
                    <Image src={`/assets/img/aboutus/${data?.img}`} alt="" width={300} height={240} className='w-100 ' loading='lazy' />
                </div>
                <div className="col-lg-6 clsx-side-content">
                    <p>{data?.text1}</p>
                    <p>{data?.text2}</p>
                    <p>{data?.text3}</p>
                </div>
            </div>}
        </React.Fragment>
    )
}

export default MainBanner