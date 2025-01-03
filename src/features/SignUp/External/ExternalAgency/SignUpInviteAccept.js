import Progressbar from '../../../../components/ProgressBar/ProgressBar'
import check_circle from '../../../../assets/images/logo/check_circle.svg'
export default function SignUpInvite() {
  return (
    <>
        <div className='cont-form-container'>
            <img src={check_circle} alt="Check Icon" style={{width: '5rem', marginLeft: '-.5rem'}}/>
            <h3 className='head-xs head-black mb-28'>Registration Successful!</h3>
            <p className='body-xs font-regular mb-28 gray-800'>You are now a verified user of NHAI</p>
            <Progressbar/>
            <p className='body-xxs font-regular mb-32 gray-800'>Redirecting to NHAI DataLake 3.0</p>
        </div>
    </>
  )
}