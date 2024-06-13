import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
import search_icon_light from '../../assets/test/search-w.png';
import search_icon_dark from '../../assets/test/search-b.png';
import { headerMenus } from '../../data/header'; // headerMenus의 경로에 맞게 수정

const Search = () => {
    const { theme } = useTheme();
    const data = useData();
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const searchBoxRef = useRef(null);
    const [visible, setVisible] = useState(false);

    const handleSearch = () => {
        if (visible) {
            setVisible(false);
            setTimeout(() => setResults([]), 300); // 300ms 후에 결과를 비웁니다
            return;
        }
        if (searchTerm.trim() === '') {
            setResults([]);
            setVisible(true);
            return;
        }
        const filteredData = data.filter(item => {
            const menuMatch = item.Menu && item.Menu.toLowerCase().includes(searchTerm.toLowerCase());
            const subMatch = item.Sub && item.Sub.toLowerCase().includes(searchTerm.toLowerCase());
            const brandMatch = item.Brand && item.Brand.toLowerCase().includes(searchTerm.toLowerCase());
            return menuMatch || subMatch || brandMatch;
        }).map(item => {
            const menu = headerMenus.find(menu => menu.title.replace(/\s/g, '').toLowerCase() === item.Brand.replace(/\s/g, '').toLowerCase());
            return {
                ...item,
                url: menu ? menu.src : '#'
            };
        });
        setResults(filteredData);
        setVisible(true);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleClickOutside = (event) => {
        if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
            setVisible(false);
            setTimeout(() => setResults([]), 300); // 300ms 후에 결과를 비웁니다
        }
    };

    const handleItemClick = (url) => {
        window.location.href = url;
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="search-box" ref={searchBoxRef}>
            <input
                type="text"
                placeholder='찾으시는 치킨 있나요?'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <img
                src={theme === 'light' ? search_icon_light : search_icon_dark}
                alt="search icon"
                onClick={handleSearch}
                className='search-icon'
            />
            <div className={`search-results ${visible ? 'visible' : ''}`}>
                {results.length === 0 && visible && (
                    <div className="no-results">
                        검색 결과가 존재하지 않습니다
                    </div>
                )}
                {results.map((result, index) => (
                    <div 
                        key={index} 
                        className="result-item"
                    >
                        <div className="img">
                            <img src={result.img} alt={result.Menu} />
                        </div>
                        <div className='search-item'>
                            <h3>{result.Menu}</h3>
                            <p>{result.Sub}</p>
                            <span>{result.Price}</span>
                            <span>{result.Brand}</span>
                            <button className="order-button" onClick={() => handleItemClick(result.url)}>메뉴 보러가기</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
