import { Card } from 'antd';
import React from 'React';

class MyCard1  extends React.Component{

    render(){
        return (
            <div className='card'>
                <div className='cardContent'>
                    {this.props.content}
                </div>
            </div>
        );
    }
}

class MyCard2 extends  React.Component{
    render(){
        return (
            <div className='card'>
                <div className='cardContent'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}


export default class AllCard extends React.Component{



    render(){

        const style = {
            width: 400,
            height: 200,
            margin: 30,
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            border: '1px solid #e8e8e8'
        };

        return (
            <div>
                <Card style={style} actions={[<a>操作1</a>,<a>操作2</a>]}>
                    <Card.Meta
                        avatar={<img
                            alt=''
                            style={{
                                width: '64px',
                                borderRadius: '32px'
                            }}
                            src={"https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"}
                        ></img>}
                        title={"Alipay"}
                        description={"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"}
                    ></Card.Meta>
                </Card>


                <MyCard1 content={
                    <div>hello <h3>world</h3></div>
                }/>

                <MyCard2>
                    <div>hello <h3>world</h3></div>
                </MyCard2>

            </div>
        );
    }

}