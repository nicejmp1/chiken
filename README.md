# YouTube Playlist Manager

## 프로젝트 소개
이 프로젝트는 YouTube API를 사용하여 사용자가 좋아하는 음악 플레이리스트를 관리할 수 있는 웹 애플리케이션입니다. 사용자는 YouTube에서 음악을 검색, 저장, 재생할 수 있습니다.

## 시작하기 전에
본 프로젝트는 Node.js 기반으로 작성되었으며, React와 여러 필수 라이브러리를 사용합니다.

### 필수 조건
- Node.js가 설치되어 있어야 합니다. [Node.js 공식 웹사이트](https://nodejs.org/)에서 다운로드할 수 있습니다.
- 터미널에서 `node -v`를 실행하여 Node.js가 성공적으로 설치되었는지 확인하세요.
- 필요하지 않은 파일이나 이전 프로젝트 파일이 있다면 정리합니다.

## 작업 순서
1. node.js 설치 / 버전확인
2. react 설치
3. 라이브러리 설치
4. 폴더 셋팅
5. header 설정



### 설치 방법
1. **프로젝트 클론하기**
````bash
git clone https://github.com/your-username/youtube-api.git
cd youtube-api
````

## 2. **필요한 라이브러리 설치**
> 프로젝트를 시작하기 전에 다음 라이브러리들을 설치해야 합니다.

- **React 설치**: `npx create-react-app 폴더이름` 명령어로 새로운 리액트 앱을 생성합니다. 현재 디렉토리에 설치하려면 폴더 이름 대신 `.`를 사용하세요.

- **react-router-dom 설치**: `npm install react-router-dom` 명령어로 SPA(Single Page Application) 내 라우팅을 관리할 수 있는 라이브러리를 설치합니다.

- **Axios 설치**: `npm install axios` 명령어로 비동기 통신을 위한 API 라이브러리를 설치합니다.

- **React Icons 설치**: `npm install react-icons` 명령어로 다양한 아이콘을 프로젝트에 추가할 수 있습니다.

- **React Player 설치**: `npm install react-player` 명령어로 유튜브 및 다른 비디오 스트리밍 서비스를 재생할 수 있는 컴포넌트를 설치합니다.

- **Sass 설치**: `npm install sass` 명령어로 CSS 전처리기를 설치합니다.

- **React Helmet Async 설치**: `npm install react-helmet-async` 명령어로 SEO를 개선할 수 있는 도구를 설치합니다.

- **Swiper 설치**: `npm install swiper` 명령어로 슬라이드 기능을 추가할 수 있는 라이브러리를 설치합니다.

## 사용 스택
- node.js 설치

## 프로젝트 실행 npm 명령어 
프로젝트를 실행하기 위한 명령어는 다음과 같습니다:
- **npm start**: 개발 서버를 시작하고 `http://localhost:3000`에서 애플리케이션을 볼 수 있습니다.
- **npm run build**: 애플리케이션을 프로덕션 준비 상태로 빌드합니다.
- **npm test**: 애플리케이션의 테스트를 실행합니다.
- **npm run eject**: Create-React-App에서 제공하는 빌드 도구와 설정을 사용자가 직접 관리할 수 있도록 추출합니다. 이 작업은 되돌릴 수 없습니다.

- **시작하기** : 
````bash
cd /Users/nicejmp/Documents/GitHub/youtube-api
npm start
````
이 문서는 프로젝트의 필요한 라이브러리 설치부터 실행까지의 단계를 명확하게 안내합니다. 필요에 따라 프로젝트 특성에 맞게 추가적인 수정을 진행하실 수 있습니다.


## 자동완성 명령어 
- rafc (처음자동으로 만들어 주는것)
- rafce
- components (폴더)


````bash
import React from 'react'

const Home = () => {
    return (
        <div>Home</div>
    )
}

export default Home
````

## 기본셋팅 (APP.js)

````bash
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
````
파일을 생성하게 된 후 import를 통해 잘 만들어 졌는지 확인 해야 함. <br>
현재까지 만든 파일들 

````bash
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Developoer from './pages/Developoer'
import Webd from './pages/Webd'
import Website from './pages/Website'
import Gsap from './pages/Gsap'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/today' element={<Today />} />
        <Route path='/developoer' element={<Developoer />} />
        <Route path='/webd' element={<Webd />} />
        <Route path='/website' element={<Website />} />
        <Route path='/gsap' element={<Gsap />} />
        <Route path='/port' element={<Port />} />
        <Route path='/youtube' element={<Youtube />} />
        <Route path='/channel' element={<Channel />} />
        <Route path='/video' element={<Video />} />
        <Route path='/search' element={<Search />} />
        <Route path='/*' element={<Not />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

````

##


## 파일 압축 하는 방법
- npm run build를 사용  <br>

npm run build란? 
>npm run build는 Node.js 프로젝트에서 매우 일반적인 명령어로, 특히 웹 애플리케이션을 개발할 때 사용됩니다. 이 명령어는 프로젝트의 소스 코드를 최적화하고, 프로덕션 환경에서 사용할 수 있도록 준비하기 위해 컴파일 및 번들링하는 과정을 실행합니다. 여기에는 여러 단계가 포함될 수 있습니다

- 최적화: 소스 코드가 압축되고, 불필요한 코드가 제거됩니다(예: 개발 중에만 필요한 코드). <br>
- 번들링: 웹 애플리케이션의 모든 자바스크립트와 CSS 파일이 하나 또는 몇 개의 파일로 결합됩니다.  이렇게 하면 브라우저의 로드 시간이 단축되고, 네트워크 요청의 수가 감소합니다. <br>
- 트랜스파일링: 최신 자바스크립트(ECMAScript 6 이상) 코드를 모든 브라우저에서 호환 가능한 형태로 변환합니다. <br>
- 환경 설정: 프로덕션 환경에 맞게 환경 변수 설정을 조정합니다 <br>

## 처음 리엑트 설정 시 필요한 폴더와 파일 (2024.05.13)
![alt text](image.png)

````bash
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Developoer from './pages/Developoer'
import Webd from './pages/Webd'
import Website from './pages/Website'
import Gsap from './pages/Gsap'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

import Header from './components/section/Header'
import Footer from './components/section/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/today' element={<Today />} />
        <Route path='/developoer' element={<Developoer />} />
        <Route path='/webd' element={<Webd />} />
        <Route path='/website' element={<Website />} />
        <Route path='/gsap' element={<Gsap />} />
        <Route path='/port' element={<Port />} />
        <Route path='/youtube' element={<Youtube />} />
        <Route path='/channel' element={<Channel />} />
        <Route path='/video' element={<Video />} />
        <Route path='/search' element={<Search />} />
        <Route path='/*' element={<Not />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

````

## props
>React에서 props는 컴포넌트 간의 데이터 통신과 인터페이스 설정에 필수적인 요소입니다. props를 통해 부모 컴포넌트는 자식 컴포넌트에게 상태, 설정, 그리고 행동(함수)을 전달할 수 있습니다. 이러한 특성은 React의 선언적인 프로그래밍 패러다임을 강화하고, 컴포넌트 기반 개발을 더욱 유연하게 만듭니다.

````bash
import React from 'react'

const Main = (props) => {
    return (
        <main id='main' role='main'>
            {props.children}
        </main>
    )
}

export default Main
````

props를 이용하여 main 하위 폴더들 = 자식 컴포넌트를 불러 올 수 있다.


## 리액트에서 링크 사용시
- 내부에서 이동할때는 Link .to 사용
- 외부로 이동할때는 a 링크만 사용 해도 가능

## Data에 있는 데이텀 사용하는 방법

````bash
import React from 'react'

import { headerMenus } from "../../data/header";
import { searchKeyword } from "../../data/header";
import { snsLink } from "../../data/header";

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href="/">
                    <em></em>
                    <span>musicmatch <br /><i>Youtube</i></span>
                </a>
            </h1>
            <nav className='header__menu'>
                <ul className='menu'>
                    {headerMenus.map((menu, key) => (
                        <li key={key}>
                            <Link to={menu.src}>
                                {menu.icon}<span>{menu.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className='keyword'>
                    {searchKeyword.map((keyword, key) => (
                        <li key={key}>
                            <Link to={keyword.src}>
                                {keyword.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="header__sns">
                <ul>
                    {snsLink.map((sns, key) => (
                        <li key={key}>
                            <a href={sns.url} target='_black' rel='noopener noreferrer' aria-label={sns.title}>
                                {sns.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}
export default Header

````
여기서 Data안에있는 js 파일을 export시켜야 한다.


## Props 통해 데이터 전달

````bash
import React from 'react'

const Main = (Props) => {
    return (
        <main id='main' role='main'>
            {Props.children}
        </main>
    )
}

export default Main

````

## Suspense를 통한 최적화 방법

````bash
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './components/section/Main'

const Home = lazy(() => import('./pages/Home'));
const Top100 = lazy(() => import('./pages/Top100'));
const Suggestion = lazy(() => import('./pages/Suggestion'));
const DanecList = lazy(() => import('./pages/DanecList'));
const Hiphop = lazy(() => import('./pages/Hiphop'));
const Indie = lazy(() => import('./pages/Indie'));
const Idol = lazy(() => import('./pages/Idol'));
const Classic = lazy(() => import('./pages/Classic'));
const Jpop = lazy(() => import('./pages/Jpop'));
const Popsong = lazy(() => import('./pages/Popsong'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top100" element={<Top100 />} />
          <Route path="/suggestion" element={<Suggestion />} />
          <Route path="/danecList" element={<DanecList />} />
          <Route path="/hiphop" element={<Hiphop />} />
          <Route path="/indie" element={<Indie />} />
          <Route path="/idol" element={<Idol />} />
          <Route path="/classic" element={<Classic />} />
          <Route path="/jpop" element={<Jpop />} />
          <Route path="/popsong" element={<Popsong />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
export default App

````

Sunspense를 하고 난 후 fallback={<Main />} 을 지정해줘야함 
그리고 모든 페이지에 Main을 지정해야 작동이 됨

````bash
import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Main = (Props) => {
    return (
        <div>
            <Header />
            <main id='main' role='main'>
                {Props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Main

````

하나의 Main에 header,footer를 넣어둠과 동시에 모든 페이를 div 대신 Main으로 작성하게 되어 경로를 최적하게 사용하게된다


## Helmet 을 사용하여 title 넣기

````bash
      <HelmetProvider>
            <Helmet
                titleTemplate="%s | Music Youtube"
                defaultTitle="Music Youtube"
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>
````

## youtube api data 가져오는 방법

1. youtube api 접속
2. ApIs Explorer 에서 필요한 값을 입력 
- part : snippet
- maxResults : 50
- q (검색?) : webstoryboy 
입력후 나오는 url에다가 본인의 키를 넣으면 데이터가 나옴
https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=webstoryboy&key=[YOUR_API_KEY]


## Api 키 보관 방법
- Api 키 같은경우 .env 파일을 만들어서 그 안에 키값을 넣어줘야 한다.
- REACT_APP_YOUTUBE_API_KEY=[YOUR_API_KEY] 이런식으로 넣어 키값을 보호해야 한다.


## youtube api 키를 받은 후 fetch 사용 방법

````bash
import React, { useEffect, useState } from 'react'

import Main from '../components/section/Main'
import { useParams } from 'react-router-dom'
import VideoSearch from '../components/video/VideoSearch';

const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setVideos(result.items);
            })
    }, [searchId])



    return (
        <Main
            title="유튜브 검색"
            description="유튜브 검색 결과 페이지 입니다.">
            <section id='searchPage'>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
            </section>
        </Main>
    )
}

export default Search


````# chiken
