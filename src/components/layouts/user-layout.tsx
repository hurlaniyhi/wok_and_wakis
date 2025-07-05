import Head from "next/head";
import { Fragment, JSX, useEffect, useState } from "react";
import { CustomContainer } from "@/components/styled-components";
import { Footer, TopNav, PageAnimation } from "@/components/ui";
import Feedback from "@/components/feedback";

interface ILayout {
    children: JSX.Element | React.ReactNode;
    description?: string,
    title?: string
}
export default function UserLayout ({ children, description, title }: ILayout) {
    const [isClient, setIsClient] = useState(false);
    description = description || "";
    title = title || "Wok & Wakis"

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null; // ⛔️ Avoid hydration mismatch

    return (
        <Fragment>
            <Head>
            <title>{title}</title>

                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="author" content="Wok & Wakis" />
                <meta content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
                <meta name="description" content={description} />
                <meta name="title" content={description} />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="baap" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="en_US" />
                <meta property="og:url" content="http://https://www.wokandwokis.com/" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta
                property="og:image"
                content="http://https://www.baapfinance.com/images/logo-preview.png"
                />
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                property="twitter:url"
                content="http://https://www.wokandwokis.com/"
                />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta
                    property="twitter:image"
                    content="http://https://www.baapfinance.com/images/logo-preview.png"
                />

                {/* <link rel="icon" type="image/x-icon" href="/favicon.ico" /> */}
                <link rel="icon" href="/logo-sm.svg" type="image/svg+xml" />
            </Head>
            <div className="min-h-screen">
                <Feedback />
                <TopNav />
                <PageAnimation>
                    <CustomContainer>
                        {children}
                    </CustomContainer>
                </PageAnimation>
                <Footer />
            </div>
        </Fragment>
    )
}