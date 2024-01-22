import './CostItem.css';

function CostItem(){
    return (<div className="cost-item">
            <div>март 2024 12</div>
            <div className='cost-item__description'>
                <h2>Холодильник</h2>
                <div className="cost-item__price">$990</div>
            </div>
            
        </div>)
}

export default CostItem;