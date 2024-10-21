import { SocialLinksTwo } from '@/src/common/social-links';
import React from 'react';
import  user_img from "@assets/img/blog/user-2.jpg";
import Link from 'next/link';



const UserProfile = () => {

    return (
        <>
             <div style={{background:"url(/assets/main/blog-right-bg.png)", backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="sidebar__widget mb-40">
                <div className="sidebar__widget-content">
                    <div className="sidebar__about">
                        <div className="sidebar__thumb text-center">
                        <img src={"/assets/main/logo-white.png"} alt="theme-pure" />
                        </div>
                        <div className="sidebar__content text-center">
                        <p>Uzman ekibimizle sağlıklı yarınlar için buradayız. Hemen bizimle iletişime geçin.</p>
                        <div className="tp-header-btn">
                                    <Link className="tp-btn" href="/iletisim">İletişime Geç</Link>
                                 </div>
        
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;