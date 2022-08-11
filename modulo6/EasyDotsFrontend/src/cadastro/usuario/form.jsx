import React from 'react';

import { Text } from '@components/Text';

export default function UsuarioForm({ item, setValue }) {
  console.log('UsuarioForm', item);
  return (
    <div>
      <div className='mb-3 row'>
     
        <Text
          id='name'
          label='Name'
          name='Name'
          autoComplete='Name'
          value={item.name}
          onChange={v => {
            let valor = v.target?.value;
            setValue({ ...item, name: valor });
          }}
        />

        <Text
          id='email'
          label='E-mail'
          name='email'
          autoComplete='email'
          value={item.email}
          onChange={v => {
            let valor = v.target?.value;
            setValue({ ...item, email: valor });
          }}
        />
        <Text
          required
          id='password'
          name='password'
          label='Password'
          type='password'
          value={item.password}
          autoComplete='current-password'
          onChange={v => {
            let valor = v.target?.value;
            setValue({ ...item, password: valor });
          }}
        />
      </div>
    </div>
  );
}
