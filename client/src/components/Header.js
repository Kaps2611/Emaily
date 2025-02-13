import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent(){
    switch(this.props.auth){
      case null:
        return 
      case false :
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        )
      default:
        return <li><a href='/api/logout'>Logout</a></li>
    }

  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys':'/'}  className="left brand-logo" href="/">Emaily</Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
          
           <ul className="right">
            Credits:10
          </ul>

          <ul className="right">
            <button style={{backgroundColor:"darkseagreen",marginRight:"10px"}}>ADD CREDITS</button>
          </ul>

        </div>
      </nav>
    )
  }

}

function mapStateToProps({ auth }) {
  return { auth };

}

export default connect(mapStateToProps)(Header);
