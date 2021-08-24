import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { GetServerSideProps } from 'next'

interface HomeProps {
    name: string;
}

export default function Home({ name }: HomeProps) {
  return (
    <div className={styles.container}>
        oi
        {name}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
    return {
        props: {
            name: 'Fritz'
        }
    }
}
