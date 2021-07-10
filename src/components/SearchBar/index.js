//styles
import { Wrapper, Content } from "./SearchBar.styles";

//useState to create controlled component, useEffect to trigger when local state changes and update search term to fetch from API, useRef can be used if useEffect not used in initial render
import { useEffect, useRef, useState } from "react";

//image
import searchIcon from '../../images/search-icon.svg';

const SearchBar = ({ setSearchTerm }) => {

    const [state, setState] = useState('');
    const initial = useRef(true); //avoid useEffect from triggering when mounted, only trigger when user input something


    useEffect(() => {

        if(initial.current){
            initial.current = false; //to allow logic below to run
            return;
        }

        const timer = setTimeout(() => { //set delay when search happens
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer); //reset timeout timer
    },[setSearchTerm, state])

    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input 
                    type="text"
                    placeholder='Search Movie'
                    onChange={e => setState(e.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;