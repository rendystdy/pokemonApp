import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, AsyncStorage} from 'react-native';
import { Container, Header, Content, Form, Item, Label } from 'native-base';
import { connect } from 'react-redux';
import { login } from '../publics/redux/actions/users'
import { SocialIcon, Input, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends Component {

    state = {
        id: '',
        email: '',
        password: '',
        token: ''
    }

    componentDidMount() {
        // const token =  AsyncStorage.getItem('token')
        // if (token !== null) {
        //     this.props.navigation.navigate('Home')        
        // }
    }

    async handleLogin() {
        const data = {
            email: this.state.email,
            password: this.state.password
        }

        await this.props.dispatch(login(data))
        this.setState({
            token: this.props.users.data.token.token,
            id: this.props.users.data.user.id
        })

        await AsyncStorage.setItem('token', this.state.token)
        await AsyncStorage.setItem('id', String(this.state.id))

        // await alert(JSON.stringify(this.props.users.data.user.id))
        this.props.navigation.navigate('Home')        

    }

    async cekToken ( ){
        const token = await AsyncStorage.getItem('token')
        const id = await AsyncStorage.getItem('id')

        alert(token + ' ' + id)
    }
    
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <View>
                        <View>
                            <SocialIcon
                                title='Sign In With Facebook'
                                button
                                type='facebook'
                            />
                            <SocialIcon
                                title='Sign In With Instagram'
                                button
                                type='instagram'
                                light
                            />
                            <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: '400' }}>ATAU</Text>
                        </View>
                    </View>
                    <View>
                        <Form style={{ margin: 10 }}>
                            <Input
                                placeholder='Email'
                                leftIcon={{ type: 'font-awesome', name: 'user', color: '#f44248' }}
                                shake={true}
                                label='ALAMAT EMAIL'
                                inputContainerStyle={{ marginBottom: 20 }}
                                onChangeText={(email) => { this.setState({ email }) }}
                            />
                            <Input
                                placeholder='Password'
                                leftIcon={{ type: 'font-awesome', name: 'lock', color: '#f44248' }}
                                shake={true}
                                label='PASSWORD'
                                inputContainerStyle={{ marginBottom: 20 }}
                                onChangeText={(password) => { this.setState({ password }) }}
                            />
                        </Form>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button
                            icon={
                                <Icon
                                    name="arrow-right"
                                    size={15}
                                    color="white"
                                />
                            }
                            title="SIGN IN"
                            buttonStyle={{ backgroundColor: '#f44248' }}
                            containerStyle={{ width: 300 }}
                            onPress={() => this.handleLogin()}
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ marginTop: 10, color: '#000' }}>Belum memiliki Akun ?</Text>
                        <Button
                            title="Daftar Sekarang"
                            type="clear"
                            onPress={() => this.props.navigation.navigate('Register')}
                        />
                    </View>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps)(withNavigation(Login))