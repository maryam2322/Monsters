import React from "react";
import {Link} from "react-router-dom";
import {Container,Card} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export const MonsterPage = () => {
    const params = useParams();
    const [monster, setMonster] = useState({
        id: 1,
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    })
    const getMonster = () =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${params.monsterID}`)
            .then(response => response.json())
            .then(data => setMonster(data));
    }

    useEffect(() => {
        getMonster();
    }, [params.monsterID])


    return (
        <Container>
            <Card>
                <Card.Body style={{
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <img style={{
                        border: '1px solid pink',
                        borderRadius: '50%',
                    }}
                        src={'https://robohash.org/ ' + monster.username} alt="avatar"/>
                    <Card.Title>{monster.name}</Card.Title>
                    <Card.Title>{monster.username}</Card.Title>
                    <Card.Title>{monster.email}</Card.Title>
                    <Card.Title>{monster.phone}</Card.Title>
                    <Card.Title>{monster.website}</Card.Title>
                    <Link to='/monsters'>Back to list</Link>
                </Card.Body>
            </Card>
        </Container>
    );

}

export default MonsterPage