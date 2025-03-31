import css from './SearchBar.module.css'
import toast, { Toaster } from 'react-hot-toast';
import {useRef} from 'react';

export default function SearchBar({ onSubmit }) {
    const inp = useRef();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const value = inp.current.value.trim();
        if (value === '') {
            toast.error('Enter a search!');
            return;
        }
        onSubmit(value);
        inp.current.value = '';

    }

    return (
        <header>
            <Toaster/>
        <form className={css.search} onSubmit ={handleSubmit}>
            <input
                className={css.input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                ref={inp}
            />
            <button type="submit">Search</button>
        </form>
    </header>

    )
}