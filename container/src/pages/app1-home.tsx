import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import dynamic from 'next/dynamic'

// @ts-ignore
const HomeApp1 = dynamic(() => import("app1/Home"), { ssr: false, loading: () => <div>Carregando...</div> })

export default function Home() {
    return (
        <div className={styles.container}>
            <HomeApp1 />
        </div>
    )
}
