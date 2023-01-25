import Home from "../Components/Home";
import {connect} from 'react-redux';
import { addToCort } from "../Service/Actions/action";
const mapStateToProps=state=>({
// cordData:state.data
data:state.cordItems
})
const mapDispatchToProps=dispatch=>({
    addToCortHandler:data=>dispatch(addToCort(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);