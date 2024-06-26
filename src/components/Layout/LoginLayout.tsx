import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom'


const LoginLayout:React.FC = () => { 
    return(
        <>
            <div className="w-full h-screen relative bg-bgLogin bg-no-repeat text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70">
                    <div id="header" className="w-full relative h-16 px-10">
                        <Link to="/main" className="w-40 h-7 absolute top-1/2 -translate-y-1/2">
                            <svg viewBox="0 0 151 29" className="css-1dbtv05-IcTopNavLogoSvg ecskck10">
                                <g fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M73.4242 14.6391H69.8018V6.13519H65.1013V27.7221H69.8018V19.1309H73.4242V27.7221H78.1248V6.13519H73.4242V14.6391Z" fill="#FF0558"></path>
                                    <path d="M37.8468 10.627H41.6417V27.7221H46.3422V10.627H49.9215V6.13519H37.8468V10.627Z" fill="#FF0558"></path>
                                    <path d="M28.4027 6.13519L24.6077 27.7221H29.1789L29.6921 24.2333H34.0217L34.5263 27.7221H39.1405L35.3025 6.13519H28.4027ZM30.2699 20.3084L31.5938 11.3248H32.1544L33.4546 20.3084H30.2699Z" fill="#FF0558"></path>
                                    <path clip-rule="evenodd" d="M20.309 0L18.9022 20.6502L18.5241 20.6701L15.1782 6.0605H11.0438L8.54076 21.1984L8.00429 21.2267L5.76326 6.0605H0L5.24331 28.6379L11.1045 28.2473L13.0114 14.2333L13.5707 14.2026L16.1242 27.9087L21.734 27.5323L26.1889 0H20.309Z" fill="#FF0558" fill-rule="evenodd"></path>
                                    <path d="M57.1664 5.91712C52.9402 5.91712 50.9134 8.22845 50.9134 11.8045V22.0528C50.9134 25.6288 52.9402 27.9401 57.1664 27.9401C61.3926 27.9401 63.4194 25.6288 63.4194 22.0528V18.346H58.7189V22.4889C58.7189 23.6228 58.2876 24.0152 57.1664 24.0152C56.0452 24.0152 55.6139 23.6228 55.6139 22.4889V11.3684C55.6139 10.2345 56.0452 9.84201 57.1664 9.84201C58.2876 9.84201 58.7189 10.2345 58.7189 11.3684V13.8105H63.4194V11.8045C63.4194 8.22845 61.3926 5.91712 57.1664 5.91712Z" fill="#FF0558"></path>
                                    <path d="M83.0408 6.13519L79.2459 27.7221H83.8171L84.3302 24.2333H88.6599L89.1645 27.7221H93.7787L89.9407 6.13519H83.0408ZM84.9081 20.3084L86.232 11.3248H86.7926L88.0928 20.3084H84.9081Z" fill="#FF0558"></path>
                                    <path d="M125.686 6.13525H120.943V27.7222H125.686C128.36 27.7222 130.128 26.6755 130.991 24.7567C131.508 23.6228 131.638 22.5762 131.638 16.9069C131.638 11.2812 131.508 10.2346 130.991 9.10073C130.128 7.18189 128.36 6.13525 125.686 6.13525ZM128.36 23.5356C127.929 24.5823 127.023 25.1492 125.428 25.1492H123.746V8.70824H125.428C127.023 8.70824 127.929 9.27517 128.36 10.3218C128.705 11.0632 128.791 11.7173 128.791 16.9505C128.791 22.1401 128.705 22.7942 128.36 23.5356Z" fill="#fff"></path>
                                    <path d="M147.076 6.13525H142.807L138.839 27.7222H141.642L142.332 23.3612H147.507L148.24 27.7222H151L147.076 6.13525ZM142.764 20.919L144.877 8.40297H144.963L147.076 20.919H142.764Z" fill="#fff"></path>
                                    <path d="M136.812 6.13525H134.009V27.7222H136.812V6.13525Z" fill="#fff"></path>
                                    <path d="M103.952 6.13525H98.8633V27.7222H101.623V17.6483H103.952C106.108 17.6483 107.488 17.0377 108.092 15.6858C108.394 14.9008 108.48 14.2903 108.48 11.8918C108.48 9.49322 108.394 8.83907 108.092 8.14131C107.488 6.74579 106.108 6.13525 103.952 6.13525ZM105.461 14.1159C105.159 14.9008 104.426 15.0753 103.262 15.0753H101.623V8.5338H103.262C104.426 8.5338 105.159 8.75185 105.461 9.49322C105.634 9.88571 105.677 10.1038 105.677 11.8045C105.677 13.4617 105.634 13.767 105.461 14.1159Z" fill="#fff"></path>
                                    <path d="M110.507 27.7222H118.355V25.1492H113.31V17.5611H118.226V14.9881H113.31V8.70824H118.355V6.13525H110.507V27.7222Z" fill="#fff"></path>
                                </g>
                            </svg>
                        </Link>
                    </div>
                    <Outlet />
                    <div id="footer" className="grid gap-y-2text-white text-center text-xs">
                        <p className="font-bold">
                            고객센터(이용 및 결제 문의)  cs@watcha.co.kr • 02-515-9985 (유료) / 제휴 및 대외 협력  https://watcha.team/contact
                        </p>
                        <p>
                            주식회사 왓챠 / 대표 박태훈 / 서울특별시 서초구 강남대로 343 신덕빌딩 3층 / 사업자등록번호 211-88-66013 / 통신판매업 신고번호 제 2019-서울서초-0965호 / 호스팅 서비스 제공자 아마존웹서비시즈코리아 유한회사 / 대표번호 02-515-9985 / 이용약관
                        </p>
                        <p> 
                            개인정보 처리 방침 / 청소년 보호정책
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginLayout;