import logo from './logo.svg';
import './App.css';
import img1 from './Assets/Traffic Lights (Big Sur).png'
import img2 from './Assets/Toolbar Item.png'
import img3 from './Assets/Toolbar Group.png'
import img4 from './Assets/Toolbar Item 2.png'
import bgimage from './Assets/Lock.png'
import img5 from './Assets/Toolbar Group 2.png'
import img6 from './Assets/Header.png'
import img7 from './Assets/_Nav item base.png'
import img8 from './Assets/_Nav item base (1).png'
import Slidebar from './Component/Slidebar'
import firstimage from './Assets/first.png'
import secondimg from './Assets/second.png'
import thirdimg from './Assets/_Nav item base (2).png'
import img9 from './Assets/_Nav item base (3).png'
import img10 from './Assets/_Nav item base (4).png'
import img11 from './Assets/_Nav item base (5).png'
import img12 from './Assets/_Nav item base (6).png'
import img13 from './Assets/_Nav item base (7).png'
import img14 from './Assets/_Nav item base (8).png'
import img15 from './Assets/_Nav item base (9).png'
import img16 from './Assets/_Nav item base (10).png'
import img17 from './Assets/_Nav item base (11).png'
import img18 from './Assets/SPORTS LOGO.png'
import img19 from './Assets/ranking.png'
import img20 from './Assets/candle.png'
import img21 from './Assets/currency-dollar.png'
import img22 from './Assets/_Nav item button.png'
import img23 from  './Assets/Avatar@2x.png' 
import img24 from './Assets/banner.png'
import img25 from './Assets/CASINO ICONS.png'
import img26 from './Assets/CASINO ICONS (1).png'
import img27 from './Assets/lilbit white 1 (1).png'
import img28 from './Assets/CASINO ICONS (2).png'
import Centerbar from './Component/Centerbar';
import img29 from './Assets/image 6 (2).png'
import img30 from './Assets/image 6 (3).png'
import img31 from './Assets/image 6 (4).png'
import img32 from './Assets/image 6 (5).png'
import img33 from './Assets/image 6 (6).png'
import img34 from './Assets/image 6 (7).png'
import img35 from './Assets/image 6 (8).png'
import img36 from './Assets/image 6 (9).png'
import img37 from './Assets/image 6 (10).png'
import img38 from './Assets/image 6 (11).png'
import img39 from './Assets/image 6 (12).png'
import img40 from './Assets/image 6 (13).png'
import img41 from './Assets/image 6 (14).png'
import img42 from './Assets/image 6 (15).png'
import img43 from './Assets/image 6 (16).png'
import img44 from './Assets/image 6 (17).png'
import img45 from './Assets/image 6 (18).png'
import img46 from './Assets/image 6 (19).png'
import img47 from './Assets/CASINO ICONS (3).png'
import img48 from './Assets/CASINO ICONS (4).png'
import img49 from './Assets/Button.png'
import img50 from './Assets/_Nav item button (1).png'




