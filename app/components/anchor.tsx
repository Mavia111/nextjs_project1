import Link from "next/link";

export function Anc(props:string){
    return(
        <Link className="anc" href={props.link} target="_blank">Click Here</Link>
    );
}
