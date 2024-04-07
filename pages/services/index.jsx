import React from 'react';
import ContainerLayout from '~/components/ContainerLayout';
import DownloadBanner from '~/components/DownloadBanner'
import MainBanner from '~/components/services/MainBanner';

const Index = (props) => {
    const data = props?.data;
    return (
        <ContainerLayout>
            <MainBanner data={data?.ourBanners} />
            <DownloadBanner />
        </ContainerLayout>
    )
}

export default Index