import Link from "next/link";

export function Anc(props:any){
    return(
        <Link className="anc" href={props.link} target="_blank">Click Here</Link>
    );
}