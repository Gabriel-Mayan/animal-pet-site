import './style.module.scss';

import api from '../../services/api';
import notify from '../../utils/notify';
import { useStores } from '../../stores';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

export function CreateUser() {
	const { register, handleSubmit } = useForm();
  const { userStore: { setUserData, setToken } } = useStores();

  const history = useHistory();
  async function onSubmit({ fullName, userName, phone, email, address, password, confimPassword }) {
    try {
      const body = {
        fullName, 
        userName, 
        phone, 
        email, 
        address,
        password, 
        confimPassword,
      }
      
      const result = await api.post('/create-user', body);

      if (result.status !== 200) {
        throw 'Falha ao cadastrar usuario';
      }

      const { data: { token, user: userData } } = result;
      setToken(token);
      setUserData(userData);
      
      history.push(`/home`);      
    } catch (error) {
      if (error.request) {
        notify('error', error.request.response);
      }
    }
  }

  return (
    <div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Cadastro</h1>
				<input type="text" placeholder="Nome de Usuario" {...register('userName', { required: true })} /> <br />
				<input type="text" placeholder="Nome Completo" {...register('fullName', { required: true })} /> <br />
				<input type="text" placeholder="Telefone" {...register('phone', { required: true })} /> <br />
				<input type="text" placeholder="Email" {...register('email', { required: true })} /> <br />
				<input type="text" placeholder="Endereço" {...register('address', { required: true })} /> <br />
				<input type="password" placeholder="Senha" {...register('password', { required: true })} /> <br />
				<input type="password" placeholder="Confime a Senha" {...register('confimPassword', { required: true })} /> <br />
				<button type='submit'>Cadastro</button>
        <h5>Já possui uma conta? <Link to='/login'>Faça Login</Link></h5>
			</form>
		</div>
  );
}
