import MuiModal from '../../../../components/Modal/MuiModal'
import MuiButton from '../../../../components/Button/MuiButton';
import AddIcon from '@mui/icons-material/Add';

export default function ModalContractComReg() {
  return (
    <>
        <MuiModal title="Complete Registration" content="Below details are fetched from your EntityLocker Account">
          <div className='details-text mt-32 mb-14'>
             <p className='body-s font-bold'>Entity Details</p>
              <ul className='cardList'>
                <li className='row listItem body-xs font-regular'><span className='col gray-700'>Entity Name</span><span className='col font-medium'>sample@gmail.com</span></li>
                <li className='row listItem body-xs font-regular'><span className='col gray-700'>Contact Number</span><span className='col font-medium'>9871234865</span></li>
                <li className='row listItem body-xs font-regular'><span className='col gray-700'>TIN</span><span className='col font-medium'>12344321234</span></li>
                <li className='row listItem body-xs font-regular'><span className='col gray-700'>Date of Incorporation</span><span className='col font-medium'>12/02/1992</span></li>
              </ul>
          </div>
          <div className='details-text mt-32 mb-14'>
             <p className='body-s font-bold'>SPOC Details</p>
             <p className='gray-700 body-xxs font-regular'>There are no SPOCs currently, You may add new.</p>
             <MuiButton
                type="submit"
                name="Add SPOC"
                variant="outlined"
                startIcon={<AddIcon />}
                fullWidth
                sx={{
                  padding: '0.625rem 1rem',
                  color: `var(--brand-500)`,
                  background: `var(--gray-000)`,
                  borderRadius: "6.25rem",
                  fontWeight: `var(--font-medium)`,
                }}
              />
          </div>

         <MuiButton
          type="submit"
          name="Complete Registration"
          variant="contained"
          fullWidth
          sx={{
            // marginBottom: "1.75rem",
            background: `var(--brand-500)`,
            borderRadius: "6.25rem",
            fontWeight: `var(--font-medium)`,
          }}
        />
        </MuiModal>
        
    </>
  )
}