    import styles from "@/components/RecipePage/recipePage.module.css";
    import SearchInp from "../SearchInp/searchInp";
    import RecipeList from "../RecipeList/recipeList";

    const RecipePage = () => {
        return (
            <div className={styles.recipe_page}>
                <SearchInp />

                <div className={styles.main_content}>
                    <RecipeList />

                    <div className={styles.recipe_card_box}>

                    </div>
                </div>
            </div>
        )
    }

    export default RecipePage;