import Link from "next/link";
const ty = new Set([
  'BigInt',
  // eslint-disable-next-line @typescript-eslint/internal/prefer-ast-types-enum
  'Boolean',
  'Number',
  'Object',
  // eslint-disable-next-line @typescript-eslint/internal/prefer-ast-types-enum
  'String',
  'Symbol',
]);
export function Anc(props:ty){
    return(
        <Link className="anc" href={props.link} target="_blank">Click Here</Link>
    );
}
