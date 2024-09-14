import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Title,
  Form,
  Label,
  Select,
  Input,
} from './styles'
import TopBackground from '../../components/TopBackgorund'
import api from '../../services/api'

const Home = () => {
  const inputName = useRef(null)
  const inputJob = useRef(null)
  const selectRef = useRef(null)
  const inputEmail = useRef(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const registerNewUser = async (e) => {
    e.preventDefault()
    const userData = {
      name: inputName.current.value,
      job: inputJob.current.value,
      gender: selectRef.current.value === 'male' ? 'Masculino' : 'Feminino',
      email: inputEmail.current.value,
    }
    try {
      setLoading(true)
      const data = await api.post('/users', userData)
      if (data.status === 201) {
        alert(`Usuário ${userData.name}, criado com sucesso!`)
        navigate('/lista-de-usuarios')
      } else if (data.status === 409) {
        alert(`Este email já existe!`)
      }
    } catch {
      alert('Ops, Algo de errado não está certo! 🤔')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <TopBackground />
      <Title>Cadastrar usuário</Title>
      <Form onSubmit={registerNewUser}>
        <Label>
          Nome <span>*</span>
          <Input
            type='text'
            placeholder='Digite seu nome'
            ref={inputName}
            required
          />
        </Label>
        <div>
          <Label>
            Profissão <span>*</span>
            <Input
              type='text'
              placeholder='Digite sua profissão'
              ref={inputJob}
              required
            />
          </Label>
          <Label>
            Sexo <span>*</span>
            <Select name="gender" id="gender" ref={selectRef} defaultValue={"male"}>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
            </Select>
          </Label>
        </div>
        <Label>
          E-mail <span>*</span>
          <Input
            type='email'
            placeholder='Digite seu email'
            ref={inputEmail}
            required
          />
        </Label>
        <Input type='submit' value={loading ? 'Cadastrando...' : 'Cadastrar'} />
      </Form>
    </Container>
  )
}

export default Home
