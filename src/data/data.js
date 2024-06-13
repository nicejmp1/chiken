import chicken1 from '../data/chickenlist-main/atteckChicken/atteckChicken_2024-05-27.json';
import chicken2 from '../data/chickenlist-main/barunChicken/barunChicken_2024-05-27.json';
import chicken3 from '../data/chickenlist-main/cheogajipChicken/cheogajipChicken_2024-05-27.json';
import chicken4 from '../data/chickenlist-main/chkickenPluse/chkickenPluse_2024-05-27.json';
import chicken5 from '../data/chickenlist-main/dangchiddaengChicken/dangchiddaengChicken_2024-05-13.json';
import chicken6 from '../data/chickenlist-main/dongkiChicken/dongkiChicken_2024-05-27.json';
import chicken7 from '../data/chickenlist-main/gamachiChicken/gamachiChicken_2024-05-27.json';
import chicken8 from '../data/chickenlist-main/hoolalaChicken/hoolalaChicken_2024-05-27.json';
import chicken9 from '../data/chickenlist-main/kkanbuChicken/kkanbuChicken_2024-05-27.json';
import chicken10 from '../data/chickenlist-main/kyedongChicken/kyedongChicken_2024-05-27.json';
import chicken11 from '../data/chickenlist-main/mexicanaChicken/mexicanaChicken_2024-05-27.json';
import chicken12 from '../data/chickenlist-main/puradakChicken/puradakChicken2024-05-27.json';
import chicken13 from '../data/chickenlist-main/ttobongeeChicken/ttobongeeChicken_2024-05-27.json';
import chicken14 from '../data/chickenlist-main/kfc/kfc_2024-05-27.json';
import chicken15 from '../data/chickenlist-main/kyochonchicken/kyochonchicken_2024-05-27.json';
import chicken16 from '../data/chickenlist-main/pelicana/pelicana_2024-05-27.json';
import chicken17 from '../data/chickenlist-main/60chicken/60chicken_2024-05-27.json';
import chicken18 from '../data/chickenlist-main/norangtongdak/norangtongdak_2024-05-17.json';
import chicken19 from '../data/chickenlist-main/gcova/gcova_2024-05-27.json';
import chicken20 from '../data/chickenlist-main/Hosigichicken/Hosigichicken_2024-05-17.json';
import chicken21 from '../data/chickenlist-main/goobne/goobne_2024-05-08.json';
import chicken22 from '../data/chickenlist-main/nenechicken/nenechicken_2024-05-27.json';
import chicken23 from '../data/chickenlist-main/bbqchicken/bbqchicken_2024-05-27.json';
import chicken24 from '../data/chickenlist-main/bhcchicken/bhcchicken_2024-05-27.json';

import defaultImage from '../assets/img/defaultck.jpg';

const allData = [
    ...chicken1,
    ...chicken2,
    ...chicken3,
    ...chicken4,
    ...chicken5,
    ...chicken6,
    ...chicken7,
    ...chicken8,
    ...chicken9,
    ...chicken10,
    ...chicken11,
    ...chicken12,
    ...chicken13,
    ...chicken14,
    ...chicken15,
    ...chicken16,
    ...chicken17,
    ...chicken18,
    ...chicken19,
    ...chicken20,
    ...chicken21,
    ...chicken22,
    ...chicken23,
    ...chicken24,
];

const data = allData.map(item => ({
    Menu: item.Menu || '메뉴 정보 없음',
    Sub: item.Sub || '설명 정보 없음',
    Price: item.Price || '가격 정보 없음',
    img: item.img || item.MenuImage || defaultImage, // 이미지 속성을 조건부로 설정
    Brand: item.Brand || '브랜드 정보 없음'
}));

console.log(data); // 데이터 확인용

export default data;
