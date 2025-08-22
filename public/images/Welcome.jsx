import React from 'react';
import styles from './Welcome.module.scss';

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
        <img src="/assets/Supermarche-Rayon.jpg" alt="Supermarché Background" className={styles.backgroundImage} />
        <div className={styles.overlay}>
          <div className={styles.logo}>📋 SuperMarché RH</div>
          <h1>Système de Gestion des Ressources Humaines</h1>
          <p>Simplifiez la gestion de vos équipes avec notre plateforme dédiée aux employés de supermarché.</p>
          <div className={styles.features}>
            <div className={styles.feature}><span>👥</span> Gestion d'équipe</div>
            <div className={styles.feature}><span>⏰</span> Planification horaires</div>
            <div className={styles.feature}><span>🔒</span> Données sécurisées</div>
            <div className={styles.feature}><span>🏬</span> Multi-magasins</div>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.loginBox}>
          <h2>Accès Employé</h2>
          <p>Connectez-vous ou créez votre compte</p>
          <div className={styles.loginOptions}>
            <button className={styles.loginBtn}>Connexion</button>
            <button className={styles.registerBtn}>Inscription</button>
          </div>
          <form>
            <label>Email professionnel</label>
            <input type="email" placeholder="prenom.nom@supermarche.com" />
            <label>Mot de passe</label>
            <input type="password" placeholder="Mot de passe" />
            <button type="submit" className={styles.submitBtn}>Se connecter</button>
            <a href="#" className={styles.forgotPwd}>Mot de passe oublié ?</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;