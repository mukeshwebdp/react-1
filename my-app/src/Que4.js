export function List({item}){
    return(
        <>
        <ul>
            {item.map((itemList)=>(
                <li>{itemList}</li>
            ))}
        </ul>
    </>
    )
}