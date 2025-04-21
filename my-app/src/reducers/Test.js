import {useSelector}from "react-redux";
function Test(props){
    const hobbyList = useSelector(state=>state.hobby.qty)
}
return