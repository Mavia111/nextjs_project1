import Link from "next/link";

export function Anc(props){
    return(
        <Link className="anc" href={props.link} target="_blank">Click Here</Link>
    );
}
