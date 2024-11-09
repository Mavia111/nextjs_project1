interface Ty {
    name: string; // Use `string` instead of `String`
}

export const Heading1 = (props: Ty) =>{
    return(
        <h1 className="heading " >{props.name}</h1>
    );
}

export const Heading2 = (props: Ty) =>{
    return(
        <h2 className="heading2 " >{props.name}</h2>
    );
}

export const Heading3 = (props: Ty) =>{
    return(
        <h2 className="heading3 " >{props.name}</h2>
    );
}

