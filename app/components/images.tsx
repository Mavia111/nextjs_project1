interface Ty {
    image: string; // Use `string` instead of `String`
}
export function Images(props: Ty){
    return(

        <img className="main_img" src={props.image}/>
    );
}
