import styles from "@/styles/Home.module.css";
import Image from "next/image";
import {FC} from "react";

type Props = {
    Comp: React.FC
    array: Array<Number>
    canShow: Boolean
    onClick: () => void
    title: String
}
export const Center: FC<Props> = ({title, array, canShow, Comp,onClick}) => {


    return (
        <div>
            <div className={styles.description}>
                {canShow && <p>{title}ページですよ{array.length}</p>}
                <Comp/>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{' '}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>

            <button onClick={onClick}>こんにちわ</button>

            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>
        </div>
    )
}