import { BiSearch, BiCaretDown, BiCheck } from 'react-icons/bi';
import { useState } from 'react';

const DropDown = ({toggleSort}) => {

    return (
        <>
                {
            toggleSort &&
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
        }
        </>


    )
}


const Search = ({searchTerm, onSearchTermChange}) => {
    const [toggleSort, setToggleSort] = useState(false);


    return (
        <div>
            <div>
                <div>
                    <BiSearch />
                    <label htmlFor='query' />
                </div>
                <input type='text' name='query' id='query' 
                    value= {searchTerm}
                    onChange = {event => {
                        onSearchTermChange(event.target.value)
                    }}
                />
                <div>
                    <div>
                        <button type="button" onClick={() => {setToggleSort(!toggleSort)}}>
                            Sort By <BiCaretDown />
                        </button>
                    
                        <DropDown toggleSort={toggleSort}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;