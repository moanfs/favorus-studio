import { TypeAnimation } from 'react-type-animation';

const TypeHero = () =>{
    return(
    <TypeAnimation
      sequence={[
        'Host Live  ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Digital Marketing ',
        1000,
        'Branding Design  ',
        1000,
      ]}
    //   wrapper="span"
      speed={50}
    //   style={{ fontSize: '1.2rem', display: 'inline-block' }}
      repeat={Infinity}
    />
    )
}
export default TypeHero