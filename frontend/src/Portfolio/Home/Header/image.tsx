import Profile from '/image/profile.png'
const Image:React.FC=()=>{
    const customize={
        width:"80%",
        height:"20vh",
    }
    return(
        <>
        <img src={Profile}alt="profile-image"style={customize}/>
        </>
    )
}
export default Image