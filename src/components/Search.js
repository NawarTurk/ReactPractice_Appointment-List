import { BiSearch, BiCaretDown, BiCheck } from 'react-icons/bi';

const DropDown = () => {
    return (
        <div>
            <div role="menu">
                <div role="menuitem">
                    Pet Name 
                    <BiCheck />
                </div>
                <div role='menuitem'>
                    Owner Name
                    <BiCheck />
                </div>
                <div role='menuitem'>
                    Date
                    <BiCheck />
                </div>
                <div role='menuitem'>
                    Asc
                    <BiCheck />
                </div>
                <div role='menuitem'>
                    Desc
                    <BiCheck />
                </div>
            </div>
        </div>
    )
}


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
                        <DropDown />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;