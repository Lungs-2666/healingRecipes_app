    import styles from "./page.module.css";
    import { Noto_Serif_Display } from "next/font/google";
    const noto_serif_display = Noto_Serif_Display({ subsets: ['latin'] });

    import LightRaysBg from "@/components/Background/backgroundComp";
    import GreetingPage from "@/components/GreetingPage/greeting";


    export default function Home() {
        return (
            <div className={styles.page}>
                <div className={styles.background}>
                  <LightRaysBg />
                </div>

                <main className={`${styles.main} ${noto_serif_display.className}`}>
                    <GreetingPage />
                </main>
            </div>
        );
    }
