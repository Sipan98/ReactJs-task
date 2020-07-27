import React from 'react';
import './App.css';
import Product from './Components/product';
import ReactPlayer from "react-player";

class App extends React.Component {
  constructor(){
    super()

    this.state= { product: [
        {id:1,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/1EIvqdqFH9s?t=3', videoname:'Fashio Show', text:'Video Slots'},
        {id:2,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/1EIvqdqFH9s?t=3', videoname:'Fashio Club DAPP', text:'Video Slots'},
        {id:3,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/1EIvqdqFH9s?t=3', videoname:'Bikini Angels', text:'Video Slots'},
        {id:4,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/1EIvqdqFH9s?t=3', videoname:'Fashio Bouticue', text:'Video Slots'},
        {id:5,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/1EIvqdqFH9s?t=3', videoname:'Live BlackJack', text:'Video Slots'},
        {id:6,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/vB9A2wROhfg', videoname:'Fashio Show', text:'Video Slots'},
        {id:7,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/vB9A2wROhfg', videoname:'Fashio Club DAPP', text:'Video Slots'},
        {id:8,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/vB9A2wROhfg', videoname:'Bikini Angels', text:'Video Slots'},
        {id:9,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/vB9A2wROhfg', videoname:'Fashio Bouticue', text:'Video Slots'},
        {id:10,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/vB9A2wROhfg', videoname:'Live BlackJack', text:'Video Slots'},
        {id:11,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/2D7LGSbJ7zk', videoname:'Fashio Show', text:'Video Slots'},
        {id:12,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/2D7LGSbJ7zk', videoname:'Fashio Club DAPP', text:'Video Slots'},
        {id:13,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/2D7LGSbJ7zk', videoname:'Bikini Angels', text:'Video Slots'},
        {id:14,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/2D7LGSbJ7zk', videoname:'Fashio Bouticue', text:'Video Slots'},
        {id:15,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/2D7LGSbJ7zk', videoname:'Live BlackJack', text:'Video Slots'},
        {id:16,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/vJ79icFB33A', videoname:'Fashio Show', text:'Video Slots'},
        {id:17,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/vJ79icFB33A', videoname:'Fashio Club DAPP', text:'Video Slots'},
        {id:18,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/vJ79icFB33A', videoname:'Bikini Angels', text:'Video Slots'},
        {id:19,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/vJ79icFB33A', videoname:'Fashio Bouticue', text:'Video Slots'},
        {id:20,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/vJ79icFB33A', videoname:'Live BlackJack', text:'Video Slots'},
        {id:21,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/XVnc9nLtd7A', videoname:'Fashio Show', text:'Video Slots'},
        {id:22,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/XVnc9nLtd7A', videoname:'Fashio Club DAPP', text:'Video Slots'},
        {id:23,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/XVnc9nLtd7A', videoname:'Bikini Angels', text:'Video Slots'},
        {id:24,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/XVnc9nLtd7A', videoname:'Fashio Bouticue', text:'Video Slots'},
        {id:25,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/XVnc9nLtd7A', videoname:'Live BlackJack', text:'Video Slots'},
        {id:26,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/QOVck_dik5I', videoname:'Fashio Show', text:'Video Slots'},
        {id:27,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/QOVck_dik5I', videoname:'Fashio Club DAPP', text:'Video Slots'},
        {id:28,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/QOVck_dik5I', videoname:'Bikini Angels', text:'Video Slots'},
        {id:29,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/QOVck_dik5I', videoname:'Fashio Bouticue', text:'Video Slots'},
        {id:30,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/QOVck_dik5I', videoname:'Live BlackJack', text:'Video Slots'},
        {id:31,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/1zoQrs7_2Sg', videoname:'Fashio Show', text:'Video Slots'},
        {id:32,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/1zoQrs7_2Sg', videoname:'Fashio Club DAPP', text:'Video Slots'},
        {id:33,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/1zoQrs7_2Sg', videoname:'Bikini Angels', text:'Video Slots'},
        {id:34,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/1zoQrs7_2Sg', videoname:'Fashio Bouticue', text:'Video Slots'},
        {id:35,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/1zoQrs7_2Sg', videoname:'Live BlackJack', text:'Video Slots'},
        {id:36,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/sAKy-Pwvwls', videoname:'Fashio Show', text:'Video Slots'},
        {id:37,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/sAKy-Pwvwls', videoname:'Fashio Club DAPP', text:'Video Slots'},
        {id:38,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/sAKy-Pwvwls', videoname:'Bikini Angels', text:'Video Slots'},
        {id:39,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/sAKy-Pwvwls', videoname:'Fashio Bouticue', text:'Video Slots'},
        {id:40,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/sAKy-Pwvwls', videoname:'Live BlackJack', text:'Video Slots'},
        {id:41,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/YywR_O_mKUQ', videoname:'Fashio Show', text:'Video Slots'},
        {id:42,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/YywR_O_mKUQ', videoname:'Fashio Club DAPP', text:'Video Slots'},
        {id:43,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/YywR_O_mKUQ', videoname:'Bikini Angels', text:'Video Slots'},
        {id:44,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/YywR_O_mKUQ', videoname:'Fashio Bouticue', text:'Video Slots'},
        {id:45,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/YywR_O_mKUQ', videoname:'Live BlackJack', text:'Video Slots'},
        {id:46,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/XSYyK1vEE6U', videoname:'Fashio Show', text:'Video Slots'},
        {id:47,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/XSYyK1vEE6U', videoname:'Fashio Club DAPP', text:'Video Slots'},
        {id:48,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/XSYyK1vEE6U', videoname:'Bikini Angels', text:'Video Slots'},
        {id:49,img:'https://vignette.wikia.nocookie.net/speed-city/images/c/c6/GreenCircleIMG.png/revision/latest?cb=20190304214856', name:'BETCONSTRACT', video:'https://youtu.be/XSYyK1vEE6U', videoname:'Fashio Bouticue', text:'Video Slots'},
        {id:50,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUa8NEBvJoTPTtQ8K26Z1wJkf_cWHw1byyQ&usqp=CAU', name:'BETCONSTRACT', video:'https://youtu.be/XSYyK1vEE6U', videoname:'Live BlackJack', text:'Video Slots'}
       
      ],
      count:[],
      query:'',
      word: [],
    }

    this.changeSelect = this.changeSelect.bind(this);
  }

  changeSelect(event){
    this.setState({count: event.target.value});
    // console.log(event.target.value)
  }

  changeInput (event){
    this.setState({query: event.target.value});
  }

  addInput(){
    return this.state.word.filter(w => w.toLowerCase().includes(this.state.query.toLowerCase()))
  }

  render (){
    return(
    <div className = "glxavor">
      <div className = 'head'>
          <div><a href="#">Games</a></div>
          <div><a href="#">Categories</a></div>
          <div><a href="#">Types</a></div>
          <div><a href="#">Providers</a></div>
      </div>

      <div className="takidiv">

      <div className='search'>
        <input type="text" name="search" placeholder="Search" value={this.state.word} onChange={this.changeInput} />
          div
      </div>
 
        <div class="sel1">
          <select>
            <option disabled selected>All Categories</option>
            <option>Categorie 1</option>
            <option>Categorie 2</option>
            <option>Categorie 3</option>
          </select>
        </div>
        <div class="sel1">
          <select>
            <option disabled selected>All Providers</option>
            <option>Provider 1</option>
            <option>Provider 2</option>
            <option>Provider 3</option>
          </select>
        </div>  
        <div class="sel1">
          <select>
            <option disabled selected>All Statues</option>
            <option>Status 1</option>
            <option>Status 2</option>
            <option>Status 3</option>
          </select>
        </div>
        <div class="sel1">
          <select onChange={this.changeSelect} value={this.state.count} className='sel2'>
            <option disabled selected>Videos Count</option>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='50'>50</option>
          </select>
        </div>  
      </div>
      <tbody>
      <div className="glxbody">

         {
          this.state.product.slice(0,this.state.count).map((v,i)=>
            <Product  key={i} w={v} />
          )
        }
      </div>
      </tbody>
    </div> 
      )
  }
}

export default App;

