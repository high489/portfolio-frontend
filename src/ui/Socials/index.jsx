import styles from './socials.module.scss';

const Socials = ({ socialsData }) => {

  return (
    <div className={styles.socials}>
      {socialsData.map(({ id, link, icon }) => {
        let SocialNetworkIcon = icon
        return (
          <a
            key={id}
            href={link}
            target='_blank'
            rel='noreferrer'
            className={styles['social-link']}
          >
            <SocialNetworkIcon />
          </a>
        )
      })}
    </div>
  )
}

export { Socials };