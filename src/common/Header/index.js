import React, {Component} from 'react'
import { HeaderWrapper,Logo,Nav, NavItem, NavSearch, SearchWrapper, Additions, Button } from './style'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'>登录</NavItem >
          <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
          <SearchWrapper>
            <NavSearch
              className={this.state.focused ? 'focused': ''}
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
            ></NavSearch>
            <i 
              className={this.state.focused ? 'iconfont focused': 'iconfont'}
            >&#xe614;</i>
          </SearchWrapper>
        </Nav>
        <Additions>
          <Button className='writting'>
            <i className='iconfont'>&#xe615;</i>
            写文章
          </Button>
          <Button className="red">注册</Button>
        </Additions>
      </HeaderWrapper>
    )
  }

  handleInputFocus = ()=>{
    this.setState({focused: true})
  }
  handleInputBlur = ()=>{
    this.setState({focused: false})
  }
}


export default Header
