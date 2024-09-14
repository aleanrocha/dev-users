import { useEffect, useState } from 'react'
import {
  Container,
  ContainerUser,
  Title,
  ImageUser,
  DeleteUser,
  CardUser,
  InfoUser,
} from './styles'
import TopBackground from '../../components/TopBackgorund'
import api from '../../services/api'

const Users = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const ImageUserUrl = 'https://avatar.iran.liara.run/public/'

  useEffect(() => {
    const getAllUsers = async () => {
      setLoading(true)
      try {
        const { data } = await api.get('/users')
        setUsers(data)
      } catch {
        alert('Ops, houve um erro inesperado!')
      } finally {
        setLoading(false)
      }
    }
    getAllUsers()
  }, [])

  const deleteUser = async (name, id) => {
    try {
      const data = await api.delete(`/users/${id}`)
      const updatedUsers = users.filter((user) => user.id !== id)
      setUsers(updatedUsers)
      if (data.status === 200) {
        alert(`Usuário ${name}, deletado com sucesso!`)
      }
    } catch {
      alert('Ops, houve um erro inseperado!')
    }
  }

  return (
    <Container>
      <TopBackground />
      <Title>Usuários cadastrados</Title>
      {loading && <p>Carregando...</p>}
      {!loading && users.length === 0 ? (
        <p>Nenhum usuário encontrado ):</p>
      ) : (
        <ContainerUser>
          {users.map((user) => (
            <CardUser key={user.id}>
              <div>
                <ImageUser
                  src={
                    user.gender === 'Masculino'
                      ? `${ImageUserUrl}/boy?username=${user.id}`
                      : `${ImageUserUrl}/girl?username=${user.id}`
                  }
                />
                <p>{user.gender}</p>
              </div>
              <InfoUser>
                <h3>{user.name}</h3>
                <p>{user.job}</p>
                <p>{user.email}</p>
              </InfoUser>
              <DeleteUser onClick={() => deleteUser(user.name, user.id)}>×</DeleteUser>
            </CardUser>
          ))}
        </ContainerUser>
      )}
    </Container>
  )
}

export default Users
