import React, { Component } from 'react';
import { Carousel, SearchBar } from 'antd-mobile';
import { getCategory } from '../../api'
import './style.less';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            categories: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
        this.getCategoryData()
    }

    async getCategoryData() {
        const res = await getCategory();
        if (res.code === 0) {
            this.setState({
                categories: res.data
            })
        }
    }

    handleClick = () => {
        // this.props.history.push('/test')
    }

    render() {
        return (
            <div className="page-home">
                <div className="search">
                    <input type="text" placeholder="请输入..."/>
                </div>
                <div>
                    <Carousel
                        autoplay={false}
                        infinite
                        selectedIndex={this.state.slideIndex}
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map((val, index) => (
                            <a
                                key={val + index}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </div>
                <div>
                    {
                        this.state.categories.map(item => {
                            return (
                                <div className="category-item" key={item.id}>
                                    <img src={item.imgUrl} alt=""/>
                                    <span>{item.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Home;
