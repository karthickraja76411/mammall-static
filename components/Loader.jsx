import React from 'react';
import Image from "next/image";

const Loader = () => {
    return (
        <div className="clsx-spinner">
            <div className="clsx-spinner-border"></div>
            <Image src={"/assets/img/logo.svg"} alt="" width={26} height={26} />
        </div>
    )
}

export default Loader