import styles from './masterpieces.module.css'
import { masterpieces } from '@/data/masterpieces'
import Link from 'next/link'

export default function Masterpieces() {
    return (
        <main className={styles.container}>
            <Link href='/' className={styles.back}>
                back
            </Link>
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
                                <p className={styles.comment}>
                                    <i>"{masterpiece.comment}"</i>
                                    <div className={styles.by}>
                                        - {masterpiece.by}
                                    </div>
                                </p>
                            </div>

                        </div>

                    )
                })}
            </section>
        </main >
    )
}