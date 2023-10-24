import styles from './page.module.css'
import WelcomeBannerComponent from "./WelcomeBanner/WelcomeBanner.component"

export default function Home() {
  return (
    <main className={styles.main}>
      <WelcomeBannerComponent />
    </main>
  )
}
