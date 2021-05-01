import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export const CircleFab = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    border-radius: 200px;
    position: absolute;
    bottom: ${props => props.bottom ? props.bottom : "20px"};
    right: ${props => props.right ? props.right : "20px"};
    justify-content: center;
    align-items: center;
    background-color: #06f;
    padding-bottom:5px;
`

export const TextFab = styled.Text`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
`

export const VieW = styled.View`
    display: flex;
    flex: 1;
` 

export const Container = styled.View`
	flex: 1;
	background-color: white;
	justify-content: center;
	align-items: center;
`;

export const TitleBar = styled.View`
	width: 95%;
	margin-top: 10px;
    padding-left: 10px;
    border: 1px;
    height: 65px;
`;

export const Description = styled.Text`
	font-size: 20px;
	font-weight: 500;
	color: #b8bece;
`;

export const Title = styled.Text`
	font-size: 20px;
	color: #3c4560;
	font-weight: bold;
`;

export const IconDelete = styled(Icon)`
    font-size: 40px;
    color: red;
`;

export const IconEdit = styled(Icon)`
    font-size: 40px;
    color: #4682b4;
`;

export const WrapperDelete = styled.TouchableOpacity`
    position: absolute;
    right: 10px;
    top: 10px;
`;

export const WrapperEdit = styled.TouchableOpacity`
    position: absolute;
    right: 55px;
    top: 10px;
`;

