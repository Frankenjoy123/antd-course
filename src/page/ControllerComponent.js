import React from 'React';
import { Tabs } from 'antd';
import { Tree } from 'antd';


const MyInput = ({value='',onChange}) => {
    return (
        <input value={value} onChange={onChange}/>
    );
};

const TabPane = Tabs.TabPane;
const {TreeNode} = Tree;

class Demo extends  React.Component{

    constructor(props){
        super(props);
        this.state = {
            value:'',
            tab:'1',
            expandedKeys : []
        }
    }


    onTextChange = (event) => {
        console.log(event.target.value);
        this.setState({
            value : event.target.value
        });
    };

    onTextReset = () => {
        // 我该怎么做？
        // 拿到 MyInput 内部的 input 元素然后设置 value 为 ''？
      this.setState({
          value: ''
      });
    };

    onTabChange = (activeKey) => {

        console.log('activeKey:'+activeKey);
        this.setState({
            tab : activeKey
        });
    };

    // 接收原本的展开事件，在 state 中记录 expandedKeys
    onExpand = (expandedKeys) => {
        this.setState({ expandedKeys });
    }

    onNodeSelect = (selectedKeys) => {

        console.log('selectedKeys:'+selectedKeys);

        const {expandedKeys} = this.state;

        const key = selectedKeys[0];

        if(this.state.expandedKeys.includes(key)){
            // 移除 key
            this.setState({
                expandedKeys : expandedKeys.filter(t => t!==key)
            });
        }else {
            this.setState({
                expandedKeys : [... expandedKeys , key]
            });
        }


    };


    render(){
        return (
            <div>
                <MyInput value={this.state.value} onChange={this.onTextChange}/>
                <button style={{
                    width: '100px',
                    padding : '5px',
                    margin: '10px'
                }} onClick={this.onTextReset}> 重置 </button>

                <br/>

                <Tabs activeKey={this.state.tab} onChange={this.onTabChange}>
                    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                </Tabs>

                <br/>

                <Tree expandedKeys={this.state.expandedKeys} selectedKeys={[]}
                      onExpand={this.onExpand} onSelect={this.onNodeSelect}>
                    <TreeNode title="parent 1" key="0-0">
                        <TreeNode title="leaf" key="0-0-0" />
                        <TreeNode title="leaf" key="0-0-1" />
                    </TreeNode>
                </Tree>


            </div>

        );
    }
}

export default Demo;