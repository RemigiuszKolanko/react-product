import "./Sidebar.css";

export const Sidebar = ({sidebarMenu}) => {
  console.log('sidebarMenu', sidebarMenu);
  return (
    <nav>
      <ul className="sidebar-list">
        {
          sidebarMenu.map((element, index) => {
            return (
              <li key={index}>
          <a href="#" title={element}>
            <span>{element}</span>
          </a>
        </li>
            )
          })
        }
      </ul>
    </nav>
  );
};
