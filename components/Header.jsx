import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = (props) => {
    const router = useRouter();
    const data = props?.data;
    const [sticky, setSticky] = React.useState(false);
    React.useEffect(() => {
        addEventListener("scroll", () => {
            setSticky(false);
            if (window.scrollY > 100) {
                setSticky(true);
            }
        });
    }, []);
    return (
        <nav className={`navbar navbar-expand-xxl clsx-main-header ${sticky && "sticked"}`}>
            <div className="container-xl">
                <a className="navbar-brand" href="#" tabIndex={"-1"}>{data?.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {data.links && <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-body">
                        <ul className="navbar-nav ms-4 gap-2 gap-lg-3 clsx-header-nav">

                            {data.links.map((x) => (
                                <li className="nav-item" key={x.id}>
                                    <Link className={`nav-link ${router.asPath === x.href && "active"}`} href={x.href}>{x.name}</Link>
                                </li>
                            ))}
                        </ul>

                        <ul className="navbar-nav ms-2 ms-xl-5 mt-4 mt-xl-0 gap-4">
                            <li className="nav-item clsx-nav-lang">
                                <select className="form-select" tabIndex={"-1"} onChange={(e) => { props?.handleLanguage(e.target.value) }} defaultValue={props?.lang}>
                                    <option value={"EN"}>English</option>
                                    <option value={"TA"}>Tamil</option>
                                    <option value={"TE"}>Telegu</option>
                                </select>
                            </li>
                            <li className="nav-item">
                                <button className="btn1 clsx-nav-btn" tabIndex={"-1"}>
                                    Get the app <i className="fa-solid fa-arrow-right-long ms-1"></i>
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>}
            </div>
        </nav>
    )
}

export default Header