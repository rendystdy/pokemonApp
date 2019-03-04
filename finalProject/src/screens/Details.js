import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Left, Body, Right, Text } from 'native-base';
import { connect } from 'react-redux';
import { getPokemonDetail } from '../publics/redux/actions/pokemons';
import { Icon } from 'react-native-elements'

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            image_url: '',
            idtypes: '',
            idcategory: '',
            latitude: '',
            longitude: ''
        }
    }

    getDetail = async (id) => {
        await this.props.dispatch(getPokemonDetail(id));
    }

    async fetchData() {
        const { navigation } = this.props
        const id = await navigation.getParam('id', 'no-id')

        await this.getDetail(id)
        await this.setState({
            id: this.props.pokemons.detail.data.id,
            name: this.props.pokemons.detail.data.name,
            image_url: this.props.pokemons.detail.data.image_url,
            idtypes: this.props.pokemons.detail.data.idtypes,
            idcategory: this.props.pokemons.detail.data.idcategory,
            latitude: this.props.pokemons.detail.data.latitude,
            longitude: this.props.pokemons.detail.data.longitude,
        })
    }

    componentDidMount() {
        this.fetchData()
        // alert(JSON.stringify(this.state.id))

    }
    render() {
        return (
            <Container>
                <Header style={{ height: 80 }}>
                    <Left>
                        <Button iconLeft transparent style={{ marginTop: 10, color:'#fff'}} onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body />
                    <Right>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('EditPokemon',
                            {
                                id: this.state.id,
                                name: this.state.name,
                                image_url: this.state.image_url,
                                idtypes: this.state.idtypes,
                                idcategory: this.state.category,
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                            }
                        )}>
                            <Icon
                                name='edit'
                                type='fontawesome'
                                color='#fff'
                                iconStyle={{ fontSize: 24 }}
                            />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <View>
                        <Image style={{ width: null, height: 300 }} source={{ uri: this.state.image_url }} />
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10 }}>{this.state.name}</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    pokemons: state.pokemons
})

export default connect(mapStateToProps)(Details)