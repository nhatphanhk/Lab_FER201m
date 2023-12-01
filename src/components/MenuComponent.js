import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem} from "reactstrap";
//import DishDetail from "./DishdetailComponent";
import { Loading } from "./LoadingComponent";
import { baseUrl } from '../shared/baseUrl';
function RenderMenuItem ({dish, isLoading, errMess}) {
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else 
        return (            
                <Card>
                    <Link to = {`/menu/${dish.id}`}>
                        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>                         
                        <CardImgOverlay >
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                </Card>    
            
        );
} 
    
    
        const Menu = (props) => {
            const menu = props.dishes.dishes.map((dish) => {

                return (
                    <div  className="col-12 col-md-5 m-1">
                        <RenderMenuItem dish={dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
                    </div>
                ) 
            });
        
            
       
        console.log ('Menu Component render is invoked');
        if (props.isLoading) {
            return(
                    <Loading />
            );
        }
        else if (props.errMess) {
            return(
                    <h4>{props.errMess}</h4>
            );
        }
        else 
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr/>
                        </div>
                            
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
            )
    }



export default Menu;