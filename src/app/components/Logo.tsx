import Image from "next/image";
import styles from "../styles/index.module.scss";

const Logo: React.FC = () => {
    return (
        <header className={styles.logoContainer}>
            <figure>
                <Image className={styles.logo} src="/ap.png" width={250} height={250} alt="logo" />
            </figure>
            <h1 className={styles.title}>INTERNATIONAL FAMILY PROTECTION LLC</h1>
        </header>
    );
};

export default Logo;
