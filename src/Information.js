import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Text, Button } from 'native-base';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';
import HTML from 'react-native-render-html';
import Toolbar from './components/Toolbar';

export default class Information extends Component{
    static navigationOptions = () => {
        return ({
            header: false
        });
    };
    constructor(props){
        super(props);
        this.renderContent = this._renderContent.bind(this);
        this.item = this.props.navigation.state.params.item;
    }

    render(){
        return(
            <CollapsibleToolbar
			    renderContent={this.renderContent}
			    renderNavBar={() => <Toolbar title={'Detail Information'} navigation={this.props.navigation} collapsible/>}
			    imageSource={this.item.image}
			    collapsedNavBarBackgroundColor='#424242'
			    translucentStatusBar
			    toolBarHeight={250}
			/>
        )
    }
    _renderContent() {
		const htmlContent = `
			<div style="textAlign: justify; padding-left: 10px; padding-right: 10px; color: #333;">
				<h1>Srifoton</h1>
				<p>Lomba App Dev Himpunan Mahasiswa Teknik Informatika Universitas Sriwijaya</p>
			</div>
		`;

		return (
			<Container>
	    		<Content>
	    			<HTML html={htmlContent}/>
                    <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, paddingVertical: 5, borderTopWidth: 1, borderTopColor: 'rgba(0, 0, 0, 0.7)' }}>
	    				<View style={{ flex: 1 }}>
	    					<Text>Nama</Text>
	    				</View>
	    				<View style={{ flex: 2 }}>
	    					<Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, 0.8)' }}>{ this.item.name }</Text>
	    				</View>
	    			</View>
	    			<View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, paddingVertical: 5, borderTopWidth: 1, borderTopColor: 'rgba(0, 0, 0, 0.7)' }}>
	    				<View style={{ flex: 1 }}>
	    					<Text>Jenis Tiket</Text>
	    				</View>
	    				<View style={{ flex: 2 }}>
	    					<Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, 0.8)' }}>-</Text>
	    				</View>
	    			</View>
	    			<View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, paddingVertical: 5, borderTopWidth: 1, borderTopColor: 'rgba(0, 0, 0, 0.7)' }}>
	    				<View style={{ flex: 1 }}>
	    					<Text>Email</Text>
	    				</View>
	    				<View style={{ flex: 2 }}>
	    					<Text style={{ color: 'rgba(0, 0, 0, 0.8)' }}>{ this.item.email }</Text>
	    				</View>
	    			</View>
	    			<View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, paddingVertical: 5, borderTopWidth: 1, borderTopColor: 'rgba(0, 0, 0, 0.7)', borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.7)' }}>
	    				<View style={{ flex: 1 }}>
	    					<Text>Status</Text>
	    				</View>
	    				<View style={{ flex: 2 }}>
	    					<Text style={{ color: 'rgba(0, 0, 0, 0.8)' }}>{ this.item.status }</Text>
	    				</View>
	    			</View>
	    			<View style={{ width: '100%', paddingVertical: 20 }}>
	    				<Button full dark
						navigateTo={() => navigate('QrCodeScanner', { item })}>
		    				<Text>Enter the Event</Text>
		    			</Button>
	    			</View>
	    		</Content>
	    	</Container>
		);
	}
}