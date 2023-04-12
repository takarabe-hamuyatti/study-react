import {FC} from "react";
import Link from "next/link";

type Props = {}

export const TransitionButton: FC<Props> = () => {
    return (
        <div>
            <Link href="/">

                Index
            </Link>

            <Link href="/about">

                About
            </Link>
        </div>
    )
}