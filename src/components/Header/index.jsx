import { Container, Title, Nav } from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Container>
      <Title>Dev-Users</Title>
      <Nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/lista-de-usuarios'}>Usuários</Link>
      </Nav>
    </Container>
  )
}

export default Header