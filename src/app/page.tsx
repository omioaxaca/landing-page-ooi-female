import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.leftContainer}>
        <div className={styles.logoBox}>
          <img
            src="/images/ooi_logo_blanco.png"
            alt="Logo Olimpiada Oaxaqueña de Informática Femenil"
          />
        </div>
        <div className={styles.descriptionContainer}>
          <p>RAMA FEMENIL</p>
          <p>ÚNETE A LA OLIMPIADA OAXAQUEÑA DE INFORMÁTICA</p>
        </div>
        <div className={styles.warningMessage}>
          <p>
            ¡Chicas, les damos la bienvenida! Nuestra página está en construcción y estamos trabajando para ofrecerles una nueva experiencia. ¡Estén atentas a las novedades! 💻✨
          </p>
        </div>
      </div>
      
      <div className={styles.imageContainer}>
        <div className={styles.imageBox}>
          <img
            src="/images/ooi-femenil_imagen-girl.png"
            alt="Chica con lentes sonriendo"
            width={100}
            height={100}
          />
        </div>
      </div>
    </main>
  )
}
