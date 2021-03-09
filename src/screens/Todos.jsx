import React, { useState } from 'react';
import AppHeader from '../components/AppHeader';
import Todo from '../components/Todo';
import AppFooter from '../components/AppFooter';
import Container from '../components/Container';
import Row from '../components/Row';

import '../style/components/add-todo.css';

const Todos = () => {
    const [placeholderTodos] = useState([{id: 1}, {id: 2}]);
    return (
        <main>
            <AppHeader />
            <Row>
                <Container>
                    <div className="c-add-todo">
                        <button className="c-add-todo-button">
                            <svg className="c-add-todo-button__icon" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="arcs">
                                <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <div className="c-add-todo-data">
                            <input placeholder="What needs to be done?" className="c-add-todo-data__input" type="text" name="" id=""/>
                            <div>
                                <select className="c-add-todo-data__select" name="" id="">
                                    <option value="hobby">Hobby</option>
                                    <option value="school">School</option>
                                    <option value="work">Work</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {placeholderTodos.map((t) => {
                        return (<Todo />)
                    })}
                </Container>
            </Row>
            <AppFooter />
        </main>
    );
};

export default Todos;