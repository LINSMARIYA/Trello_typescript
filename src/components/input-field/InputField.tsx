const InputField=(props: {id:string;placeholder:string;type:string})=>{
    const {id,placeholder,type}=props;
    return(
        <div>
            <input type={type} id={id} placeholder={placeholder}></input>
        </div>
    )
}
export default InputField;