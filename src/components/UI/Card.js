import './Card.css';

function card({className , children}){
return (<div className={'card '+className}>
    {children}
</div>)
}

export default card;