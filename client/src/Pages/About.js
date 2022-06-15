import styles from './About.module.css';
// import mainBg from '../images/main.png';

const About = () => {
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
            <div className={`wrapper ${styles['story-container']}`}>
                <div className={styles['story-divider']}>
                    <h2>코불소가 만들어진 배경</h2>
                    <p>코불소는 하나의 생각에서 출발했어요👀</p>
                    <p className={styles['highlighted']}>왜 토론토에 사는 한인들은 불편함을 감수하고 살아야할까?</p>
                    <p>예를 들면...🙋🏻‍♂️</p>
                    <p>토론토 공립 도서관에 5천여권의 한국어 책이 있지만
                        제목이 읽기 힘든 영어식으로 표기돼 있어서
                        책을 빌릴 수가 없었습니다.</p>

                    <p>코불소 팀은 이렇게 생각했어요🦏</p>
                    <p className={styles['highlighted']}> 이런 문제라면 컴퓨터 프로그래밍을 통해서 해결할 수 있지 않을까?</p>
                    <p>
                        그렇게 코불소팀의 첫번째 작품인
                        토론토 공립 도서관 책 검색 프로그램이
                        만들어졌습니다~!! 🎉
                    </p>
                </div>
                <div className={`${styles['person-img']} ${styles['grid-row']}`}></div>
            </div>
            <div className={`wrapper ${styles['profile-container']}`}>
                <ul className={styles['profiles']}>
                    <li className={styles['profile-card']}>
                        <div className={styles['profile-img']}>
                        </div>
                        <ul className={styles['profile-links']}>
                            <li>Name:?????????</li>
                            <li>Contact:????@????.???</li>
                            <li>Github:???????????????</li>
                        </ul>
                    </li>
                    <li className={styles['profile-card']}>
                        <div className={styles['profile-img']}>

                        </div>
                        <ul className={styles['profile-links']}>
                            <li>Name:?????????</li>
                            <li>Contact:????@????.???</li>
                            <li>Github:???????????????</li>
                        </ul>
                    </li>
                    <li className={styles['profile-card']}>
                        <div className={styles['profile-img']}>
                        </div>
                        <ul className={styles['profile-links']}>
                            <li>Name:?????????</li>
                            <li>Contact:????@????.???</li>
                            <li>Github:???????????????</li>
                        </ul>
                    </li>
                </ul>
                <div className={styles['contents']}>
                    <p>코불소 팀은 </p>
                    <p>
                        토론토 한인분들의
                        불편한 점들을 수집해서
                        가장 시급한 것들부터 차근차근
                        해결해나갈 예정이에요😊
                    </p>

                    <p>
                        저희 팀이
                        어떤 프로그램을 개발하면 좋을지
                        아래 건의 사항에 올려주세요~
                    </p>

                    <p>
                        다른 분들이 건의한 내용도 확인할 수 있으니
                        꼭 필요한 프로그램이라고 생각하는 게시물을
                        추천해주세요
                    </p>

                    <p>
                        추천수가 가장 높은 게시물부터
                        저희 코불소 팀이 차근차근 해결해나갈게요🕵🏻‍♂️
                    </p>
                </div>
            </div>
        </section >
    )
};

export default About;