import "./App.css";
import { Form, Button,Card } from "react-bootstrap";
import React, { useState,useEffect } from "react";
import axios from "axios";




function App() {
  const [data, setData] = useState([])
  const [user_id, setUser_id] = useState('')
  const [description, setDescription] = useState('')
  const [keywords, setKeywords] = useState('')
  const [lat, setlat] = useState('')
  const [lon, setlon] = useState('')
  const [image, setimage] = useState()
  const [dateTo, setdateTo] = useState('')
  const [dateFrom, setdateFrom] = useState('')
  const [id, setId] = useState(0)
  async function getAllItems(){
    try{
      const items = await axios.get("http://127.0.0.1:8000/api/items/")
      console.log(items.data)
      setData(items.data)
    }
    catch(error){

    }
  }
  useEffect(() => {
    
    getAllItems()
  }, []);
  const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}
  const createItem = () =>{
    const data = new FormData()
    data.append('date_from',dateFrom)
    data.append('date_to',dateTo)
    data.append('user_id',user_id)
    data.append('description',description)
    data.append('keywords',keywords.split(","))
    if(image != "" || image !=null){
      data.append('image',image)
    }
    data.append('lat',lat)
    data.append('lon',lon)
    console.log(image)
    axios.post('http://127.0.0.1:8000/api/create/',data,config
    ).then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
      getAllItems()
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })
  };
  const updateItemDataSet = (ids,i) =>{
    console.log(ids)
    console.log(i)
    setId(ids)
    setUser_id(data[i].user_id)
    setdateFrom(data[i].date_from.substring(0,10))
    setdateTo(data[i].date_to.substring(0,10))
    setDescription(data[i].description)
    setlat(data[i].lat)
    setlon(data[i].lon)
    setKeywords(data[i].keywords.toString())
    setimage(data[i].image)
   
  }
  const updateItem = () => {
    const data = new FormData()
    data.append('id',id)
    data.append('date_from',dateFrom)
    data.append('date_to',dateTo)
    data.append('user_id',user_id)
    data.append('description',description)
    data.append('keywords',keywords.split(","))
    data.append('image',image)
    data.append('lat',lat)
    data.append('lon',lon)
    console.log(image)
    axios.put('http://127.0.0.1:8000/api/item/'+id,data,config
    ).then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
      getAllItems()
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })
  }
  const deleteItem= (ids) => {
    axios.delete('http://127.0.0.1:8000/api/item/'+ids
    ).then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
      getAllItems()
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })
  }
  
  return (
    <div className="container px-0">
      <h1 className="bg-danger py-3 mt-3 mx-0 text-center">React Crud App</h1>
      <div className="row">
        <div className="col-md-4 ">
          <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>UserId</Form.Label>
              <Form.Control type="text" placeholder="User Id" name="user_id" value={user_id} onChange={(e) => setUser_id(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Keywords</Form.Label>
              <Form.Control
                type="text"
                placeholder="keywords,"
                name="keywords"
                value={keywords} onChange={(e) => setKeywords(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <label htmlFor="exampleFormControlTextarea1">Description</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                name="description"
                value={description} onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>latitude</Form.Label>
              <Form.Control type="number" placeholder="latitude" name="lat"
                              value={lat} onChange={(e) => setlat(e.target.value)}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>longitude</Form.Label>
              <Form.Control type="number" placeholder="longitude" name="lon"
                              value={lon} onChange={(e) => setlon(e.target.value)}
                              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date From</Form.Label>
              <Form.Control
                type="date"
                placeholder="dd-mm-yyyy"
                value=""
                min="1997-01-01"
                max="2030-12-31"
                name="date_from"
                value={dateFrom} onChange={(e) => setdateFrom(e.target.value)}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date To</Form.Label>
              <Form.Control
                type="date"
                placeholder="dd-mm-yyyy"
                min="1997-01-01"
                max="2030-12-31"
                name="date_to"
                value={dateTo} onChange={(e) => setdateTo(e.target.value)}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              
              <Form.Control
                type="text"
                value={image}
                onChange={(e) => setimage(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary"  type="button" onClick={createItem}>
              Add
            </Button>
            <Button variant="primary"  className="mx-1" type="button" onClick={updateItem}>
              Update
            </Button>
          </Form>
        </div>
        <div className="col-md-6">
          {
            data.map((item,i)=>{
              return (
                <Card className="shadow bg-secondary text-white mt-2 w-100" >
            <Card.Img variant="top" height={300} src={item.image} />
            <Card.Body>
              <Card.Title>{item.user_id}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Card.Text>Lat-Long:
                {item.lat}, 
                {item.lon}
              </Card.Text>
              <Card.Text>
                Date From:
                {item.date_from}
              </Card.Text>
              <Card.Text>
                Date TO:
                {item.date_to}
              </Card.Text>
              <Card.Text>
               Keywords: {item.keywords.map((key,j)=>{
                 return(
                  <h6>{key}</h6>
                 );
               })}
              </Card.Text>
              <Button variant="warning" onClick={() => updateItemDataSet(item.id,i)} className="mx-1">Edit</Button>
              <Button variant="danger" onClick={() => deleteItem(item.id)} >Delete</Button>
            </Card.Body>
          </Card>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
