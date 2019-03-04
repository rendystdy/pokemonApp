import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Label, Input, Button } from 'native-base';
import { connect } from 'react-redux';
import { updateNews } from '../publics/redux/actions/news';


class EditNews extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            image_url: '',
            description: '',
            author: '',
            video_url: '',
            create_at: '',
        }
    }

    getUpdate = async (id) => {
        await this.props.dispatch(updateNews(id));
    }

    async fetchData() {
        const { navigation } = this.props
        const id = await navigation.getParam('id', 'no-id')
        await this.getUpdate(id)
        await this.setState({
            id: this.props.news.detail.data.id,
            title: this.props.news.detail.data.title,
            image_url: this.props.news.detail.data.image_url,
            description: this.props.news.detail.data.description,
            author: this.props.news.detail.data.author,
            video_url: this.props.news.detail.data.video_url,
            created_at: this.props.news.detail.data.created_at,
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
                            <Label>Title</Label>
                            <Input value={this.state.title} onChangeText={title => (this.setState({ title: title }))} />
                        </Item>
                        <Item fixedLabel>
                            <Label>Image</Label>
                            <Input value={this.state.image_url} onChangeText={image_url => (this.setState({ image_url: image_url }))} />
                        </Item>
                        <Item fixedLabel>
                            <Label>Description</Label>
                            <Input value={this.state.description} onChangeText={description => (this.setState({ description: description }))} />
                        </Item>
                        <Item fixedLabel>
                            <Label>Author</Label>
                            <Input value={this.state.author} onChangeText={author => (this.setState({ author: author }))} />
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
    news: state.news
})

export default connect(mapStateToProps)(EditNews)