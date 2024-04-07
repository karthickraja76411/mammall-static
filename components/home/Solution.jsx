import React from 'react';
import Image from "next/image";

const Solution = (props) => {
    const data = props?.data;
    return (
        <div className='clsx-home-solution'>
            <div className='clsx-title-center'>
                <span className='d-flex align-items-center gap-2 mb-3'>
                    <Image src={"/assets/img/home/star.svg"} alt='img' width={20} height={20} loading='lazy' />
                    {data?.label}
                </span>
                <p>{data?.title}</p>
            </div>

            <div className="row g-3">
                {data?.details && data.details.map(x => (
                    <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-streach" key={x.id}>
                        <div className="card">
                            <div className="card-body">
                                <Image src={`/assets/img/home/${x.img}`} alt="" width={60} height={60} loading='lazy' className='mb-3' />
                                <div className="card-title">{x?.title}</div>
                                <div className="card-text">
                                    {x?.text}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Solution