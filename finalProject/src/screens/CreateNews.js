import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import { connect } from 'react-redux';
import { createNews } from '../publics/redux/actions/news';

class CreateNews extends Component {

    constructor(props) {
        super(props);
        this.item = null;
        if (props.navigation.state.params && props.navigation.state.params.item) {
            this.item = props.navigation.state.params.item;
        }
        this.state = {
            inputTitle: this.item && this.item.title ? this.item.title : '',
            inputImg: this.item && this.item.image_url ? this.item.image_url : '',
            inputDsc: this.item && this.item.description ? this.item.description : '',
            inputAuthor: this.item && this.item.author ? this.item.author : '',
            inputVideo: this.item && this.item.video_url ? this.item.video_url : '',
        }
    }

    async handleSubmit() {
        if (this.state.inputTitle == null) {
            alert('data tidak boleh kosong')
        } else {
            await this.props.dispatch(createNews({
                Title: this.state.inputTitle,
                image_url: this.state.inputImg,
                description: this.state.inputDsc,
                author: this.state.inputAuthor,
                video_url: this.state.inputVideo,
            }))
            alert('Data Berhasil ditambahkan')
            this.props.navigation.navigate('Home')
        }

    }

    render() {
        return (
            <Container>
                <Button iconLeft transparent style={{ marginTop: 10, color: '#fff' }} onPress={() => this.props.navigation.navigate('Home')}>
                    <Icon name='arrow-back' />
                </Button>
                <Content>
                    <Form>
                        <Item>
                            <Input autoFocus placeholder="Title" value={this.state.inputName} onChangeText={(value) => this.setState({ inputTitle: value })} />
                        </Item> 
                        <Item>
                            <Input placeholder="Image" value={this.state.inputImg} onChangeText={(value) => this.setState({ inputImg: value })} />
                        </Item>
                        <Item>
                            <Input placeholder="Description" value={this.state.inputDsc} onChangeText={(value) => this.setState({ inputDsc: value })} />
                        </Item>
                        <Item>
                            <Input placeholder="Author" value={this.state.inputAuthor} onChangeText={(value) => this.setState({ inputAuthor: value })} />
                        </Item>
                        <Item last>
                            <Input placeholder="Video" value={this.state.inputVideo} onChangeText={(value) => this.setState({ inputVideo: value })} />
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

export default connect()(CreateNews)