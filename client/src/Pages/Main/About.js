// import { ScrollContainer, ScrollPage, Animator, batch, Sticky, Fade, MoveOut } from 'react-scroll-motion';
import { useEffect, useCallback, useRef } from 'react';
import styles from './About.module.css';
import test1 from '../../images/minki.jpeg';
import test2 from '../../images/seungmin.jpeg';
import test3 from '../../images/sejun.jpeg';

import slideImg1 from '../../images/slide1.png';
import slideImg2 from '../../images/slide2.png';
import slideImg3 from '../../images/slide3.png';



// import mainBg from '../images/main.png';



const About = () => {
    const mainContent = useRef();
    const sticky = useRef();
    const children = useRef([]);
    const animate = useCallback((start, end, contentVh, length) => {

        children.current.forEach((item, i) => {
            // skip first animation section
            // if (i === 0) return;

            const unit = (end - start) / length;
            // console.log(start, end);
            const s = start + unit * i + 100;
            const e = start + unit * (i + 1);


            if (window.scrollY <= s) {
                item.style.transform = `translate3d(-50%, 0, 0)`;
                item.style.webkitTransform = `translate3d(-50%, 0, 0)`;
            } else if (window.scrollY >= e) {
                item.style.transform = `translate3d(-50%, ${-contentVh}%, 0)`;
                item.style.webkitTransform = `translate3d(-50%, ${-contentVh}%, 0)`
            } else {
                item.style.transform = `translate3d(-50%, ${(window.scrollY - s) / (unit - 100) * (-contentVh)
                    }%, 0)`;
                item.style.webkitTransform = `translate3d(-50%, ${(window.scrollY - s) / (unit - 100) * (-contentVh)
                    }%, 0)`;
            }
        })
    }, []);


    useEffect(() => {
        const length = children.current.length;
        const headerVh = 6;
        const contentVh = 92 - headerVh * length;
        let scrollStart = mainContent.current.offsetTop + 100;
        let scrollEnd = mainContent.current.offsetTop + mainContent.current.offsetHeight - window.innerHeight - 100;

        // reseting initial position 
        const init = () => {
            scrollStart = mainContent.current.offsetTop + 100;
            scrollEnd = mainContent.current.offsetTop + mainContent.current.offsetHeight - window.innerHeight - 100;
        };


        children.current.forEach((item, i) => {

            // skip first animation section.
            // if (i === 0) {
            //     item.style.bottom = "-72vh";
            //     item.children[0].style.height = headerVh + 'vh';
            //     item.children[1].style.height = contentVh + 'vh';
            //     item.style.transform = `translate3d(-50%, -72%, 0)`;

            // } else {
            //     item.style.bottom = -(90 - headerVh * (length - (i))) + 'vh';
            //     item.children[0].style.height = headerVh + 'vh';
            //     item.children[1].style.height = contentVh + 'vh';
            // }

            item.style.bottom = -(100 - headerVh * (length - i)) + 'vh';
            item.children[0].style.height = headerVh + 'vh';
            item.children[1].style.height = contentVh + 'vh';

        });


        window.addEventListener('scroll', () => {
            animate(scrollStart, scrollEnd, contentVh, length);
        })

        window.addEventListener('resize', init);

        return () => {
            window.removeEventListener('scroll', () => {
                animate(scrollStart, scrollEnd, contentVh, length);
            });

            window.removeEventListener('resize', init);
        }



    }, [animate]);

    const addToRefs = el => {
        if (el && !children.current.includes(el)) {
            children.current.push(el);
        }
    };



    return (
        <section className={styles['about-container']}>
            <div className={styles['title-container']}>
                <div className={styles['title-bg']}>
                    {/* <img src={mainBg} alt="" /> */}
                </div>
                <div className={styles['title-divider']}>
                    <h1>
                        <span className={styles['br-line']}>
                            <span className={styles['emphasize']}>코</span>
                            딩으로
                        </span>
                        <span className={styles['br-line']}>
                            <span className={styles['emphasize']}>불</span>
                            편함을
                        </span>
                        <span className={styles['br-line']}>
                            해<span className={styles['emphasize']}>소</span>합니다!!</span>
                    </h1>
                    <p>"코뿔소는 코딩으로 불편함을 해결해드리는 웹사이트입니다."</p>
                </div>
            </div>

            {/* need to fix <br/> part  */}
            <div ref={mainContent} className={` ${styles['story-container']}`}>
                <div ref={sticky} className={styles['sticky']}>
                    <div className={styles['intro']}>
                        <h2>코뿔소 팀은 어떻게 만들어졌을까?</h2>
                    </div>
                    <div ref={addToRefs} className={`${styles['story-wrapper']} ${styles['row-container']}`}>
                        <div className={styles.header}><h2>1. 코뿔소는 하나의 생각에서 출발했어요</h2></div>
                        <div className={styles.contents}>
                            <div className={styles['img-container']}>
                                <img src={slideImg1} alt="" />
                                <div className={styles['text-top']}>
                                    <p>토론토 공립 도서관에는 <br />
                                        한국어 책이 5천권이나 있는데<br />
                                        제목이 영어로 되어 있어서<br />
                                        검색을 못하네...</p>
                                </div>
                                <div className={styles['text-bottom']}>
                                    <p>예를 들어,<br />
                                        라면을 끓이며란 책은<br />
                                        “Ramyonul kkurimyo”로<br />
                                        검색해야하는 식이었어요..😂</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={addToRefs} className={`${styles['story-wrapper']} ${styles['row-container']}`}>
                        <div className={styles.header}><h2>2. 그래서 검색 프로그램을 만들어 보기로 했죠</h2></div>
                        <div className={styles.contents}>
                            <div className={styles['img-container']}>
                                <img src={slideImg2} alt="" />

                                <div className={styles['text-top']}>
                                    <p>
                                        일단 영어 제목을 <br />
                                        전부 한글로 바꾸고<br />
                                        책 표지랑 링크도<br />
                                        추가해보자고!<br />
                                    </p>
                                </div>

                                <div className={styles['text-middle']}>
                                    <p>
                                        손 쉽게 토론토 도서관으로 <br />
                                        이동할 수 있는 링크도<br />
                                        추가하면 좋을 것 같은데?<br />
                                    </p>
                                </div>

                                <div className={styles['text-bottom']}>
                                    <p>
                                        오 좋은 아이디어야!<br />
                                        카테고리별로 책을 골라볼 수 있는 기능도 넣자!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={addToRefs} className={`${styles['story-wrapper']} ${styles['row-container']}`}>
                        <div className={styles.header}><h2>3. 코뿔소는 앞으로 또 어떤 문제를 해결할까요?</h2></div>
                        <div className={styles.contents}>
                            <div className={styles['img-container']}>
                                <img src={slideImg3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`wrapper ${styles['profile-container']}`}>
                <h2>코불소를 만들어가는 사람들</h2>
                <ul className={styles['profiles']}>
                    <li className={styles['profile-card']}>
                        <div className={styles['profile-img-container']}>
                            <img src={test1} alt="" />
                        </div>
                        <ul className={styles['profile-links']}>
                            <li>Minki</li>
                            <li>Contact</li>
                            <li>Github</li>
                        </ul>
                    </li>
                    <li className={styles['profile-card']}>
                        <div className={styles['profile-img-container']}>
                            <img src={test2} alt="" />
                        </div>
                        <ul className={styles['profile-links']}>
                            <li>Seungmin</li>
                            <li>Contact</li>
                            <li>Github</li>
                        </ul>
                    </li>
                    <li className={styles['profile-card']}>
                        <div className={styles['profile-img-container']}>
                            <img src={test3} alt="" />
                        </div>
                        <ul className={styles['profile-links']}>
                            <li>Sejun</li>
                            <li>Contact</li>
                            <li>Github</li>
                        </ul>
                    </li>
                </ul>

            </div>

        </ section >
    )
};

export default About;










