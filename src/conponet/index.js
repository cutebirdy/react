
import { Menu} from "antd";
import { MailOutlined, BarsOutlined, UserOutlined, UserAddOutlined, UserSwitchOutlined,LogoutOutlined } from '@ant-design/icons'
import { useState, useEffect } from "react";
import { Route, Link, Routes, useLocation } from "react-router";

import MyIntroduce from './intoduce'
import MyTable from './table'
import MyForm from './form'
import Myprogress from './progress'
import Mycarousel from './carousel'


const SubMenu = Menu.SubMenu;
const items = [
  {
    label: 'cutebirdy',
    name:'birdy',
    key: 1,
    icon: <UserOutlined />,
  },
  {
    label: 'yikun',
    name:'yikun',
    key: 2,
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '美女',
    name:'美女',
    key: 3,
    icon: <UserOutlined />,

  },
  {
    label: '添加用户',
    name:null,
    key: 4,
    icon: <UserAddOutlined />,

  },
];


let routeMap = {
  '/myIntroduce': '0',
  '/myTable': '1',
  '/myForm': '2',
  '/myProgress': '3',
  '/myCarousel': '4'
};
function Myrouter(props) {
  const location = useLocation()
  const [sider, setSider] = useState({ current: '', username: '' })
  function handleClick(key) {
    setSider({ ...sider, current: key })
  }
  function handleMenuClickin(label){
     setSider({
      ...sider,
      username: label
     })
  }
  function handleMenuClickout(){
    if(sider.username!==null){
      alert(`用户：${sider.username}已下线`)
    setSider({
      ...sider,
      username:null})
    }else{
      alert('用户已下线，请重新登陆！')
    }
    
   
    
  }
  useEffect(() => {
    
    setSider(s => ({ ...s, current: routeMap[location.pathname] || 0 }))
    setSider(s => ({ ...s, username: null }))
  }, [location.pathname])
  return (


    <div >
      <div id="leftMenu">
        <img src="/logo192.png" width='50' id='logo' alt="react-logo" />
        <Menu theme="dark"
          onClick={(e) => { handleClick(e.key) }}
          style={{ width: 200 }}
          defaultOpenKeys={['sub1', 'sub2']}
          defaultSelectedKeys={[sider.current]}
          mode="inline"
        >
          <Menu.Item key='0'><Link to='/myIntroduce'><MailOutlined />我没有子菜单</Link></Menu.Item>
          <SubMenu key="sub1" title={<span><BarsOutlined /><span>主导航</span></span>}>
            
            <Menu.Item key="1"><Link to="/myTable">表格</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/myForm">表单</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/myProgress">进度条</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/myCarousel">轮播</Link></Menu.Item>
          </SubMenu>


        </Menu>
      </div>
      <Routes >

        <Route path="/myIntroduce" element={<MyIntroduce />} />
        <Route path="/myTable" element={<MyTable />} />
        <Route path="/myForm" element={<MyForm />} />
        <Route path="/myProgress" element={<Myprogress />} />
        <Route path="/myCarousel" element={<Mycarousel />} />

        {/* <Route index element={<MyIntroduce />}/> */}

      </Routes>
      {/* 
      <div className="dropdown-button">
        <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
          <MenuUnfoldOutlined />
        </Dropdown.Button>
      </div> */}
      <div className="rightWrap">
        <Menu mode="horizontal">
          <SubMenu title={<span><UserOutlined />{sider.username}</span>}>
            <Menu.Item key="setting:1" onClick={()=>{handleMenuClickout()}}>{<span><LogoutOutlined />退出</span>}</Menu.Item>
            <SubMenu title={<span><UserSwitchOutlined />切换用户</span>}>
              {items.map(item=>{return <Menu.Item key={item.key} onClick={()=>{handleMenuClickin(item.name)}}>{item.label}</Menu.Item>})}
              
            </SubMenu>


          </SubMenu>


        </Menu>
        <div className="right-box">
          {props.Children}
        </div>

      </div>
    </div>


  );
}


export default Myrouter;