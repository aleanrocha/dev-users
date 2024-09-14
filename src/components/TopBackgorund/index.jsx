import { BackgroundImage, Image } from './styles'

import UsersImage from '../../assets/users.png'

const TopBackground = () => {
  return (
    <BackgroundImage>
      <Image src={UsersImage} alt='Imagem de vários usuários' />
    </BackgroundImage>
  )
}

export default TopBackground