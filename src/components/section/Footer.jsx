import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__lnner">
                <div className="left">
                    <ul>
                        <li>
                            <span>고객센터</span>
                            <ul>
                                <li><Link to="mailto:nicejpm@naver.com" target='_blank'>문의하기</Link></li>
                            </ul>
                        </li>
                        <li>
                            <span>팀원</span>
                            <ul>
                                <li><Link to="https://github.com/nicejmp1" target='_blank'>박정민</Link></li>
                                <li><Link to="https://github.com/hyunminkim93" target='_blank'>김현민</Link></li>
                            </ul>
                        </li>
                        <li>
                            <span>문의 이메일</span>
                            <ul>
                                <li><Link to="mailto:nicejpm@naver.com">nicejpm@naver.com</Link></li>
                                <li><Link to="mailto:rlagusals234@gmail.com">rlagusals234@gmail.com</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="right">
                    <div className="sns">
                        <ul>
                            <li><Link to="https://github.com/nicejmp1"><span className='blind'>깃허브</span><FaGithub /></Link></li>
                            <li><Link to="https://www.instagram.com/jj_m_park"><span className='blind'>인스타그램</span><FaInstagram /></Link></li>
                            <li><Link to="https://www.youtube.com/channel/UCdfUZ7mSAjSPYsP9ph3uQmg"><span className='blind'>유튜브</span><IoLogoYoutube /></Link></li>
                            <li><Link to="mailto:nicejpm@naver.com"><span className='blind'>이메일</span><IoMail /></Link></li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="footer__bot">
                <div className="left_bot">
                    <p className="copy">COPYRIGHT © Chicken. All Rights Reserved.</p>
                </div>
                <div className="right_bot">
                    <ul>
                        <li><Link to="#">이용약관</Link></li>
                        <li><Link to="#">개인정보처리방침</Link></li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer
