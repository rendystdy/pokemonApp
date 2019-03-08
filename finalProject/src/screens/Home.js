import React, { Component } from 'react';
import { StyleSheet, FlatList, Image, ScrollView, TouchableHighlight } from 'react-native';
import { Container, List, Fab, ListItem, View, Tab, Tabs, Header, Left, Right, Body, ScrollableTab, Item, Input, Icon, Button, Text, H3, Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { getPokemons, deletePokemon, createPokemon } from '../publics/redux/actions/pokemons';


class Home extends Component {

    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('didFocus', async () => {
            await this.getDataPokemons();
        })
        // alert(this.props.news.data)
    }

    async getDataPokemons() {
        await this.props.dispatch(getPokemons());
    }

    async handleDelete(id) {
        await this.props.dispatch(deletePokemon(id));
        alert('Data Berhasil Dihapus')
        await this.props.dispatch(getPokemons())
    }


    renderItem = ({ item, index }) => (

        <ListItem thumbnail onPress={() => this.props.navigation.navigate('Details', {
            id: item.id
        })}>
            <Left>
                <Thumbnail source={{ uri: item.image_url }} />
            </Left>
            <Body>
                <Text>{item.name}</Text>
                <FlatList
                    data={item.types}
                    renderItem={({ item }) => (
                        <Text>{item.name}</Text>
                    )}
                    keyExtractor={item => item.id}
                />
            </Body>
            <Right>
                <Button transparent onPress={() => this.handleDelete(item.id)}>
                    <Icon name="trash" style={{ color: '#3d3d3d' }} ></Icon>
                </Button>
            </Right>
        </ListItem>
    )

    _keyExtractor = (item, index) => item.id.toString();


    render() {
        alert(JSON.stringify(this.props.pokemons.data))
        return (
            <Container>
                <Header style={styles.header} hasTabs>
                    <Left>
                        <Icon name="home"></Icon>
                    </Left>
                    <Body>
                        <Header transparent style={styles.searchBar} searchBar rounded>
                            <Item style={styles.itemSearch}>
                                <Icon name="ios-search" />
                                <Input placeholder="Search" />
                            </Item>
                            <Button transparent>
                                <Text>Search</Text>
                            </Button>
                        </Header>
                    </Body>
                    <Right>
                        <Button transparent style={{ marginTop: 10, marginLeft: 10 }} onPress={() => this.props.navigation.navigate('Login')}>
                            <Icon name="person" style={{ color: '#f44248', fontSize: 30 }} />
                        </Button>
                    </Right>
                </Header>
                <ScrollView>
                    <List style={{ backgroundColor: '#f2f2f2' }}>
                        <FlatList
                            data={this.props.pokemons.data}
                            keyExtractor={this._keyExtractor}
                            renderItem={this.renderItem}
                            refreshing={this.props.pokemons.isLoading}
                            onRefresh={this.getDatapokemons}
                        />
                    </List>
                </ScrollView>
                <Fab
                    style={{ backgroundColor: '#000' }}
                    onPress={() => this.props.navigation.navigate('CreatePokemon')}>
                    <Icon name="ios-add" />
                </Fab>
            </Container >
        );
    }
}

const mapStateToProps = (state) => ({
    pokemons: state.pokemons
})

export default connect(mapStateToProps)(withNavigation(Home))

const styles = StyleSheet.create({
    header: {
        height: 90,
        backgroundColor: '#fff'
    },
    logo: {
        marginTop: 25,
        width: 30,
        height: 50
    },
    searchBar: {
        width: 270,
        height: 10,
    },
    itemSearch: {
        backgroundColor: '#f1f1f1'
    }
})