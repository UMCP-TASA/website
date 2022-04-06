import React, { Component } from 'react';
import FamilyTree from './mytree';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{height: '100%'}}>

                <FamilyTree nodes={[
                    { id: 1, pids: [2], name: "Daniel Zhang", gender: "male"},
                    { id: 3, mid: 1, fid: 2, name: "Spencer Chen", gender: "male"},
                    { id: 4, mid: 1, fid: 2, name: "Patrick Chen", gender: "male"},
                    { id: 5, mid: 1, fid: 2, name: "Abby Song", gender: "female"}
                ]} />
                <FamilyTree nodes={[
                    { id: 1, pids: [2], name: "Sarah Yang", gender: "female"},
                    { id: 3, pids: [2], mid: 1, fid: 2, name: "Daniel Zhang", gender: "male"},
                    { id: 5, pids: [2], mid: 3, fid: 4, name: "Spencer Chen", gender: "male"},
                    { id: 21, mid: 5, fid: 6, name: "Ashley Chau", gender: "female"},
                    { id: 22, mid: 5, fid: 6, name: "Serene Li", gender: "female"},
                    { id: 23, mid: 5, fid: 6, name: "Tony Wu", gender: "male"},
                    { id: 7, mid: 3, fid: 4, name: "Patrick Chen", gender: "male"},
                    { id: 8, mid: 3, fid: 4, name: "Abby Song", gender: "female"},
                    { id: 9, pids: [2], mid: 1, fid: 2, name: "Megan Hsiung", gender: "female"},
                    { id: 11, mid: 9, fid: 10, name: "Annie Tang", gender: "female"},
                    { id: 12, mid: 9, fid: 10, name: "Brant Jiang", gender: "male"},
                    { id: 13, mid: 9, fid: 10, name: "Steven Tan", gender: "male"},
                    { id: 14, mid: 9, fid: 10, name: "Jackie Wong", gender: "female"},
                    { id: 15, mid: 9, fid: 10, name: "Josh Pursley", gender: "male"},
                    { id: 16, pids: [2], mid: 1, fid: 2, name: "Tiffany Yen", gender: "female"},
                    { id: 18, mid: 9, fid: 10, name: "George Li", gender: "male"},
                    { id: 19, mid: 9, fid: 10, name: "Michaela Yee", gender: "female"},
                    { id: 20, mid: 9, fid: 10, name: "Rebecca Zhang", gender: "female"}


                ]} />
            </div>
        );
    }
}