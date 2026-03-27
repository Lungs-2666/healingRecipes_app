    'use client'
    
    import styles from "./page.module.css";
    import { useState } from "react";

    import { Noto_Serif_Display } from "next/font/google";
    const noto_serif_display = Noto_Serif_Display({ subsets: ['latin'] });

    import LightRaysBg from "@/components/Background/backgroundComp";
    import GreetingPage from "@/components/GreetingPage/greeting";
    import RecipePage from "@/components/RecipePage/recipePage";


    export default function Home() {
        const [ currentPage, setCurrentPage ] = useState('greeting');

        return (
            <div className={styles.page}>
                <div className={styles.background}>
                  <LightRaysBg />
                </div>

                <main className={`${styles.main} ${noto_serif_display.className}`}>
                    {currentPage === 'greeting' && (
                        <GreetingPage onStart={() => {setCurrentPage('recipes')}}/>
                    )}

                    {currentPage === 'recipes' && (
                      <RecipePage />
                    )}
                </main>
            </div>
        );
    }
