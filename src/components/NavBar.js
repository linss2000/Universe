import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink , NavDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import FontAwesome from 'react-fontawesome'

export default class c extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState({

      dropdownOpen: !this.state.dropdownOpen

    });
  }
  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable size="sm">
          <NavbarToggler left onClick={this.toggleOpen} />
          <NavbarBrand href="/">Home</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink href="/components/">Budget & Accounting</NavLink>
              </NavItem>

              <NavItem >
                <NavLink href="#">Cadet Tracking</NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="#">Reports</NavLink>
              </NavItem>



              <NavDropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>

              <DropdownToggle nav >

                  <FontAwesome name="gear" className="px-1 faicon" size="3x" />
              </DropdownToggle>
              <DropdownMenu right>
                {/*}<DropdownItem header>Header</DropdownItem>*/}
                <DropdownItem >My Settings</DropdownItem>
                <DropdownItem>System Administration</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Sign Out</DropdownItem>
              </DropdownMenu>
            </NavDropdown>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
