
const Menu = ({data}) => {
  return (
    <div>
       <ul className="pl-4 pb-2">
        {data.map((item, index) => (
        <li key={index} className="flex justify-between py-1 text-gray-600">
            <span>{item.name}</span>
            <span>{item.price}</span>
        </li>
        ))}
    </ul>
    </div>
  )
}

export default Menu
