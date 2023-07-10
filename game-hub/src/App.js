import logo from './logo.svg';
import './App.css';
import React from 'react';

function GameApp(){
  const [gamesList, setgamesList] = React.useState([
  {
   "Company": "Riot",
   "Name": "Valorant",
   "Image": "https://posterplus.com.au/files/2022/12/MX5311-Valorant.jpg",
    "About": "A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities to defend or attack territory.",
   "Favorite":true
  },
  {
   "Company": "Blizzard",
   "Name": "Overwatch",
   "Image": "https://m.media-amazon.com/images/M/MV5BMDNkZDVkODEtNjQyYy00NGYwLTljMGQtOTI2MDAwY2ZlOWFmXkEyXkFqcGdeQXVyNjM2MTY3MTY@._V1_FMjpg_UX1000_.jpg",
    "About": "The former agents of the heroic team known as Overwatch must join forces once more to fight a new threat in PvP match.",
   "Favorite":false
  },
  {
   "Company": "Mojang Studios",
   "Name": "Minecraft",
   "Image": "https://m.media-amazon.com/images/M/MV5BYWIzYjUzMGUtZjJlNy00MWVlLWJjNGEtODU1OWFiOWIwOTFjXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
    "About": "The world where you can build, enchant your armor and tools, adventure other biomes, and even defeat creatures.",
   "Favorite":false
  },
  {
   "Company": "Respawn Entertainment and Electronic Arts",
   "Name": "Apex Legends",
   "Image": "https://i.ebayimg.com/images/g/pf8AAOSwSkJi~QLQ/s-l1600.jpg",
    "About": "Roster of characters with powerful abilities and strategic squad play of Hero Shooter and Battle Royale.",
   "Favorite":false
  },
  {
   "Company": "Infinity Ward and Activision",
   "Name": "Call of Duty: Modern Warfare II",
   "Image": "https://m.media-amazon.com/images/M/MV5BMjZjODM2MDMtMGE2ZS00NWIyLTkzOWMtYjY0YTM3MzQ0ZjMzXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
    "About": "A first person shooter, and its gameplay revolves around fast-paced gunfights against enemy combatants.",
   "Favorite":false
  },
 ]);
 
  
  function slidingRight(){
    var scroll=document.getElementById("top-games");
    scroll.scrollLeft += 500;
  }
  function slidingLeft(){
    var scroll=document.getElementById("top-games");
    scroll.scrollLeft -= 500;
  }
  
  
  function handleLike(index){
    const newgameList=[...gamesList];
    if(!newgameList[index]["Favorite"]){
      newgameList[index]["Favorite"]=true;
    } else {
      newgameList[index]["Favorite"]=false;
    }
    setgamesList(newgameList);
    
  }
 
  return(
      <div id="top-games" class="snaps-inline">
      
      <div class="test snaps-inline" >
        {gamesList.map((eachgame,index)=>(
            <div id="each-game" key={index}>
              <img src={eachgame["Image"]} class="each-game-img" alt={eachgame["Name"]}></img>
              <div class="arrange-each-game">
                <div class="name">{eachgame["Name"]}</div>
                <div class="company">{eachgame["Company"]}</div>
                <div class="about">{eachgame["About"]}</div>
                <div class="fav">
                  <button class="website">visit website</button>
                  {eachgame["Favorite"] ? <i class="fa fa-heart heart-red" onClick={()=>{handleLike(index)}}></i> : <i class="fa fa-heart heart-white" onClick={()=>{handleLike(index)}}></i>}
                </div>
              </div>
            </div>
        ))}
        </div>
      <button id="slider-button-right" class="slider-button" onClick={slidingRight}><i class="fa fa-arrow-right"></i></button>
      <button id="slider-button-left" class="slider-button" onClick={slidingLeft}><i class="fa fa-arrow-left"></i></button>
      </div>
  );
}

export default GameApp;
