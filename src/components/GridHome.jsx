import React from 'react'

function GridHome() {

    return (
        <div>
            <h1>Grid home</h1>
        </div>
    )
}

export default GridHome;

/* A retravailler */
/* 
class GridHome extends Component {
    constructor (props) {
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            items: []
        }
    }

    componentDidMount() {
        fetch(process.env.PUBLIC_URL + '/appartments-list.json')
        .then(res => res.json())
        .then( 
            (result) => {this.setState({
                isLoaded:true, 
                items: result 
            });
        },
            (error) => {this.setState({
                isLoaded: true, 
                error});
            }
        )
    }
      
    render() {
        const { error, isLoaded, items } = this.state;
    
        if (error) {
            return <div>Error</div>
        } else if (!isLoaded) {
            return <div>Loading</div>
        } else {
            return (
                <div className="appartments">
                    <div className="appartments-list">
                        {items.map(logement => (
                            <Card logement={logement} key={logement.id} />
                        ))}
                    </div>
                </div>
            )
        }
    }
     */