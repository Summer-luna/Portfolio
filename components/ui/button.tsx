export const OutlinedBtn = (props: {size:string, children: string, link?:string, download?:boolean}):JSX.Element => {
    const getBtn = () => {
        switch (props.size){
            case "Small":
                return "outlinedSmallBtn";
            case "Big":
                return "outlinedBigBtn";
        }
    }

    return <a className={`${getBtn()} animate-fadeDown opacity-0`} style={{animationDelay: `500ms` }} href={props?.link} download={props?.download} target="_blank">
        {props.children}
    </a>
}