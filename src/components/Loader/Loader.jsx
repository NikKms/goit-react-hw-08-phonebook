import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    // <div
    // // style={{
    // //   position: 'fixed',
    // //   top: '0',
    // //   left: '0',
    // //   width: '100vw',
    // //   height: '100vh',
    // //   display: 'flex',
    // //   justifyContent: 'center',
    // //   alignItems: 'center',
    // //   backgroundColor: 'rgba(0, 0, 0, 0.1)',
    // //   zIndex: '1200',
    // // }}
    // >

    // </div>
    <RotatingLines
      strokeColor="grey"
      strokeWidth={5}
      animationDuration={0.75}
      width={96}
      visible={true}
    />
  );
};

export default Loader;
