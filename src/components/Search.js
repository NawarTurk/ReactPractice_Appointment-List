import { BiSearch, BiCaretDown, BiCheck } from 'react-icons/bi';
import { useState } from 'react';

const DropDown = ({toggleSort, onSortByChange, onOrderByChange, sortBy, orderBy}) => {

    return (
        <>
                {
            toggleSort &&
            <div className="relative">
            <div role="menu">
                <div onClick = {() => onSortByChange("petName")} role="menuitem"
                    className ="flex items-center"
                >
                    <span className="mr-2">Pet Name</span>
                    {sortBy === 'petName' && <BiCheck />}
                </div>
                <div onClick = {() => onSortByChange("ownerName")} role='menuitem'
                    className ="flex items-center"
                >
                    Owner Name
                    {sortBy === 'ownerName' && <BiCheck />}
                </div>
                <div onClick = {() => onSortByChange("aptDate")} role='menuitem'
                    className ="flex items-center"
                >
                    Date
                    {sortBy === 'aptDate' && <BiCheck />}
                </div>
                <hr />
                <div onClick= {() => onOrderByChange("asc")} role='menuitem'
                    className ="flex items-center"
                >
                    Asc
                    {orderBy === 'asc' && <BiCheck />}
                </div>
                <div onClick = {() => onOrderByChange("desc")} role='menuitem'
                    className ="flex items-center"
                >
                    Desc
                    {orderBy === 'desc' && <BiCheck />}
                </div>
            </div>
        </div>
        }
        </>


    )
}


const Search = ({searchTerm, onSearchTermChange, onSortByChange, onOrderByChange, sortBy, orderBy}) => {
    const [toggleSort, setToggleSort] = useState(false);


    return (
        <div>
            <div className='flex'>
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
                            <div className='flex'>
                            <span>Sort By  </span>
                            <BiCaretDown />
                            </div>
                            
                        </button>
                    
                        <DropDown 
                            toggleSort={toggleSort} 
                            onSortByChange={onSortByChange}
                            onOrderByChange={onOrderByChange}
                            sortBy={sortBy} 
                            orderBy={orderBy}
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;