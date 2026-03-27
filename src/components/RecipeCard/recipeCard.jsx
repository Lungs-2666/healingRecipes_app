    import './recipeCard.css';

    const RecipeCard = ( props ) => {
        const { id, title, desc, recipe, ingr } = props;
        
        return (
            <div className='recipe_card'>
                <h4 className='card_title'> {title} </h4>
                <p className='card_desc'> {desc} </p>

                <p className='card_recipe'> {recipe} </p>

                Ingridients:
                <br />
                <p className='card_ingr'> {
                    ingr.forEach((value, index) => {
                        return (
                            <div> {value[index]} </div>
                        )
                    })
                } </p>
            </div>
        )
    }

    export default RecipeCard;
 