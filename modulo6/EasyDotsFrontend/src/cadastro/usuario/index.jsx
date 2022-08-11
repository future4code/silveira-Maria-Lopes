import React from 'react';

import { MdDelete, MdEdit, MdRestore } from 'react-icons/md';

const UsuarioItem = ({ onClickAction, item, restorePageProps }) => (

  <li className='list-group-item'>
    <div key={item.id} className=' d-flex justify-content-between'>
      <div>{item.id}</div>
      <div>{item.name}</div>
      <div>{item.email}</div>
      { console.log(restorePageProps)}
      <div className=' d-flex justify-content-between'>
        <div role='button'>
          <MdEdit size={24} color='#424242' onClick={() => onClickAction('EDITPAGE', item)} />
        </div>
        {/* {item.deletedAt === null ? ( */}
        <div role='button'>
          <MdDelete
            size={24}
            color='#EF5350'
            onClick={() => {
              console.log(item);
              onClickAction('REMOVER', { ...item });
            }}
          />
        </div>
        {/* ) : ( */}
        {restorePageProps ? <div role='button'>
          <MdRestore
            size={24}
            color='#EF5350'
            onClick={() => {
              console.log(item);
              onClickAction('RESTAURAR', { ...item });
            }}
          />
        </div>
          :
          <div> </div>
        }

      </div>
    </div>
  </li>
  )


export default function UsuarioList({ items = [], onClickAction, restorePageProps }) {
  return (
    <div>
      <div className='card'>
        <ul className='list-group list-group-flush'>
          {items.map(item => (
            <UsuarioItem key={item.id} onClickAction={onClickAction} item={item} restorePageProps={restorePageProps}></UsuarioItem>
          ))}
        </ul>
      </div>
    </div>
  );
}
