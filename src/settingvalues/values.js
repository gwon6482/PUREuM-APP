import { Dimensions  } from 'react-native';

export default function R_SIZE(x){
    const SCREEM_WIDTH = Dimensions.get("window").width
    console.log(SCREEM_WIDTH)
    //const SCREEM_HEIGHT = Dimensions.get("window").height

    return (SCREEM_WIDTH / 428) * x
  }