export default function Color({item,handleColorChange}){
    return(
        <div className="color">
        <div
          className={` ${
            item.isActive ? "colornav-active" : "colornav-outside"
          }`}
          onClick={(e) => handleColorChange(item.id)}
        >
          <button className={`colornav-link ${item.color}`}></button>
        </div>

        <label
          className={` ${
            item.active ? "colornav-caption" : "colornav-caption-none"
          }`}
        >
          {item.caption}
        </label>
      </div>
    )
}