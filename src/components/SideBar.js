import React from 'react'
import { connect } from 'react-redux'
import { open, close } from '../state/sideBar'
import Drawer from 'material-ui/Drawer'

export default connect(
  state => ({
    isSideBarOpen: () => state.sideBar.isSideBarOpen
  }),
  dispatch => ({
    closeSideBar: () => dispatch(close())
  })
)(
  (props) => (
    <div>
      <Drawer
        docked={false}
        width={200}
        open={props.isSideBarOpen}
        onRequestChange={props.close}
      >
      </Drawer>
    </div>
  )
)