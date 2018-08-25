import React, { Component } from 'react';
import InventoryMain from './inventorymain';

import AllItems from "./allItems";


class InventorySearch extends React.Component {
    constructor(props){
        super(props);
        this.state={
        searchResults:[],
        showSearchedItems: true,
        showAllItemsList: true
        };

        this.searchFunction = this.searchFunction.bind(this);
        this.searchToggle = this.searchToggle.bind(this);

        this.allItemsList = props.allItemsList;

    }

    searchFunction(event) {

        this.setState({showAllItemsList: false});

                this.state.searchResults = [];
                const searchInput = event.target.value.toUpperCase();

                this.allItemsList.map((item) => {
                    if (item.toUpperCase().indexOf(searchInput) > -1) {

                        this.state.searchResults.push(item);
                        console.log(this.state.searchResults);
                        this.setState({searchResults: this.state.searchResults});
                    }
                });

        }

        searchToggle(){
        this.setState({showSearchedItems: !this.state.showSearchedItems});
        }


    render(){

    return(

        <div>from inventory input search

            <input type="search" placeholder="search for..."  onChange={this.searchFunction}/>
            <button onClick={this.searchToggle}>Close Search</button>

            <AllItems showAllItemsList={this.state.showAllItemsList}
                      allItemsList={this.allItemsList}/>




            {this.state.searchResults.map((item) => {
                if(this.state.showSearchedItems){
                return (<ul>
                <li>{item}</li>
                </ul>);
            }})}

            end of component
        </div>
    );
    }
}
export default InventorySearch;




