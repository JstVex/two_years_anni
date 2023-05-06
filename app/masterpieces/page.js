import styles from './masterpieces.module.css'
import { masterpieces } from '@/data/masterpieces'
import Link from 'next/link'
import { AiOutlineArrowLeft } from "react-icons/ai"

export default function Masterpieces() {
    return (
        <main className={styles.container}>
            <div className={styles.back}>
                <AiOutlineArrowLeft />
                <Link href='/' >
                    back
                </Link>
            </div>

            <section className={styles.wrap}>
                <h2 className={styles.title}>
                    Gallery for masterpieces of <span className={styles.eapm}>Eapm</span>
                </h2>
                <h4 className={styles.subtitle}>
                    aka the most talented individual of all generations! and who is my girl &gt;&lt;
                </h4>
            </section>
            <section className={styles.showcase}>
                {masterpieces.map((masterpiece) => {
                    return (
                        <div key={masterpiece.title} className={styles.masterpiece}>
                            <img src={masterpiece.image} alt="" className={styles.image} />
                            <div className={styles.content}>
                                <div className={styles.date}>
                                    {masterpiece.startDate} - {masterpiece.finishedDate}
                                </div>
                                <div className={styles.art_title}>
                                    {masterpiece.title}
                                </div>
                                <p className={styles.art_subtitle}>
                                    {masterpiece.description}
                                </p>
                                <div className={styles.comment}>
                                    <i>"{masterpiece.comment}"</i>
                                    <div className={styles.by}>
                                        - {masterpiece.by}
                                    </div>
                                </div>
                            </div>

                        </div>

                    )
                })}
            </section>
        </main >
    )
}