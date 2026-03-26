    import styles from '@/components/GreetingPage/greeting.module.css';
    import { Activity } from 'lucide-react';

    import SearchButton from '../SearchButton/button';

    const GreetingPage = () => {
        return (
            <div className={styles.greeting_page}>
                <nav className={styles.nav_bar}>
                    <div className={styles.nav_logo}>
                        <Activity 
                            color="white"
                            size={24}
                        />
                            
                        <p> Remedy Vault </p>
                    </div>

                    <div className={styles.nav_links}>
                        <a href=""> Search   </a>
                        <a href=""> Contacts </a>
                    </div>
                </nav>

                <div className={styles.main_content}>
                    <h1> Unlock Your Health Secrets </h1>
                    <h4> Natural Remedies Await </h4>

                    <SearchButton />
                </div>
            </div>
        )
    }

    export default GreetingPage;