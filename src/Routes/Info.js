import Examples from "../component/Examples"
import { useParams } from "react-router-dom";
import axios from 'axios';
import React, { Component, useEffect, useState } from "react";

export default function Info (props) {
  
        const {id} = useParams()
        console.log(id);

            // useEffect(() => {  
            //   getcards();
            // }, []);

            // let getcards= async () => {
            //   let card = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
            //   setCards(card.data)
            // };
            // let [Cards,setCards]=useState([])
            let Cards =
            [
              { "anime": "Naruto","link1":"https://www.crunchyroll.com/ar/naruto-shippuden", "link2":"https://arabia.starzplay.com/ar/series/naruto/183330856326","img": "https://img1.ak.crunchyroll.com/i/spire4/5568ffb263f6bcba85a639980b80dd9a1612993223_full.jpg", "character": "naruto", "quote": "first site for naruto shippuden and the second for naruto childhood " },
              { "anime": "One Piece","link1":"https://witanime.com/anime/one-piece/", "link2":"https://shahed4u.vip/series/one-piece/", "img": "https://tv.egydead.live/wp-content/uploads/2021/11/%D8%A7%D9%86%D9%85%D9%8A-One-Piece-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-1000.jpg", "character": "luffy", "quote": "i'm going to be the king of pirates" },
              { "anime": "Bleach","link1":"https://www.crunchyroll.com/ar/bleach", "link2":"https://anime-time.co/?s=bleach", "img": "https://image.winudf.com/v2/image1/Y29tLnR0bGlrZS5tYnNhZW4uYW5kcm9pZF9zY3JlZW5fMF8xNjA4MDE4NDgzXzAwOQ/screen-0.jpg?fakeurl=1&type=.webp", "character": "itchigo", "quote": "bankai" },
              { "anime": "Dragon Ball","link1":"https://w.tuktukcinema.net/%D8%A7%D9%86%D9%85%D9%8A-dragon-ball-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-1-%D9%85%D8%AA%D8%B1%D8%AC%D9%85%D8%A9/", "link2":"https://balkona.online/series/dragon-ball/", "img": "https://img1.ak.crunchyroll.com/i/spire3/98ea4207e23a2ea3e3af39ad641d88001533322009_main.jpg", "character": "goku", "quote": "ka may ha may ha" },
              { "anime": "Avatar: The Last Airbender","link1":"https://cimalek.club/series/avatar-the-last-airbender-717639/", "link2":"https://w.tuktukcinema.net/%D9%85%D8%B3%D9%84%D8%B3%D9%84-avatar-the-last-airbender-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-1-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/", "img": "https://lh3.googleusercontent.com/E9AvXRdOoflWh4unFeTIAithlGhs823AVj-9EW5NDKG5CqltAe59ysihBJ_Ai2uymW26KlOeff4NN3dgzngUa28x=w640-h400-e365-rj-sc0x00ffffff", "character": "Aang", "quote": "Relax, Sokka. Where we're going, you won't need any pants!" },
              { "anime": "Sword Art Online II","link1":"https://w.tuktukcinema.net/%D8%A7%D9%86%D9%85%D9%8A-sword-art-online-ii-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-1-%D9%85%D8%AA%D8%B1%D8%AC%D9%85%D8%A9/", "link2":"https://www.animeiat.tv/anime/sword-art-online-ii", "img": "https://img4.hulu.com/user/v3/artwork/89a3fdc6-58b3-493a-92c2-8f503cb0363e?base_image_bucket_name=image_manager&base_image=5c62e4aa-c897-4fa9-9c87-99237dbcf389&region=US&format=jpeg&size=952x536", "character": "Konno Yuuki", "quote": "Because of my last moments are such fulfillment.\nI can end my journey surrounded by so many people, in the arms of the person I love.\nI... I did my best to live, I lived here." },
              { "anime": "07 Ghost","link1":"https://www.arabanime.net/show-743/07-ghost", "link2":"https://ar.okanime.online/anime/07-ghost", "img": "https://img1.ak.crunchyroll.com/i/spire4/1d3f1855ba933617b4d6792d9d3154191300831088_full.jpg", "character": "Frau", "quote": "Don’t allow hatred to devour your heart. The one that you care for will only move farther away." },
              { "anime": "Pokémon","link1":"https://www.arabanime.net/show-205/pokemon", "link2":"https://shahed4u.team/?s=Pokemon", "img": "https://pbs.twimg.com/media/FPQ_WPpaQAIdIhh?format=jpg&name=4096x4096", "character": "Ash Ketchum", "quote": "I'm an apple for a day and I need a doctor right away..." },
              { "anime": "Higurashi No Naku Koro Ni","link1":"https://shahed4u.vip/series/%D8%A7%D9%86%D9%85%D9%8A-higurashi-no-naku-koro-ni-2020-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-1/", "link2":"https://witanime.com/anime/higurashi-no-naku-koro-ni-2020/", "img": "https://image.tmdb.org/t/p/original/8fsV0aqSHQlbyvZlWyynruat0MP.jpg", "character": "Ryuuguu Rena", "quote": "Friends are nothing more than the people who you spend the fun, yet meaningless times with. When those times get rough, they aren't there to support you." },
              { "anime": "Ghost Hunt","link1":"https://www.arabanime.net/show-473/ghost-hunt", "link2":"https://animefuji.com/anime/ghost-hunt", "img": "https://pm1.narvii.com/6436/b3b0c818eaa20291a2df7b038628272ec910e2c6_hq.jpg", "character": "Mai Taniyama", "quote": "There are things that we don't want to happen, but have to accept. Things that we don't want to know, but have to learn. And people that we can't live without, but have to let go." },
              { "anime": "Hunter X Hunter","link1":"https://anime-time.co/anime/%D8%A3%D9%86%D9%85%D9%8A-hunter-x-hunter-2011-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A3%D9%88%D9%84/", "link2":"https://shahed4u.vip/series/%D8%A7%D9%86%D9%85%D9%8A-hunter-x-hunter-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-2/", "img": "https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg", "character": "Ging Freecss", "quote": "You should enjoy the little detours. To the fullest. Because that's where you'll find the things more important than what you want." },
              { "anime": "Plastic Memories","link1":"https://www.animeiat.tv/anime/plastic-memories", "link2":"https://www.egyanime.com/anime?do=1147", "img": "https://img1.ak.crunchyroll.com/i/spire2/ad2b0b48b9f93920299b014bd70f24ed1428100037_main.jpg", "character": "Isla", "quote": "Because nothing makes one happier than being with the one you love." }
            ]
            for(let i=0;i<12;i++){
              //  console.log(Cards[0].character)
              if(id==Cards[i].character){


             
        return (

            <div className="container my-5 p-5" 
            style={{fontSize:'20px', color:'black', borderRadius:'10%', backgroundColor:'Gold',width:'500px'}}>
                <div> title : {Cards[i].anime} </div><br></br>
                <div> info : {Cards[i].quote} </div><br></br>
                <div> photo : <img src={Cards[i].img} style={{ width: "18rem", height: "18rem",borderRadius:'50%' }} /></div>
                <div> 
                  link1 : <a href= {Cards[i].link1}>First site</a><br></br>
                  link2 : <a href= {Cards[i].link2}>second site</a><br></br>
                </div>

            </div>

        )
            }
           
     }
           
}