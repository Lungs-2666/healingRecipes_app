    import Image from "next/image";
    import styles from "./page.module.css";

    import { Activity } from "lucide-react";
    import GrainientBg from "@/components/Background/backgroundComp";

    export default function Home() {
        return (
            <div className={styles.page}>
                <div className={styles.background}>
                  <GrainientBg />
                </div>

                <main className={styles.main}>
                    <nav className={styles.nav_bar}>
                      <Activity 
                        color="black"
                        size={32}
                      />

                      <div>
                        <a>  </a>
                        <a>  </a>
                      </div>
                    </nav>

                    <h1> Unlock Your Health Secrets </h1>
                    <h4> Natural Remedies Await </h4>

                    <button className={styles.start_btn}>
                      Start
                    </button>
                </main>
            </div>
        );
    }
