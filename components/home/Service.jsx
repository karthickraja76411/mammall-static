import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Service = (props) => {
    const data = props?.data;
    return (
        <div className='clsx-our-service'>
            <div className='clsx-title-center'>
                <span className='d-flex align-items-center gap-2 mb-3'>
                    <Image src={"/assets/img/home/star.svg"} alt='img' width={20} height={20} loading='lazy' />
                    {data?.label}
                </span>
                <p>{data?.title}</p>
            </div>
            <div className="row clsx-home-service g-3">
                {data?.details && data?.details.map(x => (
                    <div className="col-lg-4 col-md-6 d-flex flex-streach" key={x.id}>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">{x?.title}</div>
                                <div className="card-text">
                                    {x?.text}
                                </div>
                                <Link href={x.href} className='link' tabIndex={"-1"}>
                                    {x.hrefLabel}
                                    <Image src={"/assets/img/home/right-arrow.svg"} alt='' width={30} height={16} loading='lazy' />
                                </Link>
                            </div>
                            <Image src={`/assets/img/home/${x?.img}`} alt='' width={500} height={300} className="card-img-bottom" loading='lazy' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service