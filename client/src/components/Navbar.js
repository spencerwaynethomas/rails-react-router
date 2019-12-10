import React from "react"
import { Link, } from "react-router-dom"
import { Menu, } from "semantic-ui-react"


const Navbar = () => (
  <Menu>
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/about">
      <Menu.Item>
        About
      </Menu.Item>
    </Link>
    <Link to="/Products">
      <Menu.Item>
        Product
      </Menu.Item>
    </Link>
    <Link to="/Products/new">
      <Menu.Item>
        New Product
      </Menu.Item>
    </Link>
  </Menu>
)

export default Navbar