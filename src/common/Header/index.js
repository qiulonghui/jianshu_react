import React from 'react'
import {connect} from 'react-redux'
import { HeaderWrapper,Logo,Nav, NavItem, NavSearch, SearchWrapper, Additions, Button } from './style'
import * as HeaderActions from './store/actionCreators'

const Header = function(props) {
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
            className={props.focused ? 'focused': ''}
            onFocus={props.handleInputFocus}
            onBlur={props.handleInputBlur}
          ></NavSearch>
          <i 
            className={props.focused ? 'iconfont focused': 'iconfont'}
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

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = HeaderActions.inputFocus()
      dispatch(action)
    },

    handleInputBlur() {
      const action = HeaderActions.inputBlur()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)

