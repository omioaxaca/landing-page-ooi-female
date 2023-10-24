import React from 'react';
import styles from './WelcomeBanner.module.css';

const WelcomeBannerComponent = () => {
	return (
		<div className={styles.welcomeContainer}>
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
						Estamos a punto de iniciar este increíble viaje contigo, mantente atenta a nuestra página porque pronto terminaremos los últimos detalles para que disfrutes de todo lo que hemos preparado para ti.
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
		</div>
	);
}

export default WelcomeBannerComponent;