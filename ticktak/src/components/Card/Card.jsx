import Icon from "../Icon/Icon";
import "./Card.css";
import { memo } from "react";
function Card({onPlay,player,index,gameEnd}) {
    let icon=<Icon />
    if (player=='x') {
    icon=<Icon name={"cross"}/>
}else if(player=='o'){
    icon=<Icon name={"circle"}/>
}
        return (
            <div className="card" onClick={()=>!gameEnd && player=="" && onPlay(index)}>
              {icon}
            </div>
        )
}
export default memo(Card);