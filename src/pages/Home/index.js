import React from 'react';
import { useNavigation } from '@react-navigation/native'

import { Image } from 'react-native'



import { Container, Button, ButtonText, Title, Description, Icon } from './styles';

import HomeIcon from '../../assets/home.png';
import Arrow from '../../assets/vector/arrow.png';


const Home = () => {
    const navigation = useNavigation();
    function handleNavigate() {
        navigation.navigate('')
        navigation.navigate('Recommendations');
        navigation.navigate('Login');
    }
    

    return (
        <Container>
            <Icon source={HomeIcon} />
            <Title>
                Olá!
            </Title>
            <Description>
                Nossas boas vindas a você, amante<br /> de filmes. Com o MyMovii você<br />
                poderá descobrir novos filmes e <br />adiciona-los a sua lista de 
                favoritos.
            </Description>
            <Button onPress={handleNavigate}>
                <ButtonText>Começar</ButtonText>
                <Image source={Arrow} />
            </Button>
        </Container>
    );
}

export default Home;
