import 'swiper/swiper.min.css';
import "./Cards.scss";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";


SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function Cards() {

  return (

    <div className="contanier mx-5">
      <div className="grid row mt-2">
        <div className="col-4 d-flex justify-content-center">
        <div className="card w-75 shadow p-1 mb-5 bg-body rounded" >
              <img src='https://images.unsplash.com/photo-1555951015-6da899b5c2cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' className="card-img-top" alt="..."/>
              <div className="card-body">
                <p className="text-center">La mejores harinas</p>
              </div>
            </div>
        </div>
        <div className="col-4 d-flex justify-content-center">
        <div className="card w-75 shadow p-1 mb-5 bg-body rounded" >
              <img src='https://images.unsplash.com/photo-1559811814-e2c57b5e69df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' className="card-img-top" alt="..."/>
              <div className="card-body">
                <p className="text-center">Con Masa Madre</p>
              </div>
            </div>
        </div>
        <div className="col-4 d-flex justify-content-center">
        <div className="card w-75 shadow p-1 mb-5 bg-body rounded">
              <img src='https://images.unsplash.com/photo-1618194696460-202623a57e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'  className="card-img-top" alt="..."/>
              <div className="card-body">
                <p className="text-center">Pan de Semanillas</p>
              </div>
            </div>
        </div>
   

      </div>
 </div>
  );
}

export default Cards