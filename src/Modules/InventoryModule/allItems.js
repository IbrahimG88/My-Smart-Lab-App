import React, { Component } from 'react';
import InventoryMain from './inventorymain';

import InventorySearch  from "./inventorySearchComponent";

class AllItems extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }

    }

render()
{
return(
         <div> from inside allItems functional component
                {this.props.allItemsList.map((item) =>{
                    if(this.props.showAllItemsList)
                    {
                    return( <ul><li>{item}</li></ul>);}
                })} </div>
        );
    }
}


export default AllItems;