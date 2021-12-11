import {useEffect, useState} from "react";
import {Container, Row, Col, InputGroup, FormControl} from "react-bootstrap";
import {MonsterCard} from "..";
import {Link} from "react-router-dom";
const MonsterList = () => {
    const [MonsterList, setMonsterList] = useState([]);
    const [filter, setFilter] = useState('')
    const getMonsters = () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setMonsterList(data));
    }

    useEffect(() => {
        document.title = "Monster List"
        getMonsters();
    },[]);

    return (
        <Container>
            <Row>
                <Col className='mt-4'>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Monster name"
                            aria-label="Monster name"
                            onChange={e => setFilter(e.target.value)}
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                {
                    MonsterList.filter(monster => monster.name.toLowerCase().includes(filter.toLowerCase())).length ===0 ?
                        <h1 className='text-center mt-3'>There is no <strong className='text-danger'>Monster</strong> with this name :|</h1>:
                    MonsterList.filter(monster => monster.name.toLowerCase().includes(filter.toLowerCase()))
                    .map((monster) => (
                        <Col className='mt-5' key={monster.id} xs={12} sm={6} md={4} lg={3}>
                           <Link to={`/monsters/${monster.id}`}>
                            <MonsterCard
                                name={monster.name}
                                description={monster.email}
                                image={'https://robohash.org/ ' + monster.username}
                            />
                           </Link>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

export default MonsterList