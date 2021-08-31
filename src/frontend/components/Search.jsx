import React from 'react';
import { connect } from 'react-redux';
import { getFoundItems } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { getFoundItems } = props;
  const handleInput = (event) => {

    getFoundItems(event.target.value);

  };

  return (

    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>

      <input
        type='text'
        className='search__input'
        placeholder='Buscar...'
        onKeyUp={handleInput}
        name='search'
      />

    </section>

  );
};

const mapDispatchToProps = {
  getFoundItems,
};

export default connect(null, mapDispatchToProps)(Search);