function App() {
  return (
    <div>
     <div style={{width:1512,backgroundColor:'#161719',display:'flex',height:53}}>
      <img style={{paddingLeft:21,paddingTop:21,height:15,width:59}} src={img1} alt="" />
      <img style={{height:28,width:33,marginLeft:92,marginTop:12}} src={img2} alt="" />
      <img style={{height:32,width:66,marginTop:12,marginLeft:100}} src={img3} alt="" />
      <img style={{marginLeft:150}} src={img4} alt="" />
      <input style={{height:28,width:600,marginTop:12,backgroundImage:"url("+bgimage+")",}} placeholder='lilb.it' type="text" />
      <img style={{height:40,paddingLeft:300,marginTop:8}} src={img5} alt="" />
     </div>

     <div style={{display:'flex'}}>
     
        <div style={{width:80,backgroundColor:'black'}} >
        <img style={{marginTop:16}} src={img6} alt="" />
        <img style={{marginTop:96,marginLeft:16}} src={img7} alt="" />
        <img style={{marginLeft:16}} src={img8} alt="" />
        <hr style={{color:'#FFFFFF',marginTop:40}} />
        <Slidebar sideimg={firstimage}/>
        <Slidebar sideimg={secondimg}/>
        <Slidebar sideimg={thirdimg}/>
        <Slidebar sideimg={img9}/>
        <Slidebar sideimg={img10}/>
        <Slidebar sideimg={img11}/>
        <Slidebar sideimg={img12}/>
        <Slidebar sideimg={img13}/>
        <Slidebar sideimg={img14}/>
        <Slidebar sideimg={img15}/>
        <Slidebar sideimg={img16}/>
        <Slidebar sideimg={img17}/>
        <Slidebar sideimg={img49}/>
       </div>


        <div style={{backgroundColor:'#1E1E1E',width:1432}}>



         <div style={{display:'flex'}}>
        <div style={{backgroundColor:'#161719',height:40,width:113,display:'flex',marginTop:16,marginLeft:32,alignItems:'center'}}>
          <img src={secondimg} alt="" />
          <p style={{color:'white'}}>Casino</p>
        </div>
        <img style={{marginLeft:16,marginTop:24,height:30,width:30}} src={img18} alt="" />
        <p style={{color:'white',marginLeft:12,marginTop:24}}>Games</p>

        <img style={{marginLeft:28,marginTop:24,height:30,width:30}} src={img19} alt="" />
        <p style={{color:'white',marginLeft:12,marginTop:24}}>Leaderboard</p>

        <img style={{marginLeft:28,marginTop:24,height:30,width:30}} src={img20} alt="" />
        <p style={{color:'white',marginLeft:12,marginTop:24}}>Prediction Market</p>

        <div style={{backgroundColor:'#161719',height:40,width:113,display:'flex',marginTop:16,marginLeft:480,alignItems:'center'}}>
          <img style={{height:24,width:24,}} src={img21} alt="" />
          <h4 style={{color:'white',marginLeft:10}}>Connect</h4>

        </div>
        <div>
        <img style={{marginLeft:26}} src={img22} alt="" />
        <img src={img50} alt="" />
        <img style={{height:40,width:40,marginTop:16,marginLeft:30}} src={img23} alt="" />
        </div>
        </div>

        <img style={{marginTop:74,marginLeft:32}} src={img24} alt="" />

        <div style={{backgroundColor:'#161719',height:44,width:394,display:'flex',alignItems:'center',marginLeft:32,marginTop:24}}>
          <img style={{height:20,width:20,marginLeft:25}} src={img25} alt="" />
          <p style={{color:'#008000',paddingLeft:12}}>Lobby</p>

          <img style={{height:20,width:20,marginLeft:25}} src={img26} alt="" />
          <p style={{color:'white',paddingLeft:12}}>Live</p>

          <img style={{height:20,width:20,marginLeft:25}} src={img27} alt="" />
          <p style={{color:'white'}}> Lilbit </p>
           <div style={{marginLeft:340}}><input style={{height:44,width:456,marginLeft:300}} type="text" name="" id="" placeholder='Search games'/></div>
        </div>

         <div style={{display:'flex',alignItems:'center',marginTop:41}}>
         <img style={{height:24,width:24,marginLeft:38}} src={img28} alt="" />
         <h3 style={{color:'white',marginLeft:17}}>Popular</h3>
         </div>
        <div style={{display:'flex'}}>
          <Centerbar smallimg={img29}/>
          <Centerbar smallimg={img30}/>
          <Centerbar smallimg={img31}/>
          <Centerbar smallimg={img32}/>
          <Centerbar smallimg={img33}/>
          <Centerbar smallimg={img34}/>   
        </div>

        <div style={{display:'flex',alignItems:'center',marginTop:41}}>
         <img style={{height:24,width:24,marginLeft:38}} src={img47} alt="" />
         <h3 style={{color:'white',marginLeft:17}}>Lottery</h3>
         </div>

         <div style={{display:'flex'}}>
          <Centerbar smallimg={img35}/>
          <Centerbar smallimg={img36}/>
          <Centerbar smallimg={img37}/>
          <Centerbar smallimg={img38}/>
          <Centerbar smallimg={img39}/>
          <Centerbar smallimg={img40}/>   
        </div>

        <div style={{display:'flex',alignItems:'center',marginTop:41}}>
         <img style={{height:24,width:24,marginLeft:38}} src={img48} alt="" />
         <h3 style={{color:'white',marginLeft:17}}>Live Casino</h3>
         </div>

         <div style={{display:'flex'}}>
          <Centerbar smallimg={img41}/>
          <Centerbar smallimg={img42}/>
          <Centerbar smallimg={img43}/>
          <Centerbar smallimg={img44}/>
          <Centerbar smallimg={img45}/>
          <Centerbar smallimg={img46}/> 
        </div>

        </div>
       
     </div>


















    </div>
  );
}

export default App;
