import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Label, Input, Button } from 'native-base';
import { connect } from 'react-redux';
import { updatePokemon } from '../publics/redux/actions/pokemons';


class EditPokemon extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            image_url: '',
            idtypes: '',
            idcategory: '',
            latitude: '',
            longitude: '',
        }
    }

    getUpdate = async (id) => {
        await this.props.dispatch(updatePokemon(id));
    }

    async fetchData() {
        const { navigation } = this.props
        const id = await navigation.getParam('id', 'no-id')
        await this.getUpdate(id)
        await this.setState({
            id: this.props.pokemons.data.id,
            name: this.props.pokemons.data.name,
            image_url: this.props.pokemons.data.image_url,
            idtypes: this.props.pokemons.data.idtypes,
            idcategory: this.props.pokemons.data.idcategory,
            latitude: this.props.pokemons.data.latitude,
            longitude: this.props.pokemons.data.longitude,
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    // handleSubmit = (id) => {
    //     await this.props.dispatch(updateNews(id));
    // }


    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item fixedLabel>
                            <Label>Name</Label>
                            <Input value={this.state.name} onChangeText={name => (this.setState({ name: name }))} />
                        </Item>
                        <Item fixedLabel>
                            <Label>Image</Label>
                            <Input value={this.state.image_url} onChangeText={image_url => (this.setState({ image_url: image_url }))} />
                        </Item>
                        <Item fixedLabel>
                            <Label>idtypes</Label>
                            <Input value={this.state.idtypes} onChangeText={idtypes => (this.setState({ idtypes: idtypes }))} />
                        </Item>
                        <Item fixedLabel>
                            <Label>idcategory</Label>
                            <Input value={this.state.idcategory} onChangeText={idcategory => (this.setState({ idcategory: idcategory }))} />
                        </Item>
                        <Item fixedLabel>
                            <Label>latitude</Label>
                            <Input value={this.state.latitude} onChangeText={latitude => (this.setState({ latitude: latitude }))} />
                        </Item>
                        <Item fixedLabel>
                            <Label>longitude</Label>
                            <Input value={this.state.longitude} onChangeText={longitude => (this.setState({ longitude: longitude }))} />
                        </Item>
                    </Form>
                    <Button full>
                        <Text style={{ color: '#fff' }} onPress={()=> this.handleSubmit(this.state.id)}>Update</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    pokemons: state.pokemons
})

export default connect(mapStateToProps)(EditPokemon)