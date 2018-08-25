import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';
import styles from "./inventorymain.css";


import AllItems from './allItems';

import InventorySearch from "./inventorySearchComponent";

class InventoryMain extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            addForm: false,
            allItems:[],
            searchResults: [],
            filterText:'',
        };

        this.addFormToggle = this.addFormToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);



    }


    addFormToggle(){
        this.setState({addForm: !this.state.addForm});

    }

    handleSubmit(event){
        this.state.allItems.push(this.state.name);
        this.setState({name: ''});

        event.preventDefault();
        //to reutrn the fab available again:
        // this.setState({addForm: !this.state.addForm});
    }

    handleChange(event){
        this.setState({name: event.target.value})
    }







    render(){
        const addingForm =
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name}
                           onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
                <button onClick={this.addFormToggle}>Close</button>
            </form>;

        if(this.state.addForm) {
            return (addingForm);
        }



        const buttonStyle={
            position: 'absolute',
            right:    0,
            bottom:   0,
            marginRight: '20px',
            marginBottom: '20px'
        };
        return(
            <div>



                <InventorySearch
                    allItemsList={this.state.allItems}

                />


                 <Button variant="contained" color="primary">Inventory Main</Button>

                <Button onClick={this.addFormToggle}  variant="fab" color="secondary" aria-label="Add" style={buttonStyle}>
                    <AddIcon />
                </Button>


                <p>Search Results:</p>

           /*     {this.state.searchResults.map((item)=>{
                    return( <ul><li>{item}</li></ul>);
                })}*/
            </div>
        );
    }
}

export default InventoryMain;


//TODO divide the module into subcomponents