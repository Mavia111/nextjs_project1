interface Ty {
    name: string; // Use `string` instead of `String`
}
export const Para = (props: Ty) =>{

    return(
        <p className="para">{props.name}</p>
    );
}

export const SubPara = (props: Ty) =>{

    return(
        <p className="subpara">{props.name}</p>
    );
}
