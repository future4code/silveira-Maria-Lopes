import axios from 'axios';

// const USUARIO_API_BASE_URL = 'http://localhost:9999/v1/usuarios';
const USUARIO_API_BASE_URL = 'http://localhost:3003';
const CRIAR_USUARIO_BASE_URL = 'http://localhost:3003/user'

function UsuarioService() {
  const findAll = async users => {

    try {
      const res = await axios.get(`${USUARIO_API_BASE_URL}/getallusers`)
      return res
    } catch (error) {
      console.log(error)
    }
  };


  const create = async user => {
    const body = user

    return axios.post(`${CRIAR_USUARIO_BASE_URL}`, body)
      .then((res) => {
        console.log(res)
        alert('Usuário cadastrado com sucesso!')
      })
      .catch((error) => {
        console.log(error)
      })
  }


  const getById = id => {
    return axios.get(`${USUARIO_API_BASE_URL}/getuserbyid/${id}`)
  };

  const getDeletedUsers = () => {
    return axios.get(`${USUARIO_API_BASE_URL}/getalldeletedusers`)
  }

  const updateByID = async (form, id) => {
    console.log(id, 'testando o update')
    const body = form

    return axios.put(`${USUARIO_API_BASE_URL}/updateuser/${id}`, body)
      .then((res) => {
        console.log(res)
        alert('Usuário editado com sucesso!')
      })
      .catch((error) => {
        console.log(error)
        alert('Erro ao editar usuário!')
      })
  };


  const deleteByID = async id => {
    console.log(id)
    return axios.delete(`${USUARIO_API_BASE_URL}/deleteuserbyid/${id}`)
      .then((res) => {
        console.log(res)
        alert('Usuário deletado com sucesso!')
      })
      .catch((error) => {
        console.log(error)
        alert('Erro ao deletar usuário!')
      })
  };


  const restoreByID = async id => {
    return axios.patch(`${USUARIO_API_BASE_URL}/restoreuser/${id}`)
    .then((res) => {
      console.log(res)
      alert('Usuário restaurado com sucesso!')
    })
    .catch((error) => {
      console.log(error)
      alert('Erro ao restaurar usuário!')
    })
  };

  return {
    findAll,
    create,
    getById,
    getDeletedUsers,
    updateByID,
    deleteByID,
    restoreByID
    // TODO retornar as funçoes para permitir o uso
  };
}

export default UsuarioService();
