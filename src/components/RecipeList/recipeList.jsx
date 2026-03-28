    import './recipeList.css';
    import { remedies } from '@/data/data';
    
    const RecipeList = () => {
        function selectItem(){
            
        }

        return (
            <form className='recipe_list'>
                <div className='list_scroll'>
                    {remedies.map((item, index) => {
                        return (
                            <div
                            key={item.id}
                            className='list_item'
                            >
                                {item.title}
                            </div>
                        )
                    })}
                </div>
            </form>
        )
    }

    export default RecipeList;
