    import './searchInp.css';
    import { Search } from 'lucide-react';
    import { Noto_Serif_Display } from 'next/font/google';

    const notoSerifDisplay = Noto_Serif_Display({ 
      subsets: ['latin'] 
    });
    

    const SearchInp = ( props ) => {
        const { fn } = props;
        
        return (
            <search className='search_box'>
                <input type="search" className={`search_inp ${notoSerifDisplay.className}`} placeholder='Search'/>
                <button onClick={fn} className='search_btn'>
                    <Search 
                     size={24}
                    />
                </button>
            </search>
        )
    }

    export default SearchInp;