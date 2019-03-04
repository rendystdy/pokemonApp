import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import { connect } from 'react-redux';
import { createPokemon } from '../publics/redux/actions/pokemons';

class CreatePokemon extends Component {

    constructor(props) {
        super(props);
        this.item = null;
        if (props.navigation.state.params && props.navigation.state.params.item) {
            this.item = props.navigation.state.params.item;
        }
        this.state = {
            inputName: this.item && this.item.name ? this.item.name : '',
            inputImg: this.item && this.item.image_url ? this.item.image_url: '',
            inputIdtypes: this.item && this.item.idtypes ? this.item.idtypes: '',
            inputIdcategory: this.item && this.item.idcategory ? this.item.idcategory: '',
            inputLatitude: this.item && this.item.latitude ? this.item.latitude: '',
            inputLongitude: this.item && this.item.longitude ? this.item.longitude: '',
        }
    }

    async handleSubmit () {
        if (this.state.inputName == null) {
            alert('data tidak boleh kosong')
        } else {
            await this.props.dispatch(createPokemon({
                name: this.state.inputName,
                image_url: this.state.inputImg,
                idtypes: this.state.inputIdtypes,
                idcategory: this.state.inputIdcategory,
                latitude: this.state.inputLatitude,
                longitude: this.state.inputLongitude,
            }))
            alert('Data Berhasil ditambahkan')
            this.props.navigation.navigate('Home')
        }

    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input autoFocus placeholder="Name" value={this.state.inputName} onChangeText={(value) => this.setState({ inputName: value })}  />
                        </Item>
                        <Item>
                            <Input placeholder="Image" value={this.state.inputImg} onChangeText={(value) => this.setState({ inputImg: value })} />
                        </Item>
                        <Item>
                            <Input placeholder="Idtypes" value={this.state.inputIdtypes} onChangeText={(value) => this.setState({ inputIdtypes: value })} />
                        </Item>
                        <Item>
                            <Input placeholder="Idcategory" value={this.state.inputIdcategory} onChangeText={(value) => this.setState({ inputIdcategory: value })} />
                        </Item>
                        <Item>
                            <Input placeholder="Latitude" value={this.state.inputLatitude} onChangeText={(value) => this.setState({ inputLatitude: value })} />
                        </Item>
                        <Item>
                            <Input placeholder="Longitude" value={this.state.inputLongitude} onChangeText={(value) => this.setState({ inputLongitude: value })} />
                        </Item>
                    </Form>
                    <Button block style={{ backgroundColor: '#000' }} onPress={() => this.handleSubmit()}>
                        <Text style={{ color: '#fff' }}>{this.item && this.item.title ? 'Update' : 'Add'}</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default connect()(CreatePokemon)