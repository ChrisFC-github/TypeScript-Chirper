import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
export default class Home extends React.Component<IListProps, IListState> {
    constructor(props: IListProps) {
        super(props);
        this.state = {
            chirps: []
        }
    }
    componentDidMount() {
        this.fetchChirps();
    }
    fetchChirps = async () => {
        fetch("/api/chirps")
            .then(data => data.json())
            .then(data => this.setState({ chirps: data }))
            .catch(err => console.log(err));
    }
    deleteChirp = async id => {
        try {
            let res = await fetch(`api/chirps/${id}`, { method: "DELETE" });
            this.fetchChirps();
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        return this.state.chirps.map((chirp: IChirp) => (
            <div key={chirp.id} className="card text-white bg-light mb-3">
                <div className="card-header text">{chirp.username}</div>
                <div className="card-body">
                    <p className="card-text text">{chirp.message}</p>
                </div>
                <button className="btn btn-dark btn-sm" onClick={() => this.deleteChirp(chirp.id)}>Delete</button>
            </div>
        ))//  (<h1 key={chirp.id}>{chirp.username}{chirp.message}</h1>)
    }
}
interface IListProps extends RouteComponentProps<{ id: string }> {
}
interface IListState {
    chirps: Array<object>;
}

interface IChirp {
    id: number,
    username: string,
    message: string

}