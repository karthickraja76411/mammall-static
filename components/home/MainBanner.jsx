import React from 'react';
import Image from "next/image";

const MainBanner = (props) => {
    const data = props?.data;
    return (
        <section className="px-2 mt-2">
            <div className="container-xl clsx-info-main">
                <div className="clsx-home-text">
                    <h3> {data?.titleStart} <span>{data?.titleEnd}</span></h3>
                    <p>{data?.subText}</p>
                    <button className="btn1 clsx-nav-btn" tabIndex={"-1"}>
                        Get the app <i className="fa-solid fa-arrow-right-long ms-1"></i>
                    </button>
                </div>
                <Image src={"/assets/img/home/home-mobile.svg"} alt="img" width={500} height={300} className="home-mobile" loading='lazy' />
            </div>
        </section>
    )
}

export default MainBanner