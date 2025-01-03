import React from 'react'
import successTick from '../../../assets/svg/check_circle.svg'

const CreateRoleSuccess = () => {
  return (
    <div>
      <img src={successTick} style={{margin:'32px 0 0 32px'}} alt=''/>
      <h6 style={{margin: '32px'}}className='body-m font-bold' >New Role Created Successfully</h6>
    </div>
  )
}
export default CreateRoleSuccess
