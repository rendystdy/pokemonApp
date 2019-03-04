import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Form, Item, Label } from 'native-base';
import { connect } from 'react-redux';
import { SocialIcon, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Register extends Component {

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <View>
                        <Form style={{ margin: 10 }}>
                            <Input
                                placeholder='Username'
                                leftIcon={{ type: 'font-awesome', name: 'user', color: '#f44248' }}
                                shake={true}
                                label='Username'
                                inputContainerStyle={{ marginBottom: 20 }}
                            />
                            <Input
                                placeholder='Email'
                                leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#f44248' }}
                                shake={true}
                                label='Email'
                                inputContainerStyle={{ marginBottom: 20 }}
                            />
                            <Input
                                placeholder='Password'
                                leftIcon={{ type: 'font-awesome', name: 'lock', color: '#f44248' }}
                                shake={true}
                                label='PASSWORD'
                                inputContainerStyle={{ marginBottom: 20 }}
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
                            title="SIGN UP"
                            buttonStyle={{ backgroundColor: '#f44248' }}
                            containerStyle={{ width: 300 }}
                            onPress={() => this.props.navigation.navigate('Home')}
                        />
                    </View>
                </Content>
            </Container>
        );
    }
}

export default Register