// import { ScrollContainer, ScrollPage, Animator, batch, Sticky, Fade, MoveOut } from 'react-scroll-motion';
import { useEffect, useState, useRef } from 'react';
import styles from './About.module.css';
import test1 from '../images/minki.jpeg';
import test2 from '../images/seungmin.jpeg';
import test3 from '../images/sejun.jpeg';
import { useCallback } from 'react';

// import mainBg from '../images/main.png';



const About = () => {
    const mainContent = useRef();
    const sticky = useRef();
    const children = useRef([]);

    const animate = useCallback((start, end, contentVh, length) => {
        children.current.forEach((item, i) => {
            const unit = (end - start) / length;
            // console.log(unit);
            const s = start + unit * i + 100;
            const e = start + unit * (i + 1);
            if (window.scrollY <= s) {
                item.style.transform = `translate3d(0, 0, 0)`;
            } else if (window.scrollY >= e) {
                item.style.transform = `translate3d(0, ${-contentVh}%, 0)`;
            } else {
                item.style.transform = `translate3d(0, ${(window.scrollY - s) / (unit - 100) * (-contentVh)
                    }%, 0)`
            }
        })
    }, []);

    useEffect(() => {
        console.log('refreshed');
        const length = children.current.length;
        const headerVh = 6;
        const contentVh = 90 - headerVh * length;


        const scrollStart = mainContent.current.offsetTop + 100;
        const scrollEnd = mainContent.current.offsetTop + mainContent.current.offsetHeight - window.innerHeight - 100;

        console.log(window.innerHeight);
        // console.log(scrollEnd);

        console.log(children.current)
        children.current.forEach((item, i) => {
            item.style.bottom = -(90 - headerVh * (length - i)) + 'vh';
            item.children[0].style.height = headerVh + 'vh';
            item.children[1].style.height = contentVh + 'vh';
        });


        window.addEventListener('scroll', () => {
            animate(scrollStart, scrollEnd, contentVh, length);
        })

        return () => {
            window.removeEventListener('scroll', () => {
                animate(scrollStart, scrollEnd, contentVh, length);
            })
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
                    <p>"코불소는 토론토 한인들의 불편함 점들을 코딩으로 해결해드리는 웹사이트입니다."</p>
                </div>
            </div>

            {/* need to fix <br/> part  */}
            <div ref={mainContent} className={` ${styles['story-container']}`}>
                <div ref={sticky} className={styles['sticky']}>
                    <div ref={addToRefs} className={` ${styles['row-container']}`}>
                        <div className={styles.header}>#1</div>
                        <div className={styles.contents}>
                            <div className={styles['story-divider']}>
                                <h2>코불소가 만들어진 배경</h2>
                                <p >코불소는 하나의 생각에서 출발했어요 👀</p>
                                <div className={styles['highlighted']}>
                                    <p>왜 토론토에 사는 한인들은 <br /> 불편함을 감수하고 살아야 할까?</p>
                                </div>
                                <p>예를 들면...🙋🏻‍♂️</p>
                                <p className={styles['semi-bold']}>토론토 공립 도서관에 5천여권의 한국어 책이 있지만 <br />제목이 읽기 힘든 영어식으로 표기돼 있어서 <br /> 책을 빌릴 수가 없었습니다.</p>
                            </div>
                            <div className={`${styles['person-img']}`}></div>
                        </div>
                    </div>

                    <div ref={addToRefs} className={` ${styles['row-container']}`}>
                        <div className={styles.header}>#2</div>
                        <div className={styles.contents}>
                            <div className={styles['story-divider']}>
                                <p>🦏 코불소 팀은 이렇게 생각했어요!</p>
                                <div className={styles['highlighted']}>
                                    <p> 컴퓨터 프로그래밍으로 <br /> 해결할 수 있지 않을까?</p>
                                </div>
                                <p className={styles['semi-bold']}>그렇게 코불소팀의 첫번째 작품인 <br /> 토론토 공립 도서관 책 검색 프로그램이 <br /> 만들어졌습니다~!! 🎉
                                </p>
                            </div>
                            <div className={`${styles['person-img-2']}`}></div>
                        </div>
                    </div>

                    <div ref={addToRefs} className={` ${styles['row-container']}`}>
                        <div className={styles.header}>#3</div>
                        <div className={styles.contents}>
                            <div className={styles['story-divider']}>
                                <p>
                                    코불소팀이 또 어떤 프로그램을 개발하면 좋을까요?
                                </p>
                                <div className={styles['highlighted']}>
                                    <p className={styles['semi-bold']}>
                                        저희는 앞으로 <br />
                                        여러분들의 건의사항을 통해<br />
                                        또 다른 유용한 프로그램을 <br />
                                        만들어 갈 예정이에요😊
                                    </p>
                                </div>

                                <p className={styles['semi-bold']}>토론토에 살면서 불편했던 점이나<br />
                                    꼭 있었으면 하는 프로그램이 있다면<br />
                                    아래 건의사항에 등록해주세요🕵🏻‍♂️
                                </p>
                            </div>
                            <div className={`${styles['person-img-3']}`}></div>
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
                            <li><p>Seungmin</p></li>
                            <li>Contact</li>
                            <li>Github</li>
                        </ul>
                    </li>
                    <li className={styles['profile-card']}>
                        <div className={styles['profile-img-container']}>
                            <img src={test3} alt="" />
                        </div>
                        <ul className={styles['profile-links']}>
                            <li><p>Sejun</p></li>
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










