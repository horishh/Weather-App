import React from 'react';

/**
 * SearchForm Component
 * 
 * This component renders a form that allows users to search for weather information by entering a city name.
 * 
 * @param {Object} props - Contains properties passed from the parent component.
 * @param {string} city - The current value of the city input field.
 * @param {function} setCity - Function to update the city state in the parent component.
 * @param {function} handleSumbit - Function to handle form submission.
 * 
 * @returns {JSX.Element} A form with an input field and a submit button.
 */
const SearchForm = ({city, setCity, handleSumbit}) => {
  return (
    <form onSubmit={handleSumbit} className='inputField'>
      <input
        className='input'
        type='text'
        placeholder='Search for City'
        value={city}
        onChange={(event) => { setCity(event.target.value) }}
      />

      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchForm;
