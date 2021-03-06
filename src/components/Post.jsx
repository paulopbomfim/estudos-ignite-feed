import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/paulopbomfim.png"
          />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio ร s 08:13" dateTime="2022-05-11 08:13:30">Publicado hรก 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa ๐</p>
        <p>Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐</p>
        <p>๐ <a href='#'>paulo.design/doctorcare</a></p>
        <p><a href='#'>#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  );
}