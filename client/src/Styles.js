import styled from 'styled-components'
import { Card } from 'antd'

export const StyledRocketCard = styled(Card)`
	border-radius: 5px;
	width: 300px;
	height: 450px;
	opacity: ${(props) => (props.selected ? '1' : '0.5')};
`
