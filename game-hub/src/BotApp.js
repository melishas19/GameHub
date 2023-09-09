import './App.css';
import React from 'react';


function MoreGames(){

    const[games,setgames]=React.useState([
      {
        "Company" : "Riot",
        "Image" : "https://notagamer.net/wp-content/uploads/2023/01/Saint-League-of-Legends-1024x576.jpeg",
        "Name" : "League of Legends",
        "Website" : ""
      },
      {
        "Company" : "Riot",
        "Image" : "https://wallpapercave.com/wp/wp8480240.jpg",
        "Name" : "Valorant",
        "Website" : ""
      },{
        "Company" : "Riot",
        "Image" : "https://raiseyourgame.com/wp-content/uploads/2022/08/Andy_Teamfight_Podcast_Optional_Featured_sm_792x447.jpg",
        "Name" : "Teamfight Tactics",
        "Website" : ""
      },
      {
        "Company" : "Riot",
        "Image" : "https://sm.ign.com/t/ign_es/screenshot/default/runeterra_wnr7.1280.jpg",
        "Name" : "Legends of Runeterra",
        "Website" : ""
      },
      {
        "Company" : "Riot",
        "Image" : "https://modyolo.com/wp-content/uploads/2021/12/league-of-legends-wild-rift-1.jpg",
        "Name" : "LOL: Wild Rift",
        "Website" : ""
      },
      {
        "Company" : "Blizzard",
        "Image" : "https://news.xbox.com/en-us/wp-content/uploads/sites/2/2022/10/OW2-be9287b234afbe7898ac.jpg",
        "Name" : "Overwatch 2",
        "Website" : ""
      },
      {
        "Company" : "Blizzard",
        "Image" : "https://oyster.ignimgs.com/mediawiki/apis.ign.com/diablo-3/6/60/Diablo-3-Reaper-of-Souls-Wallpaper-6.jpg",
        "Name" : "Diablo III",
        "Website" : ""
      },
      {
        "Company" : "Blizzard",
        "Image" : "https://media.idownloadblog.com/wp-content/uploads/2014/04/hearthstone.jpg",
        "Name" : "Hearthstone",
        "Website" : ""
      },
      {
        "Company" : "Blizzard",
        "Image" : "https://www.cnet.com/a/img/resize/75ec32b4fc48acd868ffc5a580eebd4e842d2835/hub/2019/05/14/d217c4aa-2db1-4183-b779-b2d220ba422c/d6iug02xkaam4j8.jpg?auto=webp&fit=crop&height=675&width=1200",
        "Name" : "World of Warcraft",
        "Website" : ""
      },
      {
        "Company" : "Epic",
        "Image" : "https://1.bp.blogspot.com/-fnB0mLmM5n8/XR54q24JuSI/AAAAAAAACb8/fN_dyxLMmTIj4DovkcTWLf-h_-TsIpk4wCLcBGAs/s1600/Dauntless_20190623183940.png",
        "Name" : "Dauntless",
        "Website" : ""
      },
      {
        "Company" : "Epic",
        "Image" : "https://i.redd.it/tkq453ttioq51.jpg",
        "Name" : "Fortnite",
        "Website" : ""
      },
      {
        "Company" : "Epic",
        "Image" : "https://whatifgaming.com/wp-content/uploads/2022/06/Fall-Guys-Free-For-All.jpg",
        "Name" : "Fall Guys",
        "Website" : ""
      },
      {
        "Company" : "Epic",
        "Image" : "https://variety.com/wp-content/uploads/2019/04/borderlands_keyart.jpg",
        "Name" : "Borderlands 3",
        "Website" : ""
      },
      {
        "Company" : "Epic",
        "Image" : "https://cdn1.epicgames.com/offer/87c84bc5f43d4fe69ad8f3ccde0594b0/EGS_DishonoredDeathoftheOutsider_ArkaneStudios_S1_2560x1440-7384b1e04742564e240e5e92722f82d6",
        "Name" : "Dishonored 3",
        "Website" : ""
      },
      {
        "Company" : "Epic",
        "Image" : "https://images.gog-statics.com/ba4ee4cbc04910b91f58115d2dbb5a0fecb6819b7d8abe6176e6300e9200ca48.jpg",
        "Name" : "Fallout 3",
        "Website" : ""
      },
      {
        "Company" : "Ea",
        "Image" : "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop191x100.1200w.jpg",
        "Name" : "Apex Legends",
        "Website" : ""
      },
      {
        "Company" : "Ea",
        "Image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/1238810/capsule_616x353.jpg?t=1641312066",
        "Name" : "Battlefield V",
        "Website" : ""
      },
      {
        "Company" : "Ea",
        "Image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/2096610/capsule_616x353.jpg?t=1669031800",
        "Name" : "Crysis 3",
        "Website" : ""
      },
      {
        "Company" : "Ea",
        "Image" : "https://media.contentapi.ea.com/content/dam/eacom/unravel/ea-hero-large-unravel-xl.jpg.adapt.crop191x100.1200w.jpg",
        "Name" : "Unravel",
        "Website" : ""
      },
      {
        "Company" : "Ea",
        "Image" : "https://i.ytimg.com/vi/VyClsmIf5a4/maxresdefault.jpg",
        "Name" : "Need for Speed Payback",
        "Website" : ""
      },
      {
        "Company" : "Ea",
        "Image" : "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/07/DEAD-SPACE-REMAKE.jpg",
        "Name" : "Dead Space",
        "Website" : ""
      },
      {
        "Company" : "Ea",
        "Image" : "https://media.contentapi.ea.com/content/dam/eacom/rocket-arena/images/2020/05/ra-featured-image-keyart.jpg.adapt.crop191x100.1200w.jpg",
        "Name" : "Rocket Arena",
        "Website" : ""
      },
      {
        "Company" : "Activision",
        "Image" : "https://news.xbox.com/en-us/wp-content/uploads/sites/2/2022/06/Call-of-Duty-Modern-Warfare-II_Reveal_X1_Wire_Hero_1920x1080-b5aea4e5ca6046ac478e.jpg",
        "Name" : "Call of Duty: Modern Warfare II",
        "Website" : ""
      },
      {
        "Company" : "Activision",
        "Image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/42700/capsule_616x353.jpg?t=1654809667",
        "Name" : "Call of Duty: Black Ops",
        "Website" : ""
      },
      {
        "Company" : "Activision",
        "Image" : "https://gamechronicles.com/wp-content/uploads/2022/10/crashbandicoot4iat.jpg",
        "Name" : "Crash Bandicoot",
        "Website" : ""
      },
      {
        "Company" : "Activision",
        "Image" : "https://observer.case.edu/wp-content/uploads/2019/03/SekiroLaunchPoster.jpg",
        "Name" : "Sekiro: Shadows Die Twice",
        "Website" : ""
      },
      {
        "Company" : "Mojang-Studios",
        "Image" : "https://i.stack.imgur.com/dqVlX.png",
        "Name" : "Minecraft",
        "Website" : ""
      },
      {
        "Company" : "Mojang-Studios",
        "Image" : "https://cdn.akamai.steamstatic.com/steam/apps/1672970/capsule_616x353.jpg?t=1650064917",
        "Name" : "Minecraft Dungeons",
        "Website" : ""
      },
    ]);



    var header = document.getElementById("icons");
  var btns = header.getElementsByClassName("each-icon");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      handleMoreGames(this.id);
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

    const [newgGames,setnewgGames]=React.useState(games);
    function handleMoreGames(curr){
      if (curr !== "Everything"){
        var newList = games.filter((element)=>element["Company"]===curr);
        setnewgGames(newList);
      } else {
        setnewgGames(games);
      }
      
    }
    
    
    return(
      <div id="gr">
        <div id="other-games-grid">
          {newgGames.map((eachgame)=>(
            <div>
              <div class="games-box">
                
                <img src={eachgame["Image"]} class="other-img" id="scale-img" alt={eachgame["Name"]}></img>
                <div class="box-caption">
                  <div class="game-card">
                    <p>{eachgame["Name"]}</p>
                    <button class="game-button">Play</button>
                    <button class="game-button">visit website</button>
                  </div> 
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    );
  }

  export default MoreGames