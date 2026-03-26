    import './button.css';

    import { Noto_Serif_Display } from "next/font/google";
    const noto_serif_display = Noto_Serif_Display({ subsets: ['latin'] });
    
    const SearchButton = ( props ) => {
        const { fn } = props;

        return (
            <button 
             className={`${'start_btn'} ${noto_serif_display.className}`}
             onClick={fn}
            >
                Search
            </button>
        )
    }

    export default SearchButton;