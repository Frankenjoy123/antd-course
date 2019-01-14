import React from 'React';
import ShoppingList from '../component/shoppinglist.js';

class Content extends React.Component {
    render() {
        return (
            <ShoppingList name="张三" >
                这是this.props.children的内容
            </ShoppingList>
        );
    }
}

export default Content;