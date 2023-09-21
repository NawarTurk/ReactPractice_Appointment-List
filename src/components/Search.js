import { BiSearch, BiCaretDown } from 'react-icons/bi';

const Search = () => {
    return (
        <div>
            <div>
                <div>
                    <BiSearch />
                    <label htmlFor='query' />
                </div>
                <input type='text' name='query' id='query' value='' />
                <div>
                    <div>
                        <button type="button">
                            Sort By <BiCaretDown />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;