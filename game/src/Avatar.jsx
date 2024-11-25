function Avatar(params) {
const h="200px";
const w="200px";
    return(
        <div>
            <img src={params.src} width={params.width} height={params.height}></img>
        </div>
    )
}
export default Avatar;