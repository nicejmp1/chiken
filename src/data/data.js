import chicken1 from './atteckChicken/atteckChicken_2024-05-27.json';
import chicken2 from './barunChicken/barunChicken_2024-05-27.json';
import chicken3 from './cheogajipChicken/cheogajipChicken_2024-05-27.json';
import chicken4 from './chkickenPluse/chkickenPluse_2024-05-27.json';
import chicken5 from './dangchiddaengChicken/dangchiddaengChicken_2024-05-13.json';
import chicken6 from './dongkiChicken/dongkiChicken_2024-05-27.json';
import chicken7 from './gamachiChicken/gamachiChicken_2024-05-27.json';
import chicken8 from './hoolalaChicken/hoolalaChicken_2024-05-27.json';
import chicken9 from './kkanbuChicken/kkanbuChicken_2024-05-27.json';
import chicken10 from './kkubeurakkoChicken/kkubeurakkoChicken_2024-05-27.json';
import chicken11 from './kyedongChicken/kyedongChicken_2024-05-27.json';
import chicken12 from './mexicanaChicken/mexicanaChicken_2024-05-27.json';
import chicken13 from './puradakChicken/puradakChicken2024-05-27.json';
import chicken14 from './ttobongeeChicken/ttobongeeChicken_2024-05-27.json';
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
];


const data = allData.map(item => ({
    Menu: item.Menu || '메뉴 정보 없음',
    Sub: item.Sub || '설명 정보 없음',
    Price: item.Price || '가격 정보 없음',
    img: item.img || defaultImage,
    Brand: item.Brand || '브랜드 정보 없음'
}));

console.log(data); // 데이터 확인용

export default data;
