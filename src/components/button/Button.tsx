const Button=(props: { label: string; id: string; button_icon?: JSX.Element; })=>{
    const {label,id,button_icon}=props;
    return(
     <button id={id}>
        <span>{button_icon}</span>
        {label}</button>
    )
}
export default Button;