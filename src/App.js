import React, { Component } from 'react';
import './App.css';
//import 'antd/dist/antd.css'
import { TabBar,NavBar,Icon} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import API from "./API/Example"
import LoginForm from './Components/LoginForm';
import Header from 'antd/lib/calendar/Header';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }
componentDidMount(){
}
renderContent(pageText) {
  return (
    <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
       <NavBar 
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          >停车地点</NavBar>
      <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
    </div>
  );
}
  render() {
    return (
      <div >
        {/* <LoginForm></LoginForm> */}
      <div style={{ position: 'fixed', height: '100%', width: '100%', top:0 } }>
       <TabBar
         unselectedTintColor="#949494"
         tintColor="#33A3F4"
         barTintColor="white"
         hidden={this.state.hidden}
       >
         <TabBar.Item
           title="抢单"
           key="Life"
           icon={<div style={{
             width: '22px',
             height: '22px',
             background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
           />
           }
           selectedIcon={<div style={{
             width: '22px',
             height: '22px',
             background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
           />
           }
           selected={this.state.selectedTab === 'blueTab'}
           badge={1}
           onPress={() => {
             this.setState({
               selectedTab: 'blueTab',
             });
           }}
           data-seed="logId"
         >
           {this.renderContent('Life')}
         </TabBar.Item>
         <TabBar.Item
           icon={
             <div style={{
               width: '22px',
               height: '22px',
               background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
             />
           }
           selectedIcon={
             <div style={{
               width: '22px',
               height: '22px',
               background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
             />
           }
           title="停取"
           key="Koubei"
           badge={'new'}
           selected={this.state.selectedTab === 'redTab'}
           onPress={() => {
             this.setState({
               selectedTab: 'redTab',
             });
           }}
           data-seed="logId1"
         >
           {this.renderContent('Koubei')}
         </TabBar.Item>
         <TabBar.Item
           icon={
             <div style={{
               width: '22px',
               height: '22px',
               background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
             />
           }
           selectedIcon={
             <div style={{
               width: '22px',
               height: '22px',
               background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
             />
           }
           title="历史"
           key="Friend"
           dot
           selected={this.state.selectedTab === 'greenTab'}
           onPress={() => {
             this.setState({
               selectedTab: 'greenTab',
             });
           }}
         >
           {this.renderContent('Friend')}
         </TabBar.Item>
         <TabBar.Item
          // icon={<Icon type="user"/>}
           icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
           selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
           title="个人"
           key="my"
           selected={this.state.selectedTab === 'yellowTab'}
           onPress={() => {
             this.setState({
               selectedTab: 'yellowTab',
             });
           }}
         >
           {this.renderContent('My')}
         </TabBar.Item>
       </TabBar> 
        </div>
      </div >
       
    );
  }
}

export default App;
