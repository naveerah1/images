function ProfileCard({title,handle,image}){
    return(
        <div>
            <img src = {image}/>
            <div>The title is {title}</div>
            <div>The handle is {handle}</div>
            
        </div>
    );
}
export default ProfileCard;