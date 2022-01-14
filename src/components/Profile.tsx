import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/fe99f626-6bea-4187-9cc1-36efe7f073e3-profile_image-300x300.png" alt="DynhoROLF" />
            <link rel="shortcut icon" href="onlyFaceAvatar.png" type="image/png"/>
            <div>
                <strong>DynhoROLF</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}