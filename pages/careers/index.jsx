import React from 'react';
import ContainerLayout from '~/components/ContainerLayout';
import DownloadBanner from '~/components/DownloadBanner';
import MainBanners from '~/components/careers/MainBanners';

const Index = (props) => {
    const data = props?.data;
    return (
        <React.Fragment>
            {data && <ContainerLayout>
                <MainBanners data={data?.mainHeader} />
                <DownloadBanner />
            </ContainerLayout>}
        </React.Fragment>
    )
}

export default Index