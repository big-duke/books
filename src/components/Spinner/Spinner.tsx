import { Grid } from 'react-loader-spinner';
import './style.css'
export const Spinner:React.FC = () => {
  return (
    <Grid
      height="80"
      width="80"
      color="#4481C3"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperClass='spinner-wrapper'
      visible
    />);
}
 
