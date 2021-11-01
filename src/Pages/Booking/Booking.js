import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useForm } from "react-hook-form";
import { Container, Card, Col, Button } from "react-bootstrap";
import "./Booking.css";
import useAuth from "../../hooks/useAuth";
import { Alert, AlertIcon } from "@chakra-ui/alert";

function Booking() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const [alert, setAlert] = useState(false);
  const { user } = useAuth();
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `https://enigmatic-journey-29953.herokuapp.com/service/${serviceId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const onSubmit = (data) => {
    data.email = user.email;
    data.id = service._id;
    data.title = service.title;
    data.price = service.price;
    data.status = "Pending";
    console.log(data.address);

    fetch("https://enigmatic-journey-29953.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          setAlert(true);
          setTimeout(() => {
            history.push("/myOrders");
          }, 1000);
        }
      });
  };

  return (
    <div className="mx-auto">
      {alert ? (
        <Container>
          <Alert className="m-5" status="success">
            <AlertIcon />
            Order processed Successfully!
          </Alert>
        </Container>
      ) : (
        <>
          <Container fluid="md">
            <h1 className="text-center fs-1 p-3">Booking</h1>
            <div className="mx-auto d-flex justify-content-center align-items-center">
              <Col sm={6} xs={12} md={6}>
                <Card className="services__card">
                  <div className="ml-3 p-3 image__area">
                    <img width="100%" height="400px" src={service.img} alt="" />
                  </div>
                  <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text className="mt-3">{service.description}</Card.Text>
                    <Card.Text className="mt-3 color__primary">
                      ${service.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} xs={12} md={6}>

                <h2 className="pt-5">Add More Info</h2>
                <form className="Order-form" onSubmit={handleSubmit(onSubmit)}>

                  <input defaultValue={user.displayName} {...register("name")} />

                  <input defaultValue={user.email} {...register("email", { required: true })} />
                  {errors.email && <span className="error">This field is required</span>}
                  <input placeholder="Address" defaultValue="" {...register("address")} />
                  <input placeholder="City" defaultValue="" {...register("city")} />
                  <input placeholder="phone number" defaultValue="" {...register("phone")} />

                  <input type="submit" />
                </form>
              </Col>
            </div>
          </Container>
        </>
      )}
    </div>
  );
}

export default Booking;
