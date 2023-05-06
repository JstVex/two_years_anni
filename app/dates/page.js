import styles from './dates.module.css'
import Link from 'next/link'
import { AiOutlineArrowLeft } from "react-icons/ai"

export default function Dates() {
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
                    We have created so many beautiful memories tgt within these <span className={styles.color}>two most priceless years ^^</span>
                </h2>
                <h4 className={styles.subtitle}>
                    Thank u so much for giving me the chance to experience all of these beautiful n precious moments together with u my precious eapm lyy &gt;&lt;. Now lets revisit some of our beautiful moments back tgt :3
                </h4>
            </section>
            <section className={styles.memories}>
                <div className={styles.memory}>
                    <div className={styles.images}>
                        <img src="https://dsm01pap007files.storage.live.com/y4m5HuXho4yvVoN-g9JmrJlHlE4HIVzK-XCChP2tVvzrMwL8PRqT8lmA3q_RPDUJ3LtJqUWaow_CgK-3ks9IwtV9eCkoEgzOzQWgUQH5wwW6gVf9ZGGZjwHEayqXZpJ_bhTmJtCiXfA0GGgs448TsLhsYEUHFuTuoDUpZQunTDoejl3j6piMXZXENXt8rZToeuY?width=610&height=1076&cropmode=none" alt="" className={styles.image1} />
                        <img src="https://dsm01pap007files.storage.live.com/y4m7JZm0aT6xt_NDLfdfbk09hCxP-y8pp3uvJIyrH3mJdZnbOai9HUMlXNByIn7CV73dMKrawJBMytl12gRT_yplMCoxxBc3dWcaaQG_gNrEEdqYdEQOqo17DIVCdvLv5PpGhhyHrEsHQ7OTbi-0tIlDrBmv1kHWs7eCOBk9_aXRu5J8_REWuULIUXPktAUdTRi?width=960&height=1280&cropmode=none" alt="" className={styles.image2} />
                        <img src="https://dsm01pap007files.storage.live.com/y4mgkmlT2RvqKtusk-TS-UyvkBEO21UXVvUgjdESeuLLrAeFKguXGINotEGUtIw0Y69CLTmS8dGDMSjsVBzGPK5weYmbIbb-z63QLwLwEj5u034EGChzyL-uQR8R5gXbUPjIN7DWoJrq1l2iTqWQOkZwnJH7Rn26Gq9eaoGd5dBoZwumTtQh_TLdvrgquQA233F?width=720&height=962&cropmode=none" alt="" className={styles.image3} />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.content_title}>
                            Dates with you &gt;&lt;
                        </div>
                        <p className={styles.para}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates autem facilis possimus id accusantium qui dolore, rerum quisquam itaque assumenda, officiis amet consequatur excepturi. Maiores aperiam minus necessitatibus eos iure.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus ea ipsa illum inventore magni impedit distinctio quas quisquam? Sequi suscipit vel perspiciatis unde cumque eum officiis ducimus dolores totam.
                        </p>
                    </div>
                </div>
                <div className={styles.memory2}>
                    <div className={styles.content2}>
                        <div className={styles.content_title2}>
                            Dates with you &gt;&lt;
                        </div>
                        <p className={styles.para2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates autem facilis possimus id accusantium qui dolore, rerum quisquam itaque assumenda, officiis amet consequatur excepturi. Maiores aperiam minus necessitatibus eos iure.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus ea ipsa illum inventore magni impedit distinctio quas quisquam? Sequi suscipit vel perspiciatis unde cumque eum officiis ducimus dolores totam.
                        </p>
                    </div>
                    <div className={styles.images2}>
                        <img src="https://dsm01pap007files.storage.live.com/y4m5HuXho4yvVoN-g9JmrJlHlE4HIVzK-XCChP2tVvzrMwL8PRqT8lmA3q_RPDUJ3LtJqUWaow_CgK-3ks9IwtV9eCkoEgzOzQWgUQH5wwW6gVf9ZGGZjwHEayqXZpJ_bhTmJtCiXfA0GGgs448TsLhsYEUHFuTuoDUpZQunTDoejl3j6piMXZXENXt8rZToeuY?width=610&height=1076&cropmode=none" alt="" className={styles.image4} />
                        <img src="https://dsm01pap007files.storage.live.com/y4m7JZm0aT6xt_NDLfdfbk09hCxP-y8pp3uvJIyrH3mJdZnbOai9HUMlXNByIn7CV73dMKrawJBMytl12gRT_yplMCoxxBc3dWcaaQG_gNrEEdqYdEQOqo17DIVCdvLv5PpGhhyHrEsHQ7OTbi-0tIlDrBmv1kHWs7eCOBk9_aXRu5J8_REWuULIUXPktAUdTRi?width=960&height=1280&cropmode=none" alt="" className={styles.image5} />
                        <img src="https://dsm01pap007files.storage.live.com/y4mgkmlT2RvqKtusk-TS-UyvkBEO21UXVvUgjdESeuLLrAeFKguXGINotEGUtIw0Y69CLTmS8dGDMSjsVBzGPK5weYmbIbb-z63QLwLwEj5u034EGChzyL-uQR8R5gXbUPjIN7DWoJrq1l2iTqWQOkZwnJH7Rn26Gq9eaoGd5dBoZwumTtQh_TLdvrgquQA233F?width=720&height=962&cropmode=none" alt="" className={styles.image6} />
                    </div>
                </div>
            </section>
        </main>
    )
}