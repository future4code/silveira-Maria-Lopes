import { useState, useEffect } from 'react';
import './App.css';
import UsuarioList from './cadastro/usuario';
import UsuarioForm from './cadastro/usuario/form';
import UsuarioService from './services/UsuarioService';
import useForm from './hooks/useForm';
import axios from 'axios'

function App() {
  const [editUserPage, setEditUserPage] = useState(false)
  const [restorePage, setRestorePage] = useState(false)
  const [item, setItem] = useState({});
  const [items, setItems] = useState([
    {
      id: 1,
      nome: 'easy.user',
      email: 'easydots@crmesys.com.br'
    },
  ]);

  const [editMode, setEditMode] = useState(true);

  const [paranoid, setParanoid] = useState(true);
  const [notificacao, setNotificacao] = useState({ show: false });

  const init = async paranoid => {

    try {
      setNotificacao({});

      const response = null;

      const list = await UsuarioService.findAll(paranoid)
      setItems(list.data.users)

      if (response.status === 200) {
        handleMessage(response)
      }
    } catch (error) {
      handleError(error.response);
    }
  };

  useEffect(() => {
    init();
  }, []);


  const handleError = async response => {
    if (response?.data?.message) setNotificacao({ show: true, message: response.data.message });
  };

  const handleMessage = async response => {
    if (response && typeof response === 'string') setNotificacao({ show: true, message: response });
  };

  // para cadastrar usuário
  const adicionar = async item => {
    try {
      const response = await UsuarioService.create(item);

      if (response.status === 200) init(paranoid);
      handleMessage(response);
    } catch (error) {
      handleError(error.response);
    }
  };

  // para atualizar um usuário por id
  const atualizar = async item => {
    try {
      setNotificacao({});
      const response = await UsuarioService.updateByID(item, item.id);

      if (response.status === 200) init(paranoid);
      handleMessage(response);

      setEditMode(false);
    } catch (error) {
      handleError(error.response);
    }
  };

  // para remover um usuário por id
  const remover = async id => {
    try {
      setNotificacao({});

      const response = await UsuarioService.deleteByID(id)

      if (response.status === 200) init(paranoid);
      handleMessage(response);

      if (response && response.status === 200) init(paranoid);
      // ------------------------------------
      handleMessage(response);
    } catch (error) {
      handleError(error.response);
    }
  };

  const usuariosDeletados = async paranoid => {

    try {
      setNotificacao({});

      const response = null;

      const list = await UsuarioService.getDeletedUsers()
      setItems(list.data.users)

      if (response.status === 200) {
        handleMessage(response)
      }
    } catch (error) {
      handleError(error.response);
    }
  };


  // para restaurar usuário por id
  const restaurar = async id => {
    try {
      setNotificacao({});

      const response = await UsuarioService.restoreByID(id)

      if (response.status === 200) init(paranoid);
      handleMessage(response);
    } catch (error) {
      handleError(error.response);
    }
  };
  console.log(restorePage)
  const onClickAction = async (action, v) => {
    setNotificacao({});

    if (action === 'ADICIONAR') {
      setItem({});
      setEditMode(false);
      setEditUserPage(false);
    } else if (action === 'MOSTRAR_REMOVIDOS') {
      setParanoid(!paranoid);
      usuariosDeletados()
      setRestorePage(true);
      // init(!paranoid);
    } else if (action === 'OCULTAR_REMOVIDOS') {
      setParanoid(!paranoid);
      init()
      setRestorePage(false)
    } else if (action === 'EDITPAGE') {
      setItem(v);
      setEditMode(false);
      setEditUserPage(true);
    } else if (action === 'EDITAR') {
      setItem(v);
      atualizar(v);
      setEditMode(false);
      setEditUserPage(true);
    } else if (action === 'GRAVAR') {
      adicionar(v)
    } else if (action === 'REMOVER') {
      remover(v.id);
    } else if (action === 'RESTAURAR') {
      restaurar(v.id);
    } else if (action === 'VOLTAR') {
      setEditMode(true);
      setItem({});
    }
  };

  const Notificacao = () => {
    return (
      <div className='d-flex justify-content-end'>
        <div className='toast-container top-0 end-0 p-3'>
          <div
            className={notificacao.show ? 'show toast float-end' : 'toast'}
            role='alert'
            aria-live='assertive'
            aria-atomic='true'
          >
            <div className='toast-header'>
              <strong className='me-auto'>Desafio React/Node</strong>
              <small>2 seconds ago</small>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='toast'
                aria-label='Close'
                onClick={() => setNotificacao({})}
              ></button>
            </div>
            <div className='toast-body'>
              {/* TODO Mostrar a mensagem da API */}
              MENSAGEM DA API AQUI
            </div>
          </div>
        </div>
      </div>
    );
  };

  // se estiver no modo 'editar'
  if (!editMode) {
    return (
      <div className='App m-5 d-flex row'>
        <Notificacao />
        <div className='card col-12'>
          <div className='card-body'>
            <div className='mb-2'>
              <h5 className='card-title'>Usuários</h5>
              <h6 className='card-subtitle mb-2 text-muted'>Cadastro de usuário</h6>
            </div>

            <div className='d-flex justify-content-between align-items-center mb-2'>
              <a
                href='#'
                className='card-link btn btn-warning'
                onClick={() => onClickAction('VOLTAR', {})}
              >
                Voltar
              </a>

              {editUserPage ?
                <a
                  href='#'
                  className='card-link btn btn-success'
                  onClick={() => onClickAction('EDITAR', item)}
                >
                  Editar
                </a>
                :
                <a
                  href='#'
                  className='card-link btn btn-success'
                  onClick={() => onClickAction('GRAVAR', item)}
                >
                  Gravar
                </a>}
            </div>

            <UsuarioForm item={item} setValue={setItem} onClickAction={onClickAction} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='App m-5 d-flex'>
      <Notificacao />
      <div className='card col-12'>
        <div className='card-body'>
          <div className='mb-2'>
            <h5 className='card-title'>Usuários</h5>
            <h6 className='card-subtitle mb-2 text-muted'> Lista de usuários cadastrados </h6>
          </div>

          <div className='d-flex justify-content-between align-items-center mb-2'>
            {paranoid ? (
              <a
                href='#'
                className='card-link btn btn-outline-warning'
                onClick={() => onClickAction('MOSTRAR_REMOVIDOS')}
              >
                Mostrar removidos
              </a>
            ) : (
              <a
                href='#'
                className='card-link btn btn-warning'
                onClick={() => onClickAction('OCULTAR_REMOVIDOS')}
              >
                Ocultar removidos
              </a>
            )}
            <a
              href='#'
              className='card-link btn btn-success'
              onClick={() => onClickAction('ADICIONAR')}
            >
              Adicionar
            </a>
          </div>

          {/* // ------------------------------------ */}
          {/* TODO Adicionar o componente de Lista de usuarios e passar os parametros items e onClickAction */}

          {/* // ------------------------------------ */}

          <UsuarioList
            items={items}
            onClickAction={onClickAction}
            restorePageProps={restorePage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
