import { Row } from "react-bootstrap";
import useService from "../../../hooks/useService";
import Service from "../Service/Service";

const Services = () => {
    const [serve] = useService();

    return (
        <div className="container my-5">
            <h2 className="fs-1 fs-bolder fw-bold text-center">Our Services</h2>

            <Row xs={1} sm={1} md={2} lg={3} className="g-4 py-5">
                {
                    serve.map(serv => <Service key={serv._id} serv={serv}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;