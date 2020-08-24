import styled from 'styled-components'
import defaultImg from '../images/rooms2.jpg'

//const orangeColor = "#f15025"

//const SimpleButton = styled.button` color: ${orangeColor}; background: green; ` 

const StyledHero = styled.header`
min-height: 60vh;
background: url(${props => props.img ? props.img : defaultImg}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`

export default StyledHero;
