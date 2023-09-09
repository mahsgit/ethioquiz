import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="sidebarItem">
<span className="sidebarTitle">ABOUT THE WEBSITE</span>
<img
          src="https://c0.wallpaperflare.com/preview/151/903/738/omo-river-ethiopia-sunset.jpg"
          alt=""/>
       
        <p>
          All you need to know about ETHIOPIA 
        </p>

    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">ENDAGERD SPECIES</li>
          <li className="sidebarListItem">WILDLIFE</li>
          <li className="sidebarListItem">GEOGRAPHY</li>
          <li className="sidebarListItem">CULTURE</li>
          <li className="sidebarListItem">LIFE STYLE</li>

          </ul>
    
   

    </div>
    </div>
  )
}

export default Sidebar
