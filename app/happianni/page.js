import styles from './happianni.module.css'
import Image from 'next/image'
import { AiFillHeart, AiOutlineArrowLeft } from "react-icons/ai"
import Link from 'next/link'

export default function HappiAnni() {
    return (
        <main className={styles.container}>
            <div className={styles.back}>
                <AiOutlineArrowLeft />
                <Link href='/' >
                    back
                </Link>
            </div>
            <section className={styles.wrapper}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Happi happi two years anniversary to my most precious eapm lyyyyyyy &gt;&lt;
                    </h2>
                    <div className={styles.para}>
                        Happy 2 years anniversary my chit sone boo boo eu eu pu puu a thl tone eu soat kalay ngl lyy april lyy yyyyyyyyyyyyyy :333333. Omg so can't believe its already 2 years we dated back babeeee &gt;&lt;. Thank u for everything u hv done for me within this 2 most beautiful and special years of my life. These two years have been the best I could ever have in my life due to my precious eapm lyy and I got to create so many priceless memories together with u my chit sone lyyyy n I can't wait to continue making so much more with u for the rest of my life my boo boooooooo  &gt;&lt;
                    </div>
                    <div className={styles.para}>
                        Again I want to thank u so much for everything my boo boo. Thank u so much for ~
                        <ul className={styles.list}>
                            <li className={styles.list_item}>

                                <AiFillHeart className={styles.heart} />
                                <i>always loving me so much more than anyone else can ^^</i>
                            </li>
                            <li className={styles.list_item}>
                                <AiFillHeart className={styles.heart} />
                                <i>always being the best ever &gt;&lt; </i>
                            </li>
                            <li className={styles.list_item}>
                                <AiFillHeart className={styles.heart} />
                                <i>always making me feel so happy n lucky n special &lt;3</i>
                            </li>
                            <li className={styles.list_item}>
                                <AiFillHeart className={styles.heart} />
                                <i>never getting tired or bored of me ^^</i>
                            </li>
                            <li className={styles.list_item}>
                                <AiFillHeart className={styles.heart} />
                                <i>for just existing and being the most eapmiest individual lyy ever &gt;&lt;</i>
                            </li>
                        </ul>
                        I'm really the most luckiest ever to be urs and to be loved by u so much my precious eapm lyy. I promise i will fix everything u don't like about me and i promise i will become the best for u and always keep u happy and special and safe my precious eapm lyy ^^
                    </div>
                    <div className={styles.para}>
                        I love u so so much my precious eapm lyy. I really really love u so so soooooooooo muchhhh. I love u more than anything and everyone in this entire universe. I love u with all of my heart. I love u with my whole life. I can't live without u. My life would be meaningless if ure not with me. Ure all of my reasons and purposes. Ure all of my dreams and goals. Thank u for giving all of those to me and we are gonna make all of them come true aren't we babe &gt;&lt;
                    </div>
                    <div className={styles.para}>
                        I wish u hv such a great and fun day with me my boo boo :33 so can't wait to meet uuuuu ^^. uk i wish i can be beside u all the time. but we r gonna be able to when we get to amerikha babeee omg so can't waittttt &gt;&lt;. Again <span className={styles.anni}>happy 2 years anniversary my precious eapm lyy yyyyy :333</span>
                    </div>
                </div>
                <div className={styles.images}>
                    <Image src='https://dsm01pap007files.storage.live.com/y4mqgHjcE7vs7UNVo0CkSPZg2daaphqmHcR9YtdjTo8utrxyuvLkw3pwF4K96YGiacNNe7oGE0G_yhAUt2LwT-9JoUNNfOGc8wKLpkfnz46xR2PhK3_W2bjJoqX_oKkxBidnfYs0asCNrGFlCLbpQARCptAI-fZq9x6KjCJoB_tSHjhD0403Ji2g61eouoNUYgy?width=512&height=495&cropmode=none' className={styles.image} width={1000} height={400} alt='peachu gomu ^^' />

                    <Image src='https://dsm01pap007files.storage.live.com/y4mRosOTLFeAqlgtTf-LGtV-jSv43DvctttjRfXADMCFe78ynUhUn5kIdsX3fPvWOfTfZYaSwsd1LXvHWvThkQ8S_BqgWV6iXTMk4H1XUfW9F_9-ELvVJu6ZhUoNhR-EoVFXJJKbHQ-8Bzb74JjcO459aw-N6u5dRgR6K8q9FICXgVnMxdRYOysNd6fDr4zO5wi?width=240&height=240&cropmode=none' className={styles.image} width={1000} height={400} alt='happi bunni ^^' />

                    <Image src='https://dsm01pap007files.storage.live.com/y4mjV6t7lTcLw3fVXZ8f6cY1IYeXnGLqtt_Gg1P2-lrQwQMaHVfElNjLKA1TVmJvXtc_mvQT3GRRjCaBS8SocBeRZJxI0FKWTRNiJy1qZangKOG_x-4Dul0uePx2xw_V5_VNT1EozExep3SXS8bu_ZkTkBgWtwEcxbjcSYjftOB1me92jXU1gRipJZmrHp9jFHX?width=370&height=320&cropmode=none' className={styles.image} width={1000} height={400} alt='chibi couple ^^' />
                </div>


            </section>

        </main>
    )
}