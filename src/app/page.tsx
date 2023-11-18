import styles from './page.module.css'
import WelcomeBannerComponent from "./WelcomeBanner/WelcomeBanner.component"

export default function Home() {
  return (
    <main className={styles.main}>
      <WelcomeBannerComponent />
      <iframe
          width="100%"
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=wPKBgTgnB0iSOv3jtFLHFZ6seHNzg6pOi2aeKwqdEG9UNDRIUUJEOE0wREVOVFFXMEdQV1RVVUhRMy4u&embed=true"
          frameBorder="0"
          style={{ minHeight: '100vh' }}
      />
    </main>
  )
}
