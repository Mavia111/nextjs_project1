import Link from "next/link";
interface Ty {
    link: string; // Use `string` instead of `String`
}
export function Anc(props: Ty){
    return(
        <Link className="anc" href={props.link} target="_blank">Click Here</Link>
    );
}
